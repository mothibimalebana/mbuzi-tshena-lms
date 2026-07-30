from datetime import datetime
from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity, get_jwt

from app.extensions import db
from app.models import LoanApplication, User
from app.middleware.auth import roles_required
from app.utils.validators import require_fields, is_positive_number
from app.utils.helpers import error_response, success_response

loans_bp = Blueprint("loans", __name__)


@loans_bp.route("/apply", methods=["POST"])
@jwt_required()
def apply():
    user_id = get_jwt_identity()
    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["loan_amount", "purpose", "employment_status", "monthly_income"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    if not is_positive_number(data["loan_amount"]):
        return error_response("loan_amount must be a positive number", 400)
    if not is_positive_number(data["monthly_income"]):
        return error_response("monthly_income must be a positive number", 400)

    application = LoanApplication(
        user_id=user_id,
        loan_amount=data["loan_amount"],
        purpose=data["purpose"],
        employment_status=data["employment_status"],
        monthly_income=data["monthly_income"],
        status="pending",
    )
    db.session.add(application)
    db.session.commit()

    return success_response(application.to_dict(), 201, "Loan application submitted")


@loans_bp.route("/applications", methods=["GET"])
@roles_required("admin")
def get_all_applications():
    status = request.args.get("status")
    query = LoanApplication.query
    if status:
        query = query.filter_by(status=status)
    applications = query.order_by(LoanApplication.application_date.desc()).all()
    return success_response([a.to_dict() for a in applications])


@loans_bp.route("/applications/<application_id>", methods=["GET"])
@jwt_required()
def get_application(application_id):
    application = LoanApplication.query.get(application_id)
    if not application:
        return error_response("Loan application not found", 404)

    claims = get_jwt()
    current_user_id = get_jwt_identity()
    if claims.get("role") != "admin" and application.user_id != current_user_id:
        return error_response("You are not authorized to view this application", 403)

    return success_response(application.to_dict())


@loans_bp.route("/applications/<application_id>/status", methods=["PUT"])
@roles_required("admin")
def update_application_status(application_id):
    application = LoanApplication.query.get(application_id)
    if not application:
        return error_response("Loan application not found", 404)

    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["status"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    if data["status"] not in ("pending", "approved", "rejected"):
        return error_response("status must be one of: pending, approved, rejected", 400)

    application.status = data["status"]
    if "reviewer_comments" in data:
        application.reviewer_comments = data["reviewer_comments"]
    db.session.commit()

    return success_response(application.to_dict(), message="Application status updated")


@loans_bp.route("/applications/borrower/<user_id>", methods=["GET"])
@jwt_required()
def get_borrower_applications(user_id):
    claims = get_jwt()
    current_user_id = get_jwt_identity()
    if claims.get("role") != "admin" and current_user_id != user_id:
        return error_response("You are not authorized to view these applications", 403)

    applications = LoanApplication.query.filter_by(user_id=user_id).order_by(
        LoanApplication.application_date.desc()
    ).all()
    return success_response([a.to_dict() for a in applications])


@loans_bp.route("/applications/<application_id>", methods=["DELETE"])
@jwt_required()
def withdraw_application(application_id):
    application = LoanApplication.query.get(application_id)
    if not application:
        return error_response("Loan application not found", 404)

    current_user_id = get_jwt_identity()
    if application.user_id != current_user_id:
        return error_response("You are not authorized to withdraw this application", 403)
    if application.status != "pending":
        return error_response("Only pending applications can be withdrawn", 400)

    db.session.delete(application)
    db.session.commit()
    return success_response(message="Application withdrawn")
