from app.models.user import User, admin_user_association
from app.models.loan import (
    LoanApplication,
    RiskAssessment,
    Loan,
    Repayment,
    BorrowerScore,
)
from app.models.investment import InvestmentRecommendation, Preferences
from app.models.misc import (
    FraudAlert,
    ChatbotInteraction,
    Transaction,
    AuditLog,
    AdminDashboard,
)

__all__ = [
    "User",
    "admin_user_association",
    "LoanApplication",
    "RiskAssessment",
    "Loan",
    "Repayment",
    "BorrowerScore",
    "InvestmentRecommendation",
    "Preferences",
    "FraudAlert",
    "ChatbotInteraction",
    "Transaction",
    "AuditLog",
    "AdminDashboard",
]
