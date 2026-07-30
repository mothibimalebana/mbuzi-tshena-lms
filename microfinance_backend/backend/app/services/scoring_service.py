"""
Borrower Scoring Service
-------------------------
Computes a 0-100 "reliability score" for a borrower using a weighted
blend of their repayment history (on-time payment ratio, lateness
severity) and financial indicators (income stability proxy). This is
a transparent, explainable rules-based score (rather than a black-box
model) since it directly drives lending decisions and should be
auditable.
"""


def compute_reliability_score(
    total_repayments: int,
    on_time_repayments: int,
    late_repayments: int,
    missed_repayments: int,
    monthly_income: float,
    repayment_weight: float = 0.7,
    income_weight: float = 0.3,
):
    if total_repayments == 0:
        repayment_component = 50.0  # neutral default for new borrowers
    else:
        on_time_ratio = on_time_repayments / total_repayments
        late_penalty = (late_repayments / total_repayments) * 15
        missed_penalty = (missed_repayments / total_repayments) * 35
        repayment_component = max(0.0, min(100.0, on_time_ratio * 100 - late_penalty - missed_penalty))

    # Simple income-stability proxy: higher, more "typical" income scores higher,
    # capped so extremely high incomes don't dominate the blend.
    income_component = max(0.0, min(100.0, (monthly_income or 0) / 50))  # 5000 income -> 100

    reliability_score = round(
        repayment_component * repayment_weight + income_component * income_weight, 2
    )

    if reliability_score >= 80:
        status = "excellent"
    elif reliability_score >= 60:
        status = "good"
    elif reliability_score >= 40:
        status = "fair"
    else:
        status = "poor"

    return reliability_score, status
