"""
Seeds the database with a default admin account plus sample borrower
and investor users so the API is testable immediately after
`docker-compose up --build`.

Run automatically at startup by run.py (idempotent — safe to re-run).
"""
from datetime import datetime, timedelta

from app.extensions import db
from app.models import (
    User,
    LoanApplication,
    Loan,
    Repayment,
    BorrowerScore,
    Preferences,
)


def seed_data(app):
    with app.app_context():
        _seed_admin(app)
        _seed_sample_users()
        db.session.commit()


def _seed_admin(app):
    admin_email = app.config["DEFAULT_ADMIN_EMAIL"]
    if User.query.filter_by(email=admin_email).first():
        return
    admin = User(
        full_name="System Administrator",
        email=admin_email,
        role="admin",
        account_status="active",
    )
    admin.set_password(app.config["DEFAULT_ADMIN_PASSWORD"])
    db.session.add(admin)


def _seed_sample_users():
    if User.query.filter_by(email="borrower@example.com").first():
        return  # already seeded

    borrower = User(
        full_name="Thabo Borrower",
        email="borrower@example.com",
        phone="+27110000001",
        role="borrower",
        account_status="active",
    )
    borrower.set_password("Borrower123!")

    investor = User(
        full_name="Naledi Investor",
        email="investor@example.com",
        phone="+27110000002",
        role="investor",
        account_status="active",
    )
    investor.set_password("Investor123!")

    db.session.add_all([borrower, investor])
    db.session.flush()  # get IDs without committing yet

    application = LoanApplication(
        user_id=borrower.id,
        loan_amount=5000,
        purpose="Small business inventory",
        employment_status="self-employed",
        monthly_income=2500,
        status="approved",
        risk_score=72.5,
        approval_recommendation="approve",
    )
    db.session.add(application)
    db.session.flush()

    loan = Loan(
        user_id=borrower.id,
        application_id=application.id,
        amount=5000,
        interest_rate=0.14,
        start_date=datetime.utcnow() - timedelta(days=60),
        outstanding_balance=3000,
        status="active",
    )
    db.session.add(loan)
    db.session.flush()

    for i in range(3):
        due = datetime.utcnow() - timedelta(days=60 - (i * 30))
        db.session.add(
            Repayment(
                loan_id=loan.id,
                user_id=borrower.id,
                amount=1000,
                payment_date=due,
                due_date=due,
                status="paid",
                outstanding_balance=5000 - (1000 * (i + 1)),
                late_flag=False,
            )
        )

    db.session.add(
        BorrowerScore(
            user_id=borrower.id,
            reliability_score=78.5,
            status="good",
            remarks="Consistent on-time repayments",
        )
    )

    db.session.add(
        Preferences(
            investor_id=investor.id,
            risk_tolerance="medium",
            investment_amount=10000,
            preferred_sectors="agriculture,retail",
        )
    )
