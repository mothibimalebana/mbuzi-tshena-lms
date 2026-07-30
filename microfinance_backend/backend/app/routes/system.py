from flask import Blueprint, current_app
from app.extensions import db
from app.utils.helpers import success_response, error_response
from datetime import datetime

system_bp = Blueprint("system", __name__)


@system_bp.route("/health", methods=["GET"])
def health():
    try:
        db.session.execute(db.text("SELECT 1"))
        db_status = "connected"
    except Exception as exc:
        db_status = f"error: {exc}"

    return success_response(
        {
            "status": "ok",
            "database": db_status,
            "timestamp": datetime.utcnow().isoformat(),
        }
    )


@system_bp.route("/status", methods=["GET"])
def status():
    return success_response(
        {
            "service": "AI-Driven Microfinance Lending & Investment Intelligence System",
            "version": "1.0.0",
            "environment": current_app.config.get("ENV", "production"),
        }
    )
