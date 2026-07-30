# AI-Driven Microfinance Lending & Investment Intelligence System — Backend

A complete Flask REST API backend for a microfinance platform: loan applications,
AI-powered risk assessment, fraud detection, borrower scoring, investment
recommendations, a support chatbot, and an admin dashboard.

## Quick Start

```bash
cp .env.example .env
# (edit .env if you want different secrets/credentials)
docker-compose up --build
```

The API will be available at **http://localhost:5000/api**.

On first boot the app will:
- Auto-create all database tables
- Seed a default admin: `admin@system.com` / `Admin123!`
- Seed sample test users:
  - Borrower: `borrower@example.com` / `Borrower123!`
  - Investor: `investor@example.com` / `Investor123!`
- Auto-train the ML models (Logistic Regression, Decision Tree, Random Forest,
  Isolation Forest) on synthetic bootstrap data on their first use, and cache
  them as `.pkl` files under `models/`

## Verifying it's running

```bash
curl http://localhost:5000/api/system/health
```

## Authentication

Register or log in to get a JWT:

```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@system.com", "password": "Admin123!"}'
```

Use the returned `access_token` as `Authorization: Bearer <token>` on subsequent
requests.

## Project Structure

```
backend/
├── Dockerfile
├── docker-compose.yml
├── .env.example
├── requirements.txt
├── run.py                  # entrypoint: waits for DB, creates tables, seeds data, starts server
├── app/
│   ├── __init__.py         # application factory, blueprint + extension registration
│   ├── config.py
│   ├── extensions.py       # shared db/jwt/migrate/cors instances
│   ├── models/             # SQLAlchemy models (13 tables from the SRS)
│   ├── routes/             # blueprints: auth, loans, risk, repayments,
│   │                       #   investments, fraud, chatbot, admin, system
│   ├── services/           # AI/ML + business logic
│   │   ├── risk_engine.py       # LogReg + Decision Tree + Random Forest ensemble
│   │   ├── fraud_detector.py    # Isolation Forest anomaly detection
│   │   ├── scoring_service.py   # borrower reliability scoring
│   │   ├── investment_service.py# investor/opportunity matching
│   │   └── chatbot_service.py   # rule-based support chatbot
│   ├── middleware/          # JWT role-based access control, rate limiting
│   ├── utils/                # validators, standardized response helpers
│   └── seeds/init_data.py    # default admin + sample data
├── models/                  # trained .pkl files (created at runtime)
├── tests/                   # pytest suite (auth, loans, risk) — 15 passing tests
└── logs/                    # rotating app log file
```

## Running tests locally (without Docker)

```bash
pip install -r requirements.txt --break-system-packages
python -m pytest tests/ -v
```

Tests use an in-memory SQLite database, so no Postgres instance is required to
run them.

## Notes on the AI/ML layer

- **Risk assessment** (`/api/risk/assess`) averages predicted default
  probability across three scikit-learn classifiers trained on synthetic
  data at first run (or your own historical data via `/api/risk/models/train`).
  It returns a 0–100 risk score and an approve/review/reject recommendation
  in well under a second.
- **Fraud detection** (`/api/fraud/analyze`) uses an Isolation Forest to flag
  anomalous loan-to-income ratios or application bursts in real time, and
  automatically opens a `FraudAlert` when an anomaly is detected.
- **Borrower scoring** is a transparent, weighted rules-based score (not a
  black box) combining repayment history and income, since it directly
  informs lending decisions.
- All trained models are cached to disk (`joblib`) so restarts don't require
  retraining.

## Security notes for production

- Replace `SECRET_KEY` / `JWT_SECRET_KEY` in `.env` with strong random values.
- Put the API behind HTTPS/TLS termination (e.g. via a reverse proxy).
- Consider moving the token blocklist (`/api/auth/logout`) to Redis if you
  run multiple API workers/replicas — the current implementation is a simple
  in-process set suitable for single-worker/dev deployments.
- Review CORS_ORIGINS before deploying beyond localhost.
