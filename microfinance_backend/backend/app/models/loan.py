from datetime import datetime
from app.extensions import db
from app.models.user import gen_uuid


class LoanApplication(db.Model):
    __tablename__ = "loan_applications"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    user_id = db.Column(db.String(36), db.ForeignKey("users.id"), nullable=False)
    loan_amount = db.Column(db.Numeric(14, 2), nullable=False)
    purpose = db.Column(db.String(255), nullable=True)
    employment_status = db.Column(db.String(50), nullable=True)
    monthly_income = db.Column(db.Numeric(14, 2), nullable=True)
    application_date = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default="pending")  # pending/approved/rejected
    risk_score = db.Column(db.Float, nullable=True)
    approval_recommendation = db.Column(db.String(20), nullable=True)  # approve/reject/review
    reviewer_comments = db.Column(db.Text, nullable=True)

    risk_assessments = db.relationship("RiskAssessment", backref="application", lazy=True)
    loan = db.relationship("Loan", backref="application", uselist=False, lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "loan_amount": float(self.loan_amount) if self.loan_amount is not None else None,
            "purpose": self.purpose,
            "employment_status": self.employment_status,
            "monthly_income": float(self.monthly_income) if self.monthly_income is not None else None,
            "application_date": self.application_date.isoformat() if self.application_date else None,
            "status": self.status,
            "risk_score": self.risk_score,
            "approval_recommendation": self.approval_recommendation,
            "reviewer_comments": self.reviewer_comments,
        }


class RiskAssessment(db.Model):
    __tablename__ = "risk_assessments"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    application_id = db.Column(db.String(36), db.ForeignKey("loan_applications.id"), nullable=False)
    risk_score = db.Column(db.Float, nullable=False)
    default_probability = db.Column(db.Float, nullable=False)
    assessment_date = db.Column(db.DateTime, default=datetime.utcnow)
    recommendation_status = db.Column(db.String(20), nullable=True)  # approve/reject/review
    model_version = db.Column(db.String(50), default="v1")
    notes = db.Column(db.Text, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "application_id": self.application_id,
            "risk_score": self.risk_score,
            "default_probability": self.default_probability,
            "assessment_date": self.assessment_date.isoformat() if self.assessment_date else None,
            "recommendation_status": self.recommendation_status,
            "model_version": self.model_version,
            "notes": self.notes,
        }


class Loan(db.Model):
    __tablename__ = "loans"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    user_id = db.Column(db.String(36), db.ForeignKey("users.id"), nullable=False)
    application_id = db.Column(db.String(36), db.ForeignKey("loan_applications.id"), nullable=True)
    amount = db.Column(db.Numeric(14, 2), nullable=False)
    interest_rate = db.Column(db.Float, default=0.15)
    start_date = db.Column(db.DateTime, default=datetime.utcnow)
    end_date = db.Column(db.DateTime, nullable=True)
    status = db.Column(db.String(20), default="active")  # active/closed/defaulted
    outstanding_balance = db.Column(db.Numeric(14, 2), nullable=False)

    repayments = db.relationship("Repayment", backref="loan", lazy=True)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "application_id": self.application_id,
            "amount": float(self.amount) if self.amount is not None else None,
            "interest_rate": self.interest_rate,
            "start_date": self.start_date.isoformat() if self.start_date else None,
            "end_date": self.end_date.isoformat() if self.end_date else None,
            "status": self.status,
            "outstanding_balance": float(self.outstanding_balance) if self.outstanding_balance is not None else None,
        }


class Repayment(db.Model):
    __tablename__ = "repayments"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    loan_id = db.Column(db.String(36), db.ForeignKey("loans.id"), nullable=False)
    user_id = db.Column(db.String(36), db.ForeignKey("users.id"), nullable=False)
    amount = db.Column(db.Numeric(14, 2), nullable=False)
    payment_date = db.Column(db.DateTime, nullable=True)
    due_date = db.Column(db.DateTime, nullable=False)
    status = db.Column(db.String(20), default="pending")  # pending/paid/late/missed
    transaction_ref = db.Column(db.String(100), nullable=True)
    outstanding_balance = db.Column(db.Numeric(14, 2), nullable=True)
    late_flag = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "loan_id": self.loan_id,
            "user_id": self.user_id,
            "amount": float(self.amount) if self.amount is not None else None,
            "payment_date": self.payment_date.isoformat() if self.payment_date else None,
            "due_date": self.due_date.isoformat() if self.due_date else None,
            "status": self.status,
            "transaction_ref": self.transaction_ref,
            "outstanding_balance": float(self.outstanding_balance) if self.outstanding_balance is not None else None,
            "late_flag": self.late_flag,
        }


class BorrowerScore(db.Model):
    __tablename__ = "borrower_scores"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    user_id = db.Column(db.String(36), db.ForeignKey("users.id"), nullable=False)
    reliability_score = db.Column(db.Float, nullable=False)
    score_date = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default="current")
    repayment_weight = db.Column(db.Float, default=0.7)
    income_weight = db.Column(db.Float, default=0.3)
    remarks = db.Column(db.Text, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "reliability_score": self.reliability_score,
            "score_date": self.score_date.isoformat() if self.score_date else None,
            "status": self.status,
            "repayment_weight": self.repayment_weight,
            "income_weight": self.income_weight,
            "remarks": self.remarks,
        }
