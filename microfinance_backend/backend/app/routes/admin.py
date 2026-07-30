from flask import Blueprint, request
from flask_jwt_extended import get_jwt_identity

from app.extensions import db
from app.models import (
    User,
    LoanApplication,
    FraudAlert,
    Repayment,
    AuditLog,
    AdminDashboard,
)
from app.middleware.auth import roles_required
from app.utils.helpers import error_response, success_response
from datetime import datetime

admin_bp = Blueprint("admin", __name__)


@admin_bp.route("/dashboard", methods=["GET"])
@roles_required("admin")
def dashboard():
    total_applications = LoanApplication.query.count()
    pending_approvals = LoanApplication.query.filter_by(status="pending").count()
    fraud_alerts_count = FraudAlert.query.filter_by(status="open").count()
    now = datetime.utcnow()
    overdue_repayments_count = Repayment.query.filter(
        Repayment.status.in_(["pending", "late"]), Repayment.due_date < now
    ).count()

    return success_response(
        {
            "total_applications": total_applications,
            "pending_approvals": pending_approvals,
            "fraud_alerts_count": fraud_alerts_count,
            "overdue_repayments_count": overdue_repayments_count,
            "report_date": now.isoformat(),
        }
    )


@admin_bp.route("/dashboard/statistics", methods=["GET"])
@roles_required("admin")
def statistics():
    total_users = User.query.count()
    borrowers = User.query.filter_by(role="borrower").count()
    investors = User.query.filter_by(role="investor").count()
    admins = User.query.filter_by(role="admin").count()

    approved = LoanApplication.query.filter_by(status="approved").count()
    rejected = LoanApplication.query.filter_by(status="rejected").count()
    pending = LoanApplication.query.filter_by(status="pending").count()

    return success_response(
        {
            "users": {"total": total_users, "borrowers": borrowers, "investors": investors, "admins": admins},
            "applications": {"approved": approved, "rejected": rejected, "pending": pending},
        }
    )


@admin_bp.route("/users", methods=["GET"])
@roles_required("admin")
def get_users():
    role = request.args.get("role")
    query = User.query
    if role:
        query = query.filter_by(role=role)
    users = query.order_by(User.date_registered.desc()).all()
    return success_response([u.to_dict() for u in users])


@admin_bp.route("/users/<user_id>/status", methods=["PUT"])
@roles_required("admin")
def update_user_status(user_id):
    user = User.query.get(user_id)
    if not user:
        return error_response("User not found", 404)

    data = request.get_json(silent=True) or {}
    if "account_status" not in data:
        return error_response("Missing required field: account_status", 400)
    if data["account_status"] not in ("active", "suspended", "deactivated"):
        return error_response("account_status must be one of: active, suspended, deactivated", 400)

    user.account_status = data["account_status"]
    db.session.commit()
    return success_response(user.to_dict(), message="User status updated")


@admin_bp.route("/audit-logs", methods=["GET"])
@roles_required("admin")
def get_audit_logs():
    logs = AuditLog.query.order_by(AuditLog.timestamp.desc()).limit(500).all()
    return success_response([l.to_dict() for l in logs])


@admin_bp.route("/reports", methods=["GET"])
@roles_required("admin")
def generate_report():
    admin_id = get_jwt_identity()
    total_applications = LoanApplication.query.count()
    pending_approvals = LoanApplication.query.filter_by(status="pending").count()
    fraud_alerts_count = FraudAlert.query.filter_by(status="open").count()
    now = datetime.utcnow()
    overdue_repayments_count = Repayment.query.filter(
        Repayment.status.in_(["pending", "late"]), Repayment.due_date < now
    ).count()

    report = AdminDashboard(
        admin_id=admin_id,
        total_applications=total_applications,
        pending_approvals=pending_approvals,
        fraud_alerts_count=fraud_alerts_count,
        overdue_repayments_count=overdue_repayments_count,
        system_status_summary="operational",
    )
    db.session.add(report)
    db.session.commit()

    return success_response(report.to_dict(), 201, "Report generated")
