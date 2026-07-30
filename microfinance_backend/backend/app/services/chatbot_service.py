"""
Chatbot Service
----------------
Lightweight intent-matching chatbot for common borrower/investor
questions (loan status, repayment due dates, general FAQ). Falls back
to escalation when confidence is low, flagging the interaction for a
human admin to follow up on.
"""
import re

INTENT_PATTERNS = [
    (r"\b(loan|application)\b.*\b(status|approved|rejected|pending)\b", "loan_status",
     "You can check your loan application status from the 'My Applications' section. "
     "If it's still pending, our risk team typically reviews within 24-48 hours."),
    (r"\b(repay|repayment|payment|installment)\b.*\b(due|when|date)\b", "repayment_due",
     "Your next repayment due date is listed under 'My Repayments'. "
     "Please pay on or before the due date to avoid late fees."),
    (r"\b(interest rate|rate)\b", "interest_rate",
     "Interest rates depend on your risk assessment and loan type, typically ranging from 8% to 20% APR."),
    (r"\b(invest|investment|portfolio|return)\b", "investment_info",
     "You can view personalized investment opportunities under 'Recommendations', "
     "based on your risk tolerance and preferred sectors."),
    (r"\b(fraud|suspicious|alert)\b", "fraud_info",
     "If you believe there's suspicious activity on your account, please contact support immediately "
     "and we'll flag it for review."),
    (r"\b(password|reset|login|forgot)\b", "account_help",
     "You can reset your password from the login screen using 'Forgot Password', "
     "or update it from your profile settings."),
]


def get_chatbot_response(query_text: str):
    text = (query_text or "").lower()
    for pattern, category, response in INTENT_PATTERNS:
        if re.search(pattern, text):
            return response, category, False

    # No confident match -> escalate to a human admin
    fallback = (
        "I'm not fully sure how to help with that yet. "
        "I've flagged this for a member of our support team to follow up with you."
    )
    return fallback, "general", True
