from datetime import datetime
from flask import Blueprint, request, current_app
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt

from app.extensions import db
from app.models import Repayment, Loan, BorrowerScore
from app.middleware.auth import roles_required
from app.utils.validators import require_fields, is_positive_number
from app.utils.helpers import error_response, success_response
from app.services.scoring_service import compute_reliability_score

repayments_bp = Blueprint("repayments", __name__)


@repayments_bp.route("/record", methods=["POST"])
@jwt_required()
def record_repayment():
    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["loan_id", "amount", "due_date"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    loan = Loan.query.get(data["loan_id"])
    if not loan:
        return error_response("Loan not found", 404)

    if not is_positive_number(data["amount"]):
        return error_response("amount must be a positive number", 400)

    try:
        due_date = datetime.fromisoformat(data["due_date"])
    except ValueError:
        return error_response("due_date must be an ISO-8601 date string", 400)

    payment_date = datetime.utcnow() if data.get("mark_paid", True) else None
    late_flag = bool(payment_date and payment_date > due_date)

    new_outstanding = max(float(loan.outstanding_balance) - float(data["amount"]), 0)
    loan.outstanding_balance = new_outstanding

    repayment = Repayment(
        loan_id=loan.id,
        user_id=loan.user_id,
        amount=data["amount"],
        payment_date=payment_date,
        due_date=due_date,
        status="paid" if payment_date else "pending",
        transaction_ref=data.get("transaction_ref"),
        outstanding_balance=new_outstanding,
        late_flag=late_flag,
    )
    db.session.add(repayment)
    db.session.commit()

    return success_response(repayment.to_dict(), 201, "Repayment recorded")


@repayments_bp.route("/loans/<loan_id>", methods=["GET"])
@jwt_required()
def get_loan_repayments(loan_id):
    repayments = Repayment.query.filter_by(loan_id=loan_id).order_by(
        Repayment.due_date.asc()
    ).all()
    return success_response([r.to_dict() for r in repayments])


@repayments_bp.route("/borrower/<user_id>", methods=["GET"])
@jwt_required()
def get_borrower_repayments(user_id):
    claims = get_jwt()
    current_user_id = get_jwt_identity()
    if claims.get("role") != "admin" and current_user_id != user_id:
        return error_response("You are not authorized to view these repayments", 403)

    repayments = Repayment.query.filter_by(user_id=user_id).order_by(
        Repayment.due_date.asc()
    ).all()
    return success_response([r.to_dict() for r in repayments])


@repayments_bp.route("/<repayment_id>", methods=["PUT"])
@roles_required("admin")
def update_repayment(repayment_id):
    repayment = Repayment.query.get(repayment_id)
    if not repayment:
        return error_response("Repayment record not found", 404)

    data = request.get_json(silent=True) or {}
    if "status" in data:
        repayment.status = data["status"]
    if "amount" in data and is_positive_number(data["amount"]):
        repayment.amount = data["amount"]
    if "late_flag" in data:
        repayment.late_flag = bool(data["late_flag"])

    db.session.commit()
    return success_response(repayment.to_dict(), message="Repayment updated")


@repayments_bp.route("/overdue", methods=["GET"])
@roles_required("admin")
def get_overdue_repayments():
    now = datetime.utcnow()
    overdue = Repayment.query.filter(
        Repayment.status.in_(["pending", "late"]), Repayment.due_date < now
    ).all()
    return success_response([r.to_dict() for r in overdue])


@repayments_bp.route("/predict-default", methods=["POST"])
@jwt_required()
def predict_default():
    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["user_id"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    repayments = Repayment.query.filter_by(user_id=data["user_id"]).all()
    total = len(repayments)
    on_time = len([r for r in repayments if r.status == "paid" and not r.late_flag])
    late = len([r for r in repayments if r.late_flag])
    missed = len([r for r in repayments if r.status == "missed"])

    reliability_score, status = compute_reliability_score(
        total_repayments=total,
        on_time_repayments=on_time,
        late_repayments=late,
        missed_repayments=missed,
        monthly_income=data.get("monthly_income", 0),
    )

    default_risk_probability = round(1 - (reliability_score / 100), 4)

    return success_response(
        {
            "user_id": data["user_id"],
            "reliability_score": reliability_score,
            "status": status,
            "predicted_default_probability": default_risk_probability,
        }
    )
