import uuid
from datetime import datetime
import bcrypt

from app.extensions import db


def gen_uuid():
    return str(uuid.uuid4())


# Association table for the M:N relationship between Admins and Users
# (an admin manages many users, a user can be reviewed/managed by many admins
#  over time e.g. across shifts / role reassignments).
admin_user_association = db.Table(
    "admin_user_association",
    db.Column("admin_id", db.String(36), db.ForeignKey("users.id"), primary_key=True),
    db.Column("user_id", db.String(36), db.ForeignKey("users.id"), primary_key=True),
    db.Column("assigned_date", db.DateTime, default=datetime.utcnow),
)


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    full_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False, index=True)
    phone = db.Column(db.String(30), nullable=True)
    password_hash = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(20), nullable=False, default="borrower")  # borrower/investor/admin
    date_registered = db.Column(db.DateTime, default=datetime.utcnow)
    account_status = db.Column(db.String(20), default="active")  # active/suspended/deactivated
    last_login = db.Column(db.DateTime, nullable=True)

    # Users this admin manages (only meaningful when role == 'admin')
    managed_users = db.relationship(
        "User",
        secondary=admin_user_association,
        primaryjoin=id == admin_user_association.c.admin_id,
        secondaryjoin=id == admin_user_association.c.user_id,
        backref="managing_admins",
    )

    loan_applications = db.relationship(
        "LoanApplication", backref="applicant", lazy=True, foreign_keys="LoanApplication.user_id"
    )
    loans = db.relationship("Loan", backref="borrower", lazy=True, foreign_keys="Loan.user_id")
    repayments = db.relationship("Repayment", backref="payer", lazy=True, foreign_keys="Repayment.user_id")
    borrower_scores = db.relationship("BorrowerScore", backref="user", lazy=True)
    investment_recommendations = db.relationship(
        "InvestmentRecommendation", backref="investor", lazy=True, foreign_keys="InvestmentRecommendation.investor_id"
    )
    fraud_alerts = db.relationship("FraudAlert", backref="user", lazy=True)
    chatbot_interactions = db.relationship("ChatbotInteraction", backref="user", lazy=True)
    transactions = db.relationship("Transaction", backref="user", lazy=True)
    preferences = db.relationship("Preferences", backref="investor", lazy=True, uselist=False)

    def set_password(self, raw_password: str):
        self.password_hash = bcrypt.hashpw(
            raw_password.encode("utf-8"), bcrypt.gensalt()
        ).decode("utf-8")

    def check_password(self, raw_password: str) -> bool:
        return bcrypt.checkpw(
            raw_password.encode("utf-8"), self.password_hash.encode("utf-8")
        )

    def to_dict(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "phone": self.phone,
            "role": self.role,
            "date_registered": self.date_registered.isoformat() if self.date_registered else None,
            "account_status": self.account_status,
            "last_login": self.last_login.isoformat() if self.last_login else None,
        }
