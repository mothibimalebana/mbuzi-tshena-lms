from flask import Blueprint, request, current_app
from flask_jwt_extended import jwt_required

from app.extensions import db
from app.models import LoanApplication, RiskAssessment, BorrowerScore, Repayment
from app.middleware.auth import roles_required
from app.utils.validators import require_fields
from app.utils.helpers import error_response, success_response
from app.services.risk_engine import get_risk_engine
from app.services.scoring_service import compute_reliability_score

risk_bp = Blueprint("risk", __name__)


@risk_bp.route("/assess", methods=["POST"])
@roles_required("admin")
def assess():
    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["application_id"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    application = LoanApplication.query.get(data["application_id"])
    if not application:
        return error_response("Loan application not found", 404)

    engine = get_risk_engine(current_app)
    risk_score, default_probability, recommendation = engine.assess(
        loan_amount=float(application.loan_amount),
        monthly_income=float(application.monthly_income or 0),
        employment_status=application.employment_status,
        existing_debt=data.get("existing_debt", 0.0),
    )

    application.risk_score = risk_score
    application.approval_recommendation = recommendation

    assessment = RiskAssessment(
        application_id=application.id,
        risk_score=risk_score,
        default_probability=default_probability,
        recommendation_status=recommendation,
        model_version=engine.model_version,
        notes="Ensemble average of Logistic Regression, Decision Tree, and Random Forest",
    )
    db.session.add(assessment)
    db.session.commit()

    return success_response(assessment.to_dict(), 201, "Risk assessment completed")


@risk_bp.route("/assessments/<application_id>", methods=["GET"])
@jwt_required()
def get_assessment(application_id):
    assessments = RiskAssessment.query.filter_by(application_id=application_id).order_by(
        RiskAssessment.assessment_date.desc()
    ).all()
    if not assessments:
        return error_response("No risk assessments found for this application", 404)
    return success_response([a.to_dict() for a in assessments])


@risk_bp.route("/assessments/<assessment_id>", methods=["PUT"])
@roles_required("admin")
def update_assessment(assessment_id):
    assessment = RiskAssessment.query.get(assessment_id)
    if not assessment:
        return error_response("Risk assessment not found", 404)

    data = request.get_json(silent=True) or {}
    if "recommendation_status" in data:
        assessment.recommendation_status = data["recommendation_status"]
    if "notes" in data:
        assessment.notes = data["notes"]
    db.session.commit()

    return success_response(assessment.to_dict(), message="Risk assessment updated")


@risk_bp.route("/models", methods=["GET"])
@jwt_required()
def get_models():
    engine = get_risk_engine(current_app)
    return success_response(
        {
            "available_models": engine.available_models(),
            "model_version": engine.model_version,
        }
    )


@risk_bp.route("/models/train", methods=["POST"])
@roles_required("admin")
def retrain_models():
    from app.services.risk_engine import _make_synthetic_training_data

    engine = get_risk_engine(current_app)
    metrics = engine.train(_make_synthetic_training_data())
    return success_response({"metrics": metrics}, message="Models retrained successfully")


@risk_bp.route("/scores/<user_id>", methods=["GET"])
@jwt_required()
def get_borrower_score(user_id):
    score = BorrowerScore.query.filter_by(user_id=user_id).order_by(
        BorrowerScore.score_date.desc()
    ).first()

    if not score:
        # Compute on the fly from repayment history if none exists yet
        repayments = Repayment.query.filter_by(user_id=user_id).all()
        total = len(repayments)
        on_time = len([r for r in repayments if r.status == "paid" and not r.late_flag])
        late = len([r for r in repayments if r.late_flag])
        missed = len([r for r in repayments if r.status == "missed"])

        reliability_score, status = compute_reliability_score(
            total_repayments=total,
            on_time_repayments=on_time,
            late_repayments=late,
            missed_repayments=missed,
            monthly_income=0,
        )
        return success_response(
            {
                "user_id": user_id,
                "reliability_score": reliability_score,
                "status": status,
                "computed_on_the_fly": True,
            }
        )

    return success_response(score.to_dict())
