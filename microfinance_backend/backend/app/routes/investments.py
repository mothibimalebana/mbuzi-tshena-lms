from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from app.extensions import db
from app.models import InvestmentRecommendation, Preferences
from app.middleware.auth import roles_required
from app.utils.validators import require_fields
from app.utils.helpers import error_response, success_response
from app.services.investment_service import generate_recommendations, DEFAULT_OPPORTUNITIES

investments_bp = Blueprint("investments", __name__)


@investments_bp.route("/recommendations", methods=["GET"])
@jwt_required()
def get_recommendations():
    investor_id = get_jwt_identity()
    prefs = Preferences.query.filter_by(investor_id=investor_id).first()
    risk_tolerance = prefs.risk_tolerance if prefs else "medium"

    recs = generate_recommendations(risk_tolerance)

    saved = []
    for r in recs:
        rec = InvestmentRecommendation(
            investor_id=investor_id,
            investment_type=r["investment_type"],
            risk_level=r["risk_level"],
            expected_return=r["expected_return"],
            match_score=r["match_score"],
            status="new",
        )
        db.session.add(rec)
        saved.append(rec)
    db.session.commit()

    return success_response([r.to_dict() for r in saved])


@investments_bp.route("/preferences", methods=["POST"])
@jwt_required()
def set_preferences():
    investor_id = get_jwt_identity()
    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["risk_tolerance"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    existing = Preferences.query.filter_by(investor_id=investor_id).first()
    if existing:
        return error_response("Preferences already exist, use PUT to update", 409)

    prefs = Preferences(
        investor_id=investor_id,
        risk_tolerance=data["risk_tolerance"],
        investment_amount=data.get("investment_amount"),
        preferred_sectors=",".join(data.get("preferred_sectors", [])) if data.get("preferred_sectors") else None,
    )
    db.session.add(prefs)
    db.session.commit()

    return success_response(prefs.to_dict(), 201, "Preferences saved")


@investments_bp.route("/preferences", methods=["PUT"])
@jwt_required()
def update_preferences():
    investor_id = get_jwt_identity()
    prefs = Preferences.query.filter_by(investor_id=investor_id).first()
    if not prefs:
        return error_response("No preferences found, use POST to create", 404)

    data = request.get_json(silent=True) or {}
    if "risk_tolerance" in data:
        prefs.risk_tolerance = data["risk_tolerance"]
    if "investment_amount" in data:
        prefs.investment_amount = data["investment_amount"]
    if "preferred_sectors" in data:
        prefs.preferred_sectors = ",".join(data["preferred_sectors"])

    db.session.commit()
    return success_response(prefs.to_dict(), message="Preferences updated")


@investments_bp.route("/opportunities", methods=["GET"])
@jwt_required()
def get_opportunities():
    return success_response(DEFAULT_OPPORTUNITIES)


@investments_bp.route("/opportunities", methods=["POST"])
@roles_required("admin")
def create_opportunity():
    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["investment_type", "risk_level", "expected_return"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    DEFAULT_OPPORTUNITIES.append(
        {
            "investment_type": data["investment_type"],
            "risk_level": data["risk_level"],
            "expected_return": data["expected_return"],
        }
    )
    return success_response(DEFAULT_OPPORTUNITIES, 201, "Opportunity created")


@investments_bp.route("/history", methods=["GET"])
@jwt_required()
def get_history():
    investor_id = get_jwt_identity()
    recs = InvestmentRecommendation.query.filter_by(investor_id=investor_id).order_by(
        InvestmentRecommendation.recommendation_date.desc()
    ).all()
    return success_response([r.to_dict() for r in recs])
