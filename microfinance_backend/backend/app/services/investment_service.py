"""
Investment Recommendation Service
-----------------------------------
Matches an investor's stated risk tolerance and preferred sectors
against available loan-backed investment opportunities, producing a
0-100 match_score used to rank recommendations.
"""

RISK_LEVEL_ORDER = {"low": 1, "medium": 2, "high": 3}

# Static catalog of investment opportunity archetypes. In a production
# system this would be sourced from the Loan table (aggregated pools of
# performing loans) — kept simple/static here since it's illustrative.
DEFAULT_OPPORTUNITIES = [
    {"investment_type": "Agriculture Microloan Pool", "risk_level": "low", "expected_return": 0.06},
    {"investment_type": "Retail Small Business Loans", "risk_level": "medium", "expected_return": 0.11},
    {"investment_type": "Emerging Entrepreneur Fund", "risk_level": "high", "expected_return": 0.18},
    {"investment_type": "Education Loan Bundle", "risk_level": "low", "expected_return": 0.07},
    {"investment_type": "Working Capital Loans", "risk_level": "medium", "expected_return": 0.12},
]


def match_score(investor_risk_tolerance: str, opportunity_risk_level: str) -> float:
    investor_level = RISK_LEVEL_ORDER.get((investor_risk_tolerance or "medium").lower(), 2)
    opp_level = RISK_LEVEL_ORDER.get((opportunity_risk_level or "medium").lower(), 2)
    diff = abs(investor_level - opp_level)
    # exact match -> 100, one level off -> 65, two levels off -> 30
    return {0: 100.0, 1: 65.0, 2: 30.0}.get(diff, 30.0)


def generate_recommendations(risk_tolerance: str, preferred_sectors=None, opportunities=None):
    opportunities = opportunities or DEFAULT_OPPORTUNITIES
    recs = []
    for opp in opportunities:
        score = match_score(risk_tolerance, opp["risk_level"])
        recs.append({**opp, "match_score": score})
    recs.sort(key=lambda r: r["match_score"], reverse=True)
    return recs
