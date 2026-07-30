import re

EMAIL_REGEX = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def is_valid_email(email: str) -> bool:
    return bool(email) and bool(EMAIL_REGEX.match(email))


def is_valid_password(password: str) -> bool:
    """At least 8 chars, 1 uppercase, 1 lowercase, 1 digit."""
    if not password or len(password) < 8:
        return False
    if not re.search(r"[A-Z]", password):
        return False
    if not re.search(r"[a-z]", password):
        return False
    if not re.search(r"\d", password):
        return False
    return True


def require_fields(data: dict, fields: list):
    """Return list of missing field names."""
    if not data:
        return list(fields)
    return [f for f in fields if data.get(f) in (None, "")]


def is_valid_role(role: str) -> bool:
    return role in ("borrower", "investor", "admin")


def is_positive_number(value) -> bool:
    try:
        return float(value) > 0
    except (TypeError, ValueError):
        return False
