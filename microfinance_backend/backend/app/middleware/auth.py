from functools import wraps
from flask_jwt_extended import verify_jwt_in_request, get_jwt
from app.utils.helpers import error_response


def roles_required(*roles):
    """Decorator restricting an endpoint to one or more roles.

    Usage:
        @roles_required("admin")
        def admin_only(): ...
    """

    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            verify_jwt_in_request()
            claims = get_jwt()
            user_role = claims.get("role")
            if user_role not in roles:
                return error_response("Insufficient permissions for this action", 403)
            return fn(*args, **kwargs)

        return wrapper

    return decorator


def jwt_required_custom(fn):
    """Thin wrapper so routes only need to import from one place."""

    @wraps(fn)
    def wrapper(*args, **kwargs):
        verify_jwt_in_request()
        return fn(*args, **kwargs)

    return wrapper
