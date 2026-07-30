"""
Fraud Detection Service
------------------------
Uses an Isolation Forest anomaly-detection model to flag transactions /
application patterns that deviate from typical borrower behavior
(e.g. unusually large loan relative to income, rapid repeated
applications, mismatched income claims). Runs near-real-time since
Isolation Forest inference is O(log n) per sample.
"""
import os
import numpy as np
import pandas as pd
import joblib
from sklearn.ensemble import IsolationForest

FEATURES = ["loan_amount", "monthly_income", "loan_to_income", "applications_last_30_days"]


def _make_synthetic_fraud_data(n=2000, seed=7):
    rng = np.random.default_rng(seed)
    loan_amount = rng.uniform(500, 20000, n)
    monthly_income = rng.uniform(300, 8000, n)
    loan_to_income = loan_amount / (monthly_income * 12 + 1)
    applications_last_30_days = rng.poisson(1, n)

    df = pd.DataFrame(
        {
            "loan_amount": loan_amount,
            "monthly_income": monthly_income,
            "loan_to_income": loan_to_income,
            "applications_last_30_days": applications_last_30_days,
        }
    )
    return df


class FraudDetector:
    def __init__(self, model_dir: str):
        self.model_dir = model_dir
        os.makedirs(self.model_dir, exist_ok=True)
        self.model_path = os.path.join(self.model_dir, "fraud_isoforest.pkl")
        self.model = None
        self._load_or_train()

    def _load_or_train(self):
        if os.path.exists(self.model_path):
            self.model = joblib.load(self.model_path)
        else:
            self.train(_make_synthetic_fraud_data())

    def train(self, df: pd.DataFrame):
        X = df[FEATURES]
        self.model = IsolationForest(
            n_estimators=200, contamination=0.05, random_state=42
        )
        self.model.fit(X)
        joblib.dump(self.model, self.model_path)
        return {"trained_samples": len(df)}

    def analyze(self, loan_amount, monthly_income, applications_last_30_days=1):
        monthly_income = max(float(monthly_income or 1), 1.0)
        loan_to_income = float(loan_amount) / (monthly_income * 12 + 1)

        X = pd.DataFrame(
            [
                {
                    "loan_amount": float(loan_amount),
                    "monthly_income": monthly_income,
                    "loan_to_income": loan_to_income,
                    "applications_last_30_days": int(applications_last_30_days),
                }
            ]
        )

        raw_score = self.model.decision_function(X)[0]  # higher = more normal
        is_anomaly = self.model.predict(X)[0] == -1

        # Normalize raw_score (~ -0.5 to 0.5) into an "anomaly score" 0-100 (higher = riskier)
        anomaly_score = round(max(0.0, min(100.0, (0.5 - raw_score) * 100)), 2)

        if anomaly_score >= 70:
            alert_level = "critical"
        elif anomaly_score >= 50:
            alert_level = "high"
        elif anomaly_score >= 30:
            alert_level = "medium"
        else:
            alert_level = "low"

        return {
            "is_anomaly": bool(is_anomaly),
            "anomaly_score": anomaly_score,
            "alert_level": alert_level,
        }


_fraud_detector_instance = None


def get_fraud_detector(app=None):
    global _fraud_detector_instance
    if _fraud_detector_instance is None:
        model_dir = app.config["MODEL_DIR"] if app else "models"
        _fraud_detector_instance = FraudDetector(model_dir)
    return _fraud_detector_instance
