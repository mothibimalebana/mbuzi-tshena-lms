def test_apply_for_loan(client, borrower_token):
    res = client.post(
        "/api/loans/apply",
        json={
            "loan_amount": 3000,
            "purpose": "Business expansion",
            "employment_status": "employed",
            "monthly_income": 2000,
        },
        headers={"Authorization": f"Bearer {borrower_token}"},
    )
    assert res.status_code == 201
    assert res.get_json()["data"]["status"] == "pending"


def test_apply_missing_fields(client, borrower_token):
    res = client.post(
        "/api/loans/apply",
        json={"loan_amount": 3000},
        headers={"Authorization": f"Bearer {borrower_token}"},
    )
    assert res.status_code == 400


def test_admin_can_list_applications(client, admin_token, borrower_token):
    client.post(
        "/api/loans/apply",
        json={
            "loan_amount": 1000,
            "purpose": "Tools",
            "employment_status": "employed",
            "monthly_income": 1500,
        },
        headers={"Authorization": f"Bearer {borrower_token}"},
    )
    res = client.get(
        "/api/loans/applications", headers={"Authorization": f"Bearer {admin_token}"}
    )
    assert res.status_code == 200
    assert len(res.get_json()["data"]) >= 1


def test_borrower_cannot_list_all_applications(client, borrower_token):
    res = client.get(
        "/api/loans/applications", headers={"Authorization": f"Bearer {borrower_token}"}
    )
    assert res.status_code == 403


def test_admin_can_update_application_status(client, admin_token, borrower_token):
    apply_res = client.post(
        "/api/loans/apply",
        json={
            "loan_amount": 2000,
            "purpose": "Stock",
            "employment_status": "self-employed",
            "monthly_income": 1800,
        },
        headers={"Authorization": f"Bearer {borrower_token}"},
    )
    app_id = apply_res.get_json()["data"]["id"]

    res = client.put(
        f"/api/loans/applications/{app_id}/status",
        json={"status": "approved", "reviewer_comments": "Looks good"},
        headers={"Authorization": f"Bearer {admin_token}"},
    )
    assert res.status_code == 200
    assert res.get_json()["data"]["status"] == "approved"
