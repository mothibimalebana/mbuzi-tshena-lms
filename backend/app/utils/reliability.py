"""
Borrower reliability scoring (SRS feature #2, REQ-7 to REQ-10, class BorrowerScore).
Looks at how a borrower actually behaves: do they pay on time, have they paid loans off,
were proofs rejected, are there open fraud alerts. 0-100, HIGHER is better.
"""
from datetime import datetime

from dateutil.relativedelta import relativedelta
from sqlalchemy.orm import Session

from app.models import User, LoanApplication, ProofOfPayment, ProofStatus, FraudAlert, BorrowerScore
from app.utils.loan_balance import loan_totals

def score_status(score) -> str:
    if score is None:
        return "New"
    if score >= 70:
        return "Reliable"
    if score >= 40:
        return "Average"
    return "At risk"


def calculate_reliability(user: User, db: Session) -> dict:
    """REQ-7 (repayment history) + REQ-8 (reliability score). Returns score, status and remarks."""
    apps = db.query(LoanApplication).filter(LoanApplication.user_id == user.id).all()
    loans = [a.loan for a in apps if a.loan]
    if not loans:
        return {"score": None, "status": "New", "remarks": "No approved loans yet, so no repayment history."}

    score = 60.0  # everyone with a loan starts in the middle
    remarks = []

    # Repayments: what was paid compared with what should have been paid by now
    due = paid = 0.0
    for loan in loans:
        months = relativedelta(datetime.utcnow(), loan.created_at)
        months_due = min(months.years * 12 + months.months, loan.term_months)
        due += months_due * float(loan.monthly_instalment)
        paid += loan_totals(loan)["amount_paid"]
    if due == 0:
        remarks.append("first instalment not due yet")
    else:
        share = paid / due
        remarks.append(f"paid R{paid:,.0f} of R{due:,.0f} due so far ({share * 100:.0f}%)")
        if share >= 1:
            score += 25
        elif share >= 0.75:
            score += 10
        elif share >= 0.5:
            score -= 10
        else:
            score -= 30

    paid_off = sum(1 for loan in loans if loan.status == "Paid Off")
    if paid_off:
        score += min(paid_off * 10, 20)
        remarks.append(f"{paid_off} loan{'s' if paid_off > 1 else ''} paid off")

    rejected = db.query(ProofOfPayment).filter(
        ProofOfPayment.user_id == user.id, ProofOfPayment.status == ProofStatus.REJECTED
    ).count()
    if rejected:
        score -= min(rejected * 5, 20)
        remarks.append(f"{rejected} rejected proof{'s' if rejected > 1 else ''} of payment")

    open_alerts = db.query(FraudAlert).filter(
        FraudAlert.application_id.in_([a.id for a in apps]), FraudAlert.is_resolved == False  # noqa: E712
    ).count()

    if open_alerts:
        score -= min(open_alerts * 10, 30)
        remarks.append(f"{open_alerts} open fraud / document alert{'s' if open_alerts > 1 else ''}")

    score = round(max(0.0, min(100.0, score)), 1)
    text = "; ".join(remarks)
    return {"score": score, "status": score_status(score), "remarks": text[:1].upper() + text[1:]}

def save_reliability(user: User, db: Session) -> BorrowerScore:
    """REQ-9: store the score (a new row each time, so the history is kept). The caller commits."""
    result = calculate_reliability(user, db)
    row = BorrowerScore(
        user_id=user.id,
        reliability_score=result["score"],
        score_status=result["status"],
        remarks=result["remarks"],
    )
    db.add(row)
    return row

def latest_score(user: User, db: Session):
    return (
        db.query(BorrowerScore)
        .filter(BorrowerScore.user_id == user.id)
        .order_by(BorrowerScore.created_at.desc(), BorrowerScore.id.desc())
        .first()
    )

