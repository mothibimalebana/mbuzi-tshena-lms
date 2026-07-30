from flask import jsonify


def error_response(message: str, status_code: int = 400):
    """Consistent error envelope used across the whole API."""
    response = jsonify({"error": message, "status_code": status_code})
    response.status_code = status_code
    return response


def success_response(data=None, status_code: int = 200, message: str = None):
    payload = {}
    if message:
        payload["message"] = message
    if data is not None:
        payload["data"] = data
    return jsonify(payload), status_code
