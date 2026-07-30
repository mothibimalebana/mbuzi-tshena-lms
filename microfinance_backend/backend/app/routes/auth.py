from datetime import datetime
from flask import Blueprint, request
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_required,
    get_jwt_identity,
    get_jwt,
)

from app.extensions import db
from app.models import User
from app.utils.validators import is_valid_email, is_valid_password, require_fields, is_valid_role
from app.utils.helpers import error_response, success_response

auth_bp = Blueprint("auth", __name__)

# Simple in-memory blocklist for logged-out access tokens (jti).
# For multi-worker production deployments back this with Redis instead.
_token_blocklist = set()


def is_token_revoked(jwt_header, jwt_payload):
    return jwt_payload["jti"] in _token_blocklist


@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["full_name", "email", "password", "role"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    if not is_valid_email(data["email"]):
        return error_response("Invalid email format", 400)
    if not is_valid_password(data["password"]):
        return error_response(
            "Password must be at least 8 characters and include uppercase, lowercase, and a digit", 400
        )
    if not is_valid_role(data["role"]):
        return error_response("Role must be one of: borrower, investor, admin", 400)

    if User.query.filter_by(email=data["email"]).first():
        return error_response("An account with this email already exists", 409)

    user = User(
        full_name=data["full_name"],
        email=data["email"],
        phone=data.get("phone"),
        role=data["role"],
    )
    user.set_password(data["password"])
    db.session.add(user)
    db.session.commit()

    return success_response(user.to_dict(), 201, "User registered successfully")


@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["email", "password"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    user = User.query.filter_by(email=data["email"]).first()
    if not user or not user.check_password(data["password"]):
        return error_response("Invalid email or password", 401)

    if user.account_status != "active":
        return error_response(f"Account is {user.account_status}. Contact an administrator.", 403)

    user.last_login = datetime.utcnow()
    db.session.commit()

    extra_claims = {"role": user.role, "email": user.email}
    access_token = create_access_token(identity=user.id, additional_claims=extra_claims)
    refresh_token = create_refresh_token(identity=user.id, additional_claims=extra_claims)

    return success_response(
        {
            "access_token": access_token,
            "refresh_token": refresh_token,
            "user": user.to_dict(),
        },
        200,
        "Login successful",
    )


@auth_bp.route("/logout", methods=["POST"])
@jwt_required()
def logout():
    jti = get_jwt()["jti"]
    _token_blocklist.add(jti)
    return success_response(message="Successfully logged out")


@auth_bp.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def refresh():
    identity = get_jwt_identity()
    claims = get_jwt()
    extra_claims = {"role": claims.get("role"), "email": claims.get("email")}
    new_access_token = create_access_token(identity=identity, additional_claims=extra_claims)
    return success_response({"access_token": new_access_token})


@auth_bp.route("/me", methods=["GET"])
@jwt_required()
def me():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return error_response("User not found", 404)
    return success_response(user.to_dict())


@auth_bp.route("/profile", methods=["PUT"])
@jwt_required()
def update_profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return error_response("User not found", 404)

    data = request.get_json(silent=True) or {}
    if "full_name" in data:
        user.full_name = data["full_name"]
    if "phone" in data:
        user.phone = data["phone"]
    if "email" in data and data["email"] != user.email:
        if not is_valid_email(data["email"]):
            return error_response("Invalid email format", 400)
        if User.query.filter_by(email=data["email"]).first():
            return error_response("Email already in use", 409)
        user.email = data["email"]

    db.session.commit()
    return success_response(user.to_dict(), message="Profile updated")


@auth_bp.route("/reset-password", methods=["POST"])
def reset_password_request():
    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["email"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    user = User.query.filter_by(email=data["email"]).first()
    # Always respond the same way to avoid leaking which emails are registered
    return success_response(
        message="If an account with that email exists, password reset instructions have been sent."
    )


@auth_bp.route("/change-password", methods=["POST"])
@jwt_required()
def change_password():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return error_response("User not found", 404)

    data = request.get_json(silent=True) or {}
    missing = require_fields(data, ["current_password", "new_password"])
    if missing:
        return error_response(f"Missing required fields: {', '.join(missing)}", 400)

    if not user.check_password(data["current_password"]):
        return error_response("Current password is incorrect", 401)
    if not is_valid_password(data["new_password"]):
        return error_response(
            "New password must be at least 8 characters and include uppercase, lowercase, and a digit", 400
        )

    user.set_password(data["new_password"])
    db.session.commit()
    return success_response(message="Password changed successfully")
