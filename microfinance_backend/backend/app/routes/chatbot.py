from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity

from app.extensions import db
from app.models import ChatbotInteraction
from app.utils.validators import require_fields
from app.utils.helpers import error_response, success_response
from app.services.chatbot_service import get_chatbot_response

chatbot_bp = Blueprint("chatbot", __name__)


@chatbot_bp.route("/message", methods=["POST"])
@jwt_required()
def send_message():
    user_id = get_jwt_identity()
    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["query_text"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    response_text, category, escalation_flag = get_chatbot_response(data["query_text"])

    interaction = ChatbotInteraction(
        user_id=user_id,
        query_text=data["query_text"],
        response_text=response_text,
        category=category,
        escalation_flag=escalation_flag,
        status="escalated" if escalation_flag else "answered",
    )
    db.session.add(interaction)
    db.session.commit()

    return success_response(interaction.to_dict(), 201)


@chatbot_bp.route("/history", methods=["GET"])
@jwt_required()
def get_history():
    user_id = get_jwt_identity()
    interactions = ChatbotInteraction.query.filter_by(user_id=user_id).order_by(
        ChatbotInteraction.interaction_date.asc()
    ).all()
    return success_response([i.to_dict() for i in interactions])


@chatbot_bp.route("/sessions", methods=["GET"])
@jwt_required()
def get_sessions():
    """Groups chat interactions by calendar day as a lightweight 'session' concept."""
    user_id = get_jwt_identity()
    interactions = ChatbotInteraction.query.filter_by(user_id=user_id).order_by(
        ChatbotInteraction.interaction_date.asc()
    ).all()

    sessions = {}
    for i in interactions:
        day_key = i.interaction_date.date().isoformat() if i.interaction_date else "unknown"
        sessions.setdefault(day_key, []).append(i.to_dict())

    return success_response(
        [{"session_date": k, "messages": v} for k, v in sessions.items()]
    )


@chatbot_bp.route("/sessions/<session_date>", methods=["DELETE"])
@jwt_required()
def clear_session(session_date):
    user_id = get_jwt_identity()
    interactions = ChatbotInteraction.query.filter_by(user_id=user_id).all()
    deleted = 0
    for i in interactions:
        if i.interaction_date and i.interaction_date.date().isoformat() == session_date:
            db.session.delete(i)
            deleted += 1
    db.session.commit()
    return success_response(message=f"Deleted {deleted} messages from session {session_date}")
