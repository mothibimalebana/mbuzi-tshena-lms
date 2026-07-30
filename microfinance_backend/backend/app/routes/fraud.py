from flask import Blueprint, request, current_app
from flask_jwt_extended import jwt_required, get_jwt_identity

from app.extensions import db
from app.models import FraudAlert
from app.middleware.auth import roles_required
from app.utils.validators import require_fields
from app.utils.helpers import error_response, success_response
from app.services.fraud_detector import get_fraud_detector

fraud_bp = Blueprint("fraud", __name__)


@fraud_bp.route("/alerts", methods=["GET"])
@roles_required("admin")
def get_alerts():
    status = request.args.get("status")
    query = FraudAlert.query
    if status:
        query = query.filter_by(status=status)
    alerts = query.order_by(FraudAlert.detection_date.desc()).all()
    return success_response([a.to_dict() for a in alerts])


@fraud_bp.route("/alerts/<alert_id>", methods=["GET"])
@roles_required("admin")
def get_alert(alert_id):
    alert = FraudAlert.query.get(alert_id)
    if not alert:
        return error_response("Fraud alert not found", 404)
    return success_response(alert.to_dict())


@fraud_bp.route("/alerts/<alert_id>/status", methods=["PUT"])
@roles_required("admin")
def update_alert_status(alert_id):
    alert = FraudAlert.query.get(alert_id)
    if not alert:
        return error_response("Fraud alert not found", 404)

    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["status"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    alert.status = data["status"]
    if "review_outcome" in data:
        alert.review_outcome = data["review_outcome"]
    if "admin_comment" in data:
        alert.admin_comment = data["admin_comment"]

    db.session.commit()
    return success_response(alert.to_dict(), message="Fraud alert updated")


@fraud_bp.route("/analyze", methods=["POST"])
@jwt_required()
def analyze():
    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["loan_amount", "monthly_income"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    detector = get_fraud_detector(current_app)
    result = detector.analyze(
        loan_amount=data["loan_amount"],
        monthly_income=data["monthly_income"],
        applications_last_30_days=data.get("applications_last_30_days", 1),
    )

    alert = None
    if result["is_anomaly"]:
        user_id = data.get("user_id") or get_jwt_identity()
        alert = FraudAlert(
            user_id=user_id,
            activity_type="loan_application",
            alert_level=result["alert_level"],
            description=f"Anomaly detected by Isolation Forest (score={result['anomaly_score']})",
            triggered_rule="isolation_forest_anomaly",
            status="open",
        )
        db.session.add(alert)
        db.session.commit()

    return success_response(
        {
            "analysis": result,
            "alert_created": alert.to_dict() if alert else None,
        }
    )


@fraud_bp.route("/stats", methods=["GET"])
@roles_required("admin")
def get_stats():
    total = FraudAlert.query.count()
    by_level = {}
    for level in ("low", "medium", "high", "critical"):
        by_level[level] = FraudAlert.query.filter_by(alert_level=level).count()
    open_count = FraudAlert.query.filter_by(status="open").count()

    return success_response(
        {
            "total_alerts": total,
            "open_alerts": open_count,
            "by_level": by_level,
        }
    )


@fraud_bp.route("/flag", methods=["POST"])
@jwt_required()
def flag_activity():
    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["user_id", "activity_type", "description"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    alert = FraudAlert(
        user_id=data["user_id"],
        activity_type=data["activity_type"],
        alert_level=data.get("alert_level", "medium"),
        description=data["description"],
        triggered_rule="manual_flag",
        status="open",
    )
    db.session.add(alert)
    db.session.commit()

    return success_response(alert.to_dict(), 201, "Activity flagged for review")
