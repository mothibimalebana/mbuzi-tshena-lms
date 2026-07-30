import time
from functools import wraps
from flask import request
from app.utils.helpers import error_response

try:
    import redis as redis_lib
except ImportError:  # pragma: no cover
    redis_lib = None

_local_buckets = {}
_redis_client = None


def init_rate_limiter(redis_url: str):
    global _redis_client
    if redis_lib is None:
        return
    try:
        _redis_client = redis_lib.from_url(redis_url, socket_connect_timeout=1)
        _redis_client.ping()
    except Exception:
        _redis_client = None  # fall back to in-memory limiting


def rate_limit(max_requests: int = 60, window_seconds: int = 60):
    """Simple fixed-window rate limiter, keyed by IP + endpoint.

    Uses Redis when available (multi-worker safe); otherwise falls back
    to an in-process dict, which is fine for local/dev/testing.
    """

    def decorator(fn):
        @wraps(fn)
        def wrapper(*args, **kwargs):
            key = f"ratelimit:{request.remote_addr}:{request.path}"
            now = int(time.time())
            window = now // window_seconds

            if _redis_client:
                redis_key = f"{key}:{window}"
                count = _redis_client.incr(redis_key)
                if count == 1:
                    _redis_client.expire(redis_key, window_seconds)
                if count > max_requests:
                    return error_response("Rate limit exceeded, please try again later", 429)
            else:
                bucket_key = (key, window)
                _local_buckets[bucket_key] = _local_buckets.get(bucket_key, 0) + 1
                if _local_buckets[bucket_key] > max_requests:
                    return error_response("Rate limit exceeded, please try again later", 429)

            return fn(*args, **kwargs)

        return wrapper

    return decorator
