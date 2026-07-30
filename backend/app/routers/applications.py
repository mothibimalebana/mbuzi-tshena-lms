import secrets
import string
from datetime import datetime
from typing import Optional, List
from fastapi import APIRouter, Depends, HTTPException, status, Query, BackgroundTasks
from sqlalchemy.orm import Session
from sqlalchemy import or_, func

from app.database import get_db
from app.models import User, LoanApplication, ApplicationStatus, AIAction, Loan, FraudAlert, UserRole
from app.schemas import (
    LoanApplicationCreate,
    LoanApplicationOut,
    LoanApplicationUpdateStatus,
    LoanApplicationListItem,
    Message,
    PaginatedResponse,
)
from app.auth import get_current_user, get_current_admin, get_current_active_borrower
from app.utils.risk_score import compute_risk_score, format_currency, relative_date
from app.utils.email import send_application_confirmation

router = APIRouter(prefix="/api/applications", tags=["Loan Applications"])


def generate_reference() -> str:
    """Generate LN + 9 alphanumeric chars (e.g. LNX7K9P2Q)"""
    alphabet = string.ascii_uppercase + string.digits
    return "LN" + "".join(secrets.choice(alphabet) for _ in range(9))


def generate_loan_number() -> str:
    alphabet = string.ascii_uppercase + string.digits
    return "LN-" + "".join(secrets.choice(alphabet) for _ in range(8))


@router.post("", response_model=LoanApplicationOut, status_code=status.HTTP_201_CREATED)
async def create_application(
    data: LoanApplicationCreate,
    background_tasks: BackgroundTasks,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_active_borrower),
):
    # Generate unique reference
    ref = generate_reference()
    while db.query(LoanApplication).filter(LoanApplication.reference_number == ref).first():
        ref = generate_reference()

    # Compute risk score
    score, action = compute_risk_score(
        monthly_income=float(data.monthly_income),
        loan_amount=float(data.loan_amount),
        repayment_term=data.repayment_term,
        employment_status=data.employment_status,
        years_employed=data.years_employed,
        dependents=data.dependents,
        monthly_expenses=float(data.monthly_expenses) if data.monthly_expenses else None,
        date_of_birth=data.date_of_birth,
        existing_loans=data.existing_loans,
    )

    app = LoanApplication(
        reference_number=ref,
        user_id=current_user.id,
        full_name=data.full_name,
        id_number=data.id_number,
        date_of_birth=data.date_of_birth,
        phone_number=data.phone_number,
        email=data.email,
        marital_status=data.marital_status,
        dependents=data.dependents,
        residential_address=data.residential_address,
        city=data.city,
        province=data.province,
        postal_code=data.postal_code,
        years_at_address=data.years_at_address,
        residential_status=data.residential_status,
        employment_status=data.employment_status,
        employer_name=data.employer_name,
        employer_address=data.employer_address,
        occupation=data.occupation,
        monthly_income=data.monthly_income,
        years_employed=data.years_employed,
        loan_amount=data.loan_amount,
        loan_purpose=data.loan_purpose,
        loan_type=data.loan_type,
        repayment_term=data.repayment_term,
        bank_name=data.bank_name,
        account_number=data.account_number,
        account_type=data.account_type,
        reference1_name=data.reference1_name,
        reference1_phone=data.reference1_phone,
        reference1_relationship=data.reference1_relationship,
        reference2_name=data.reference2_name,
        reference2_phone=data.reference2_phone,
        reference2_relationship=data.reference2_relationship,
        monthly_expenses=data.monthly_expenses,
        existing_loans=data.existing_loans,
        additional_info=data.additional_info,
        status=ApplicationStatus.PENDING,
        ai_risk_score=score,
        ai_action=AIAction(action),
    )
    db.add(app)
    db.commit()
    db.refresh(app)

    # Create fraud alert if high risk
    if score >= 60:
        alert = FraudAlert(
            alert_id=f"FA-{secrets.token_hex(4).upper()}",
            application_id=app.id,
            reason=f"High AI risk score ({score}) – {action}",
            risk_score=score,
        )
        db.add(alert)
        db.commit()

    # Send confirmation email in background
    background_tasks.add_task(
        send_application_confirmation,
        to_email=data.email,
        applicant_name=data.full_name,
        reference_number=ref,
        loan_amount=float(data.loan_amount),
    )

    return app


@router.get("/me", response_model=List[LoanApplicationOut])
def my_applications(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    apps = (
        db.query(LoanApplication)
        .filter(LoanApplication.user_id == current_user.id)
        .order_by(LoanApplication.created_at.desc())
        .all()
    )
    return apps


@router.get("/{reference_or_id}", response_model=LoanApplicationOut)
def get_application(
    reference_or_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    q = db.query(LoanApplication)
    if reference_or_id.isdigit():
        app = q.filter(LoanApplication.id == int(reference_or_id)).first()
    else:
        app = q.filter(LoanApplication.reference_number == reference_or_id).first()

    if not app:
        raise HTTPException(status_code=404, detail="Application not found")

    # Borrowers can only see their own; admins can see all
    if current_user.role != UserRole.ADMIN and app.user_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized")
    return app


# ========== Admin endpoints ==========
@router.get("", response_model=PaginatedResponse)
def list_applications(
    page: int = Query(1, ge=1),
    page_size: int = Query(20, ge=1, le=100),
    status: Optional[str] = None,
    search: Optional[str] = None,
    filter: Optional[str] = Query(None, description="All | Pending Review | Auto-Approved | Flagged"),
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    q = db.query(LoanApplication)

    if status:
        q = q.filter(LoanApplication.status == status)

    if filter and filter != "All":
        if filter == "Pending Review":
            q = q.filter(
                or_(
                    LoanApplication.status == ApplicationStatus.PENDING,
                    LoanApplication.status == ApplicationStatus.UNDER_REVIEW,
                )
            )
        elif filter == "Auto-Approved":
            q = q.filter(LoanApplication.ai_action == AIAction.AUTO_APPROVE)
        elif filter == "Flagged":
            q = q.filter(LoanApplication.ai_action == AIAction.FLAGGED)

    if search:
        term = f"%{search}%"
        q = q.filter(
            or_(
                LoanApplication.full_name.ilike(term),
                LoanApplication.reference_number.ilike(term),
                LoanApplication.id_number.ilike(term),
                LoanApplication.email.ilike(term),
            )
        )

    total = q.count()
    apps = (
        q.order_by(LoanApplication.created_at.desc())
        .offset((page - 1) * page_size)
        .limit(page_size)
        .all()
    )

    items = [
        LoanApplicationListItem(
            id=a.reference_number,
            name=a.full_name,
            amount=format_currency(float(a.loan_amount)),
            score=a.ai_risk_score or 0,
            aiAction=a.ai_action.value if a.ai_action else None,
            status=a.status.value,
            date=relative_date(a.created_at),
        )
        for a in apps
    ]

    pages = (total + page_size - 1) // page_size
    return PaginatedResponse(
        items=items,
        total=total,
        page=page,
        page_size=page_size,
        pages=pages,
    )


@router.patch("/{reference_or_id}/status", response_model=LoanApplicationOut)
def update_application_status(
    reference_or_id: str,
    update: LoanApplicationUpdateStatus,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_admin),
):
    q = db.query(LoanApplication)
    if reference_or_id.isdigit():
        app = q.filter(LoanApplication.id == int(reference_or_id)).first()
    else:
        app = q.filter(LoanApplication.reference_number == reference_or_id).first()

    if not app:
        raise HTTPException(status_code=404, detail="Application not found")

    app.status = update.status
    if update.admin_notes:
        app.admin_notes = update.admin_notes
    app.reviewed_by = current_user.id
    app.reviewed_at = datetime.utcnow()

    # If approved, create a Loan record
    if update.status == ApplicationStatus.APPROVED and not app.loan:
        rate = update.interest_rate if update.interest_rate is not None else 18.0  # default prime-ish
        principal = float(app.loan_amount)
        term = app.repayment_term
        # Simple instalment calculation (reducing balance approximation)
        monthly_rate = rate / 100 / 12
        if monthly_rate > 0:
            instalment = principal * (monthly_rate * (1 + monthly_rate) ** term) / ((1 + monthly_rate) ** term - 1)
        else:
            instalment = principal / term
        total = instalment * term

        loan = Loan(
            loan_number=generate_loan_number(),
            application_id=app.id,
            user_id=app.user_id,
            principal_amount=principal,
            interest_rate=rate,
            term_months=term,
            monthly_instalment=round(instalment, 2),
            outstanding_balance=principal,
            total_repayable=round(total, 2),
            status="Active",
        )
        db.add(loan)

    db.commit()
    db.refresh(app)
    return app