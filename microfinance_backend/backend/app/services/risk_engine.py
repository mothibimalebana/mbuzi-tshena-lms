"""
Risk Assessment Engine
-----------------------
Trains and serves three classifiers (Logistic Regression, Decision Tree,
Random Forest) that estimate a borrower's probability of default from
application-level features. The ensemble's average probability becomes
the application's `risk_score` / `default_probability`.

Models are serialized with joblib into app.config['MODEL_DIR'] and are
lazily trained on synthetic data the first time they're needed if no
serialized model is found on disk (so the API works out-of-the-box
without requiring a separate offline training step).
"""
import os
import numpy as np
import pandas as pd
import joblib
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

FEATURES = ["loan_amount", "monthly_income", "employment_score", "debt_to_income", "loan_to_income"]

EMPLOYMENT_SCORE_MAP = {
    "employed": 1.0,
    "self-employed": 0.7,
    "unemployed": 0.2,
    "student": 0.4,
    "retired": 0.6,
}


def _make_synthetic_training_data(n=2000, seed=42):
    """Generates plausible synthetic loan data with a default label,
    used only to bootstrap the models on first run when no historical
    data exists yet. Replace with real historical data via /models/train.
    """
    rng = np.random.default_rng(seed)
    loan_amount = rng.uniform(500, 20000, n)
    monthly_income = rng.uniform(300, 8000, n)
    employment_score = rng.choice([1.0, 0.7, 0.2, 0.4, 0.6], size=n)
    debt_to_income = rng.uniform(0, 1.2, n)
    loan_to_income = loan_amount / (monthly_income * 12 + 1)

    # Synthetic "true" default probability driven by a plausible latent function
    risk_signal = (
        1.8 * loan_to_income
        + 1.2 * debt_to_income
        - 1.5 * employment_score
        - 0.00015 * monthly_income
        + rng.normal(0, 0.3, n)
    )
    default_prob = 1 / (1 + np.exp(-risk_signal))
    default_label = (default_prob > 0.5).astype(int)

    df = pd.DataFrame(
        {
            "loan_amount": loan_amount,
            "monthly_income": monthly_income,
            "employment_score": employment_score,
            "debt_to_income": debt_to_income,
            "loan_to_income": loan_to_income,
            "default": default_label,
        }
    )
    return df


class RiskEngine:
    def __init__(self, model_dir: str):
        self.model_dir = model_dir
        os.makedirs(self.model_dir, exist_ok=True)
        self.scaler_path = os.path.join(self.model_dir, "risk_scaler.pkl")
        self.model_paths = {
            "logistic_regression": os.path.join(self.model_dir, "risk_logreg.pkl"),
            "decision_tree": os.path.join(self.model_dir, "risk_dtree.pkl"),
            "random_forest": os.path.join(self.model_dir, "risk_rforest.pkl"),
        }
        self.scaler = None
        self.models = {}
        self.model_version = "v1"
        self._load_or_train()

    def _load_or_train(self):
        if os.path.exists(self.scaler_path) and all(
            os.path.exists(p) for p in self.model_paths.values()
        ):
            self.scaler = joblib.load(self.scaler_path)
            for name, path in self.model_paths.items():
                self.models[name] = joblib.load(path)
        else:
            self.train(_make_synthetic_training_data())

    def train(self, df: pd.DataFrame):
        X = df[FEATURES]
        y = df["default"]

        self.scaler = StandardScaler()
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42, stratify=y
        )
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)

        logreg = LogisticRegression(max_iter=1000)
        logreg.fit(X_train_scaled, y_train)

        dtree = DecisionTreeClassifier(max_depth=6, random_state=42)
        dtree.fit(X_train, y_train)

        rforest = RandomForestClassifier(n_estimators=150, max_depth=8, random_state=42)
        rforest.fit(X_train, y_train)

        self.models = {
            "logistic_regression": logreg,
            "decision_tree": dtree,
            "random_forest": rforest,
        }

        metrics = {
            name: float(model.score(X_test_scaled if name == "logistic_regression" else X_test, y_test))
            for name, model in self.models.items()
        }

        joblib.dump(self.scaler, self.scaler_path)
        for name, path in self.model_paths.items():
            joblib.dump(self.models[name], path)

        return metrics

    def _build_features(self, loan_amount, monthly_income, employment_status, existing_debt=0.0):
        monthly_income = max(float(monthly_income or 1), 1.0)
        employment_score = EMPLOYMENT_SCORE_MAP.get((employment_status or "").lower(), 0.5)
        debt_to_income = min(float(existing_debt or 0) / monthly_income, 5.0)
        loan_to_income = float(loan_amount) / (monthly_income * 12 + 1)

        return pd.DataFrame(
            [
                {
                    "loan_amount": float(loan_amount),
                    "monthly_income": monthly_income,
                    "employment_score": employment_score,
                    "debt_to_income": debt_to_income,
                    "loan_to_income": loan_to_income,
                }
            ]
        )

    def assess(self, loan_amount, monthly_income, employment_status, existing_debt=0.0):
        """Returns (risk_score 0-100, default_probability 0-1, recommendation)."""
        X = self._build_features(loan_amount, monthly_income, employment_status, existing_debt)
        X_scaled = self.scaler.transform(X)

        probs = []
        for name, model in self.models.items():
            X_input = X_scaled if name == "logistic_regression" else X
            proba = model.predict_proba(X_input)[0][1]  # probability of class "default"=1
            probs.append(proba)

        default_probability = float(np.mean(probs))
        risk_score = round((1 - default_probability) * 100, 2)  # higher = safer

        if default_probability < 0.3:
            recommendation = "approve"
        elif default_probability < 0.6:
            recommendation = "review"
        else:
            recommendation = "reject"

        return risk_score, default_probability, recommendation

    def available_models(self):
        return list(self.models.keys())


_risk_engine_instance = None


def get_risk_engine(app=None):
    global _risk_engine_instance
    if _risk_engine_instance is None:
        model_dir = app.config["MODEL_DIR"] if app else "models"
        _risk_engine_instance = RiskEngine(model_dir)
    return _risk_engine_instance
