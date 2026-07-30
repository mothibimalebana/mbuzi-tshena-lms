def test_risk_assess_end_to_end(client, admin_token, borrower_token):
    apply_res = client.post(
        "/api/loans/apply",
        json={
            "loan_amount": 4000,
            "purpose": "Equipment",
            "employment_status": "employed",
            "monthly_income": 3000,
        },
        headers={"Authorization": f"Bearer {borrower_token}"},
    )
    app_id = apply_res.get_json()["data"]["id"]

    res = client.post(
        "/api/risk/assess",
        json={"application_id": app_id},
        headers={"Authorization": f"Bearer {admin_token}"},
    )
    assert res.status_code == 201
    data = res.get_json()["data"]
    assert 0 <= data["default_probability"] <= 1
    assert data["recommendation_status"] in ("approve", "review", "reject")


def test_risk_assess_requires_admin(client, borrower_token):
    res = client.post(
        "/api/risk/assess",
        json={"application_id": "nonexistent"},
        headers={"Authorization": f"Bearer {borrower_token}"},
    )
    assert res.status_code == 403


def test_get_available_models(client, borrower_token):
    res = client.get(
        "/api/risk/models", headers={"Authorization": f"Bearer {borrower_token}"}
    )
    assert res.status_code == 200
    models = res.get_json()["data"]["available_models"]
    assert "logistic_regression" in models
    assert "decision_tree" in models
    assert "random_forest" in models
