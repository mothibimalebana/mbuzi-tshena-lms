import os
import logging
from logging.handlers import RotatingFileHandler

from flask import Flask
from flask_jwt_extended import JWTManager

from app.config import config_by_name
from app.extensions import db, jwt, migrate, cors
from app.middleware.rate_limiter import init_rate_limiter
from app.utils.helpers import error_response


def create_app(config_name=None):
    config_name = config_name or os.environ.get("FLASK_ENV", "production")
    app = Flask(__name__)
    app.config.from_object(config_by_name.get(config_name, config_by_name["production"]))

    # --- Extensions ---
    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)
    cors.init_app(
        app,
        resources={r"/api/*": {"origins": app.config["CORS_ORIGINS"].split(",")}},
        supports_credentials=True,
    )
    init_rate_limiter(app.config["REDIS_URL"])

    _configure_logging(app)
    _register_jwt_callbacks(app)
    _register_blueprints(app)
    _register_error_handlers(app)

    return app


def _configure_logging(app):
    os.makedirs(app.config["LOG_DIR"], exist_ok=True)
    log_file = os.path.join(app.config["LOG_DIR"], "app.log")
    handler = RotatingFileHandler(log_file, maxBytes=1_000_000, backupCount=5)
    handler.setFormatter(
        logging.Formatter("%(asctime)s [%(levelname)s] %(name)s: %(message)s")
    )
    app.logger.addHandler(handler)
    app.logger.setLevel(logging.INFO)


def _register_jwt_callbacks(app):
    from app.routes.auth import is_token_revoked

    @jwt.token_in_blocklist_loader
    def check_if_token_revoked(jwt_header, jwt_payload):
        return is_token_revoked(jwt_header, jwt_payload)

    @jwt.expired_token_loader
    def expired_token_callback(jwt_header, jwt_payload):
        return error_response("Token has expired", 401)

    @jwt.invalid_token_loader
    def invalid_token_callback(reason):
        return error_response("Invalid token", 401)

    @jwt.unauthorized_loader
    def missing_token_callback(reason):
        return error_response("Missing authorization token", 401)

    @jwt.revoked_token_loader
    def revoked_token_callback(jwt_header, jwt_payload):
        return error_response("Token has been revoked", 401)


def _register_blueprints(app):
    from app.routes.auth import auth_bp
    from app.routes.loans import loans_bp
    from app.routes.risk import risk_bp
    from app.routes.repayments import repayments_bp
    from app.routes.investments import investments_bp
    from app.routes.fraud import fraud_bp
    from app.routes.chatbot import chatbot_bp
    from app.routes.admin import admin_bp
    from app.routes.system import system_bp

    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(loans_bp, url_prefix="/api/loans")
    app.register_blueprint(risk_bp, url_prefix="/api/risk")
    app.register_blueprint(repayments_bp, url_prefix="/api/repayments")
    app.register_blueprint(investments_bp, url_prefix="/api/investments")
    app.register_blueprint(fraud_bp, url_prefix="/api/fraud")
    app.register_blueprint(chatbot_bp, url_prefix="/api/chatbot")
    app.register_blueprint(admin_bp, url_prefix="/api/admin")
    app.register_blueprint(system_bp, url_prefix="/api/system")


def _register_error_handlers(app):
    @app.errorhandler(404)
    def not_found(e):
        return error_response("Resource not found", 404)

    @app.errorhandler(405)
    def method_not_allowed(e):
        return error_response("Method not allowed", 405)

    @app.errorhandler(500)
    def internal_error(e):
        app.logger.exception("Internal server error")
        return error_response("Internal server error", 500)
