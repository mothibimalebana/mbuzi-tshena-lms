from datetime import datetime, timedelta, date
from typing import List
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from sqlalchemy import func, and_

from app.database import get_db
from app.models import (
    User, LoanApplication, Loan, Payment, FraudAlert, BorrowerScore,
    ApplicationStatus, UserRole, PaymentType, PaymentStatus
)
from app.schemas import (
    AdminDashboard, DashboardStats, ChartDataPoint, FraudAlertOut,
    UserOut, PaginatedResponse
)
from app.auth import get_current_admin
from app.utils.risk_score import relative_date, format_currency
from app.utils.reliability import save_reliability, latest_score
from fastapi import Query

router = APIRouter(prefix="/api/admin", tags=["Admin"])


def percent_change(now: float, before: float) -> str:
    """Change compared with last week, e.g. "+50%", "-20%", "0%" ("new" when there was nothing last week)."""
    if before == 0:
        return "new" if now > 0 else "0%"
    return f"{(now - before) / before * 100:+.0f}%".replace("+0%", "0%").replace("-0%", "0%")


def average_risk(db: Session, start: datetime, end: datetime) -> float:
    """Average AI risk score of applications submitted between start and end (0 if there were none)."""
    value = (
        db.query(func.avg(LoanApplication.ai_risk_score))
        .filter(LoanApplication.created_at >= start, LoanApplication.created_at < end,
                LoanApplication.ai_risk_score.isnot(None))
        .scalar()
    )
    return float(value) if value else 0.0

def dashboard_trends(db: Session, active_now: int, reliable_now: int, borrowers: list) -> dict:
    """Real week-on-week changes for the 4 cards on the admin Overview."""
    now = datetime.utcnow()
    week_ago = now - timedelta(days=7)
    two_weeks_ago = now - timedelta(days=14)

    # Loans that already existed a week ago (paid-off dates are not stored, so this is an estimate)
    active_week_ago = db.query(Loan).filter(Loan.created_at <= week_ago, Loan.status.in_(["Active", "Paid Off"])).count()

    # Reliable borrowers a week ago: each borrower's newest score from before that date
    reliable_week_ago = 0
    for b in borrowers:
        old = (
            db.query(BorrowerScore)
            .filter(BorrowerScore.user_id == b.id, BorrowerScore.created_at <= week_ago)
            .order_by(BorrowerScore.created_at.desc(), BorrowerScore.id.desc())
            .first()
        )
        if old and old.score_status == "Reliable":
            reliable_week_ago += 1

    new_alerts = db.query(FraudAlert).filter(FraudAlert.created_at >= week_ago).count()
    return {
        "active_loans": percent_change(active_now, active_week_ago),
        "borrowers": percent_change(reliable_now, reliable_week_ago),
        "risk_score": percent_change(average_risk(db, week_ago, now), average_risk(db, two_weeks_ago, week_ago)),
        "fraud": f"+{new_alerts}" if new_alerts else "0",
    }


@router.get("/dashboard", response_model=AdminDashboard)
def dashboard(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    # Active loans
    active_loans = db.query(Loan).filter(Loan.status == "Active").all()
    total_active_amount = sum(float(l.outstanding_balance) for l in active_loans)
    total_active_count = len(active_loans)

    # Reliable borrowers: their latest reliability score says "Reliable" (Run Batch Analysis on the Borrowers page)
    borrowers = db.query(User).filter(User.role == UserRole.BORROWER, User.is_active == True).all()
    reliable_count = 0
    for b in borrowers:
        score = latest_score(b, db)
        if score and score.score_status == "Reliable":
            reliable_count += 1

    # Avg risk score
    avg_score = (
        db.query(func.avg(LoanApplication.ai_risk_score))
        .filter(LoanApplication.ai_risk_score.isnot(None))
        .scalar()
    )
    avg_score = float(avg_score) if avg_score else 24.0

    # Fraud alerts (unresolved)
    fraud_count = (
        db.query(func.count(FraudAlert.id))
        .filter(FraudAlert.is_resolved == False)
        .scalar()
        or 0
    )

    # Processed today
    today_start = datetime.combine(date.today(), datetime.min.time())
    processed_today = (
        db.query(func.count(LoanApplication.id))
        .filter(LoanApplication.created_at >= today_start)
        .scalar()
        or 0
    )

    stats = DashboardStats(
        total_active_loans_amount=total_active_amount,
        total_active_loans_count=total_active_count,
        reliable_borrowers_count=reliable_count,
        avg_ai_risk_score=round(avg_score, 1),
        fraud_alerts_count=fraud_count,
        processed_today=processed_today,
        accuracy_pct=99.8,  # placeholder
        trends=dashboard_trends(db, total_active_count, reliable_count, borrowers),
    )

    # Chart data – last 7 days
    chart_data: List[ChartDataPoint] = []
    days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    for i in range(6, -1, -1):
        day_date = date.today() - timedelta(days=i)
        day_start = datetime.combine(day_date, datetime.min.time())
        day_end = datetime.combine(day_date, datetime.max.time())

        approvals = (
            db.query(func.count(LoanApplication.id))
            .filter(
                LoanApplication.status == ApplicationStatus.APPROVED,
                LoanApplication.reviewed_at >= day_start,
                LoanApplication.reviewed_at <= day_end,
            )
            .scalar()
            or 0
        )
        rejections = (
            db.query(func.count(LoanApplication.id))
            .filter(
                LoanApplication.status == ApplicationStatus.REJECTED,
                LoanApplication.reviewed_at >= day_start,
                LoanApplication.reviewed_at <= day_end,
            )
            .scalar()
            or 0
        )
        # fallback to created if no reviews yet
        if approvals == 0 and rejections == 0:
            approvals = (
                db.query(func.count(LoanApplication.id))
                .filter(
                    LoanApplication.ai_action == "Auto-Approve",
                    LoanApplication.created_at >= day_start,
                    LoanApplication.created_at <= day_end,
                )
                .scalar()
                or 0
            )

        chart_data.append(
            ChartDataPoint(
                day=days[day_date.weekday()],
                approvals=approvals,
                rejections=rejections,
            )
        )

    # Recent fraud alerts
    alerts = (
        db.query(FraudAlert)
        .filter(FraudAlert.is_resolved == False)
        .order_by(FraudAlert.created_at.desc())
        .limit(10)
        .all()
    )
    recent_alerts = [
        FraudAlertOut(
            id=a.alert_id,
            reason=a.reason,
            time=relative_date(a.created_at),
            risk=a.risk_score,
        )
        for a in alerts
    ]

    return AdminDashboard(
        stats=stats,
        chart_data=chart_data,
        recent_alerts=recent_alerts,
    )


@router.get("/borrowers", response_model=PaginatedResponse)
def list_borrowers(
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    search: str = None,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    q = db.query(User).filter(User.role == UserRole.BORROWER)

    if search:
        term = f"%{search}%"
        q = q.filter(
            (User.full_name.ilike(term))
            | (User.email.ilike(term))
            | (User.id_number.ilike(term))
        )

    total = q.count()
    users = (
        q.order_by(User.created_at.desc())
        .offset((page - 1) * page_size)
        .limit(page_size)
        .all()
    )

    items = [
        {
            **reliability_fields(latest_score(u, db)),
            "id": u.id,
            "name": u.full_name,
            "email": u.email,
            "id_number": u.id_number,
            "phone": u.phone_number,
            "joined": relative_date(u.created_at),
            "loans": [
                {
                    "reference": a.reference_number,
                    "amount": format_currency(float(a.loan_amount)),
                    "loan_type": a.loan_type,
                    "status": a.status.value,
                    "score": a.ai_risk_score or 0,
                }
                for a in u.applications
            ],
        }
        for u in users
    ]
    pages = (total + page_size - 1) // page_size
    return PaginatedResponse(
        items=items,
        total=total,
        page=page,
        page_size=page_size,
        pages=pages,
    )

def reliability_fields(score) -> dict:
    return {
        "reliability_score": score.reliability_score if score else None,
        "reliability_status": score.score_status if score else None,
        "reliability_remarks": score.remarks if score else None,
        "reliability_date": relative_date(score.created_at) if score else None,
    }

# "Run Batch Analysis": score every borrower at once (SRS feature #2)
@router.post("/borrowers/score")
def score_all_borrowers(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    counts = {"Reliable": 0, "Average": 0, "At risk": 0, "New": 0}
    for user in db.query(User).filter(User.role == UserRole.BORROWER).all():
        counts[save_reliability(user, db).score_status] += 1
    db.commit()
    return {"scored": sum(counts.values()), **counts}

@router.get("/alerts")
def list_alerts(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
     rows = (
        db.query(FraudAlert, LoanApplication)
        .outerjoin(LoanApplication, FraudAlert.application_id == LoanApplication.id)
        .order_by(FraudAlert.created_at.desc())
        .all()
    )
     return [
        {
            "id": a.alert_id,
            "type": (
                "Document Mismatch" if a.reason.startswith("Document mismatch")
                else "Fraud Suspicion" if a.risk_score >= 80
                else "High Risk"
            ),
            "relatedId": app.reference_number if app else "—",
            "relatedUser": app.full_name if app else "Unknown applicant",
            "dateTime": a.created_at.strftime("%Y-%m-%d %H:%M"),
            "description": a.reason,
            "status": "resolved" if a.is_resolved else "unresolved",
            "read": a.is_resolved,
        }
        for a, app in rows
    ]

@router.patch("/alerts/{alert_id}")
def toggle_alert(
    alert_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    alert = db.query(FraudAlert).filter(FraudAlert.alert_id == alert_id).first()
    if not alert:
        raise HTTPException(status_code=404, detail="Alert not found")
    alert.is_resolved = not alert.is_resolved
    db.commit()
    return {"status": "resolved" if alert.is_resolved else "unresolved"}