import joblib
import pandas as pd
from pathlib import Path

class LoanPredictionModel:

    def __init__(self):
        model_path = Path(__file__).parent / "loan.pkl"
        self.model = joblib.load(model_path)
     
        self.model = joblib.load(model_path)

    def predict(self, applicants: pd.DataFrame) -> pd.DataFrame:
   

        data = applicants.copy()

        names = None
        if "Name" in data.columns:
            names = data["Name"]
            data = data.drop(columns=["Name"])

        predictions = self.model.predict(data)
        probabilities = self.model.predict_proba(data)

        results = pd.DataFrame()

        if names is not None:
            results["Name"] = names

        results["Prediction"] = [
            "Approved" if p == 1 else "Rejected"
            for p in predictions
        ]

        results["Approval Probability"] = (
            probabilities[:, 1] * 100
        ).round(2)

        results["Rejection Probability"] = (
            probabilities[:, 0] * 100
        ).round(2)

        return results

    def predict_one(self, **kwargs):
        df = pd.DataFrame([kwargs])

        prediction = self.model.predict(df)[0]
        probability = self.model.predict_proba(df)[0]

        return {
            "prediction": "Approved" if prediction else "Rejected",
            "approval_probability": float(round(probability[1] * 100, 2)),
            "rejection_probability": float(round(probability[0] * 100, 2)),
        }


