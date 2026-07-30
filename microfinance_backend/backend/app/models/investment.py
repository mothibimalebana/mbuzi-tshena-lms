from datetime import datetime
from app.extensions import db
from app.models.user import gen_uuid


class InvestmentRecommendation(db.Model):
    __tablename__ = "investment_recommendations"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    investor_id = db.Column(db.String(36), db.ForeignKey("users.id"), nullable=False)
    investment_type = db.Column(db.String(80), nullable=True)
    risk_level = db.Column(db.String(20), nullable=True)  # low/medium/high
    expected_return = db.Column(db.Float, nullable=True)
    recommendation_date = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default="new")  # new/accepted/dismissed
    match_score = db.Column(db.Float, nullable=True)
    notes = db.Column(db.Text, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "investor_id": self.investor_id,
            "investment_type": self.investment_type,
            "risk_level": self.risk_level,
            "expected_return": self.expected_return,
            "recommendation_date": self.recommendation_date.isoformat() if self.recommendation_date else None,
            "status": self.status,
            "match_score": self.match_score,
            "notes": self.notes,
        }


class Preferences(db.Model):
    __tablename__ = "preferences"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    investor_id = db.Column(db.String(36), db.ForeignKey("users.id"), nullable=False, unique=True)
    risk_tolerance = db.Column(db.String(20), default="medium")  # low/medium/high
    investment_amount = db.Column(db.Numeric(14, 2), nullable=True)
    preferred_sectors = db.Column(db.String(255), nullable=True)  # comma-separated

    def to_dict(self):
        return {
            "id": self.id,
            "investor_id": self.investor_id,
            "risk_tolerance": self.risk_tolerance,
            "investment_amount": float(self.investment_amount) if self.investment_amount is not None else None,
            "preferred_sectors": self.preferred_sectors.split(",") if self.preferred_sectors else [],
        }
