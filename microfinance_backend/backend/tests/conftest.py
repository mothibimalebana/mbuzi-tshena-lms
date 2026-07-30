import pytest
from app import create_app
from app.extensions import db as _db


@pytest.fixture
def app():
    app = create_app("testing")
    with app.app_context():
        _db.create_all()
        yield app
        _db.session.remove()
        _db.drop_all()


@pytest.fixture
def client(app):
    return app.test_client()


@pytest.fixture
def admin_token(client):
    client.post(
        "/api/auth/register",
        json={
            "full_name": "Admin User",
            "email": "admin@test.com",
            "password": "Admin123!",
            "role": "admin",
        },
    )
    res = client.post(
        "/api/auth/login", json={"email": "admin@test.com", "password": "Admin123!"}
    )
    return res.get_json()["data"]["access_token"]


@pytest.fixture
def borrower_token(client):
    client.post(
        "/api/auth/register",
        json={
            "full_name": "Borrower User",
            "email": "borrower@test.com",
            "password": "Borrower123!",
            "role": "borrower",
        },
    )
    res = client.post(
        "/api/auth/login", json={"email": "borrower@test.com", "password": "Borrower123!"}
    )
    return res.get_json()["data"]["access_token"]
