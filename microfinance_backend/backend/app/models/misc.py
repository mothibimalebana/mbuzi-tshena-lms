from datetime import datetime
from app.extensions import db
from app.models.user import gen_uuid


class FraudAlert(db.Model):
    __tablename__ = "fraud_alerts"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    user_id = db.Column(db.String(36), db.ForeignKey("users.id"), nullable=False)
    activity_type = db.Column(db.String(80), nullable=True)
    alert_level = db.Column(db.String(20), default="low")  # low/medium/high/critical
    detection_date = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default="open")  # open/reviewed/dismissed/confirmed
    description = db.Column(db.Text, nullable=True)
    triggered_rule = db.Column(db.String(120), nullable=True)
    review_outcome = db.Column(db.String(120), nullable=True)
    admin_comment = db.Column(db.Text, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "activity_type": self.activity_type,
            "alert_level": self.alert_level,
            "detection_date": self.detection_date.isoformat() if self.detection_date else None,
            "status": self.status,
            "description": self.description,
            "triggered_rule": self.triggered_rule,
            "review_outcome": self.review_outcome,
            "admin_comment": self.admin_comment,
        }


class ChatbotInteraction(db.Model):
    __tablename__ = "chatbot_interactions"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    user_id = db.Column(db.String(36), db.ForeignKey("users.id"), nullable=False)
    query_text = db.Column(db.Text, nullable=False)
    response_text = db.Column(db.Text, nullable=True)
    interaction_date = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default="answered")  # answered/escalated
    category = db.Column(db.String(80), nullable=True)
    escalation_flag = db.Column(db.Boolean, default=False)

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "query_text": self.query_text,
            "response_text": self.response_text,
            "interaction_date": self.interaction_date.isoformat() if self.interaction_date else None,
            "status": self.status,
            "category": self.category,
            "escalation_flag": self.escalation_flag,
        }


class Transaction(db.Model):
    __tablename__ = "transactions"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    user_id = db.Column(db.String(36), db.ForeignKey("users.id"), nullable=False)
    type = db.Column(db.String(50), nullable=False)  # disbursement/repayment/investment/fee
    amount = db.Column(db.Numeric(14, 2), nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    status = db.Column(db.String(20), default="completed")
    audit_log_id = db.Column(db.String(36), db.ForeignKey("audit_logs.id"), nullable=True)

    audit_logs = db.relationship(
        "AuditLog", backref="transaction", lazy=True, foreign_keys="AuditLog.transaction_id"
    )

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "type": self.type,
            "amount": float(self.amount) if self.amount is not None else None,
            "date": self.date.isoformat() if self.date else None,
            "status": self.status,
        }


class AuditLog(db.Model):
    __tablename__ = "audit_logs"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    transaction_id = db.Column(db.String(36), db.ForeignKey("transactions.id"), nullable=True)
    action = db.Column(db.String(120), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    ip_address = db.Column(db.String(50), nullable=True)
    user_agent = db.Column(db.String(255), nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "transaction_id": self.transaction_id,
            "action": self.action,
            "timestamp": self.timestamp.isoformat() if self.timestamp else None,
            "ip_address": self.ip_address,
            "user_agent": self.user_agent,
        }


class AdminDashboard(db.Model):
    __tablename__ = "admin_dashboards"

    id = db.Column(db.String(36), primary_key=True, default=gen_uuid)
    admin_id = db.Column(db.String(36), db.ForeignKey("users.id"), nullable=False)
    total_applications = db.Column(db.Integer, default=0)
    pending_approvals = db.Column(db.Integer, default=0)
    fraud_alerts_count = db.Column(db.Integer, default=0)
    overdue_repayments_count = db.Column(db.Integer, default=0)
    report_date = db.Column(db.DateTime, default=datetime.utcnow)
    system_status_summary = db.Column(db.String(255), nullable=True)
    recent_notifications = db.Column(db.Text, nullable=True)

    def to_dict(self):
        return {
            "id": self.id,
            "admin_id": self.admin_id,
            "total_applications": self.total_applications,
            "pending_approvals": self.pending_approvals,
            "fraud_alerts_count": self.fraud_alerts_count,
            "overdue_repayments_count": self.overdue_repayments_count,
            "report_date": self.report_date.isoformat() if self.report_date else None,
            "system_status_summary": self.system_status_summary,
            "recent_notifications": self.recent_notifications,
        }
