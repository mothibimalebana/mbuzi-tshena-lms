def test_register_success(client):
    res = client.post(
        "/api/auth/register",
        json={
            "full_name": "Jane Doe",
            "email": "jane@test.com",
            "password": "Password1",
            "role": "borrower",
        },
    )
    assert res.status_code == 201
    assert res.get_json()["data"]["email"] == "jane@test.com"


def test_register_missing_fields(client):
    res = client.post("/api/auth/register", json={"email": "jane@test.com"})
    assert res.status_code == 400
    assert "error" in res.get_json()


def test_register_weak_password(client):
    res = client.post(
        "/api/auth/register",
        json={
            "full_name": "Jane Doe",
            "email": "jane2@test.com",
            "password": "weak",
            "role": "borrower",
        },
    )
    assert res.status_code == 400


def test_login_success(client):
    client.post(
        "/api/auth/register",
        json={
            "full_name": "Jane Doe",
            "email": "jane3@test.com",
            "password": "Password1",
            "role": "borrower",
        },
    )
    res = client.post(
        "/api/auth/login", json={"email": "jane3@test.com", "password": "Password1"}
    )
    assert res.status_code == 200
    assert "access_token" in res.get_json()["data"]


def test_login_invalid_credentials(client):
    res = client.post(
        "/api/auth/login", json={"email": "nobody@test.com", "password": "wrong"}
    )
    assert res.status_code == 401


def test_me_requires_token(client):
    res = client.get("/api/auth/me")
    assert res.status_code == 401


def test_me_with_token(client, borrower_token):
    res = client.get(
        "/api/auth/me", headers={"Authorization": f"Bearer {borrower_token}"}
    )
    assert res.status_code == 200
    assert res.get_json()["data"]["role"] == "borrower"
