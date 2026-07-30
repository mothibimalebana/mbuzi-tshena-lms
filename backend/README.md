# Mbudzi Tshena LMS – Backend API

Full Python backend for the **Mbudzi Tshena Financial Solutions** Microfinance Loan Management System.

Built with **FastAPI + SQLAlchemy + JWT**.

---

## Features

- **Authentication**
  - Borrower register / login (email **or** SA ID number)
  - Admin login
  - JWT Bearer tokens
- **Loan Applications**
  - Full multi-step form data (personal, address, employment, loan, banking, references)
  - Automatic **AI risk scoring** (rule-based, 0–100)
  - AI action recommendation: Auto-Approve / Manual Review / Flagged / Decline
  - Reference number generation (`LNxxxxxxxxx`)
  - Status workflow: Pending → Under Review → Approved / Rejected → Disbursed
  - Confirmation email (template support)
- **Loans**
  - Created automatically on approval
  - Instalment calculation, outstanding balance tracking
- **Payments**
  - Repayments & disbursements
  - Transaction IDs, status tracking
  - Summary stats for admin
- **Documents**
  - Upload (PDF, images, Word) linked to applications
- **Admin Dashboard**
  - KPI stats, chart data (approvals/rejections), fraud alerts
  - Borrowers list, application filters & search
- **SA-specific validation**
  - 13-digit ID number
  - Phone format `0xxxxxxxxx`

---

## Quick Start

```bash
cd mbuzi-tshena-backend

# Create virtualenv
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# (Optional) copy env
cp .env.example .env
# edit .env if needed

# Run
python run.py
# or: uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

API will be available at:

- **http://localhost:8000**
- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### Default Admin

| Field    | Value                        |
|----------|------------------------------|
| Email    | `admin@mbudzitshena.co.za`   |
| Password | `Admin@12345`                |

**Change this password immediately in production.**

---

## Main Endpoints

| Method | Path | Description | Auth |
|--------|------|-------------|------|
| POST | `/api/auth/register` | Register borrower | — |
| POST | `/api/auth/login/json` | Login (email or ID + password) | — |
| POST | `/api/auth/admin/login` | Admin login | — |
| GET  | `/api/auth/me` | Current user | Bearer |
| POST | `/api/applications` | Submit loan application | Bearer |
| GET  | `/api/applications/me` | My applications | Bearer |
| GET  | `/api/applications` | List all (admin, paginated + filters) | Admin |
| PATCH| `/api/applications/{ref}/status` | Approve / Reject | Admin |
| GET  | `/api/admin/dashboard` | Dashboard KPIs + chart + alerts | Admin |
| GET  | `/api/admin/borrowers` | Borrowers list | Admin |
| GET  | `/api/payments` | Payments list | Admin |
| POST | `/api/payments` | Record payment | Admin |
| POST | `/api/documents/upload/{app_id}` | Upload document | Bearer |

Full interactive docs at `/docs`.

---

## Database

Default: **SQLite** (`mbuzi_tshena.db` created automatically).

For production, set in `.env`:

```
DATABASE_URL=postgresql+psycopg2://user:pass@localhost:5432/mbuzi_tshena
```

Tables are created on startup (`create_all`). For migrations, Alembic is included in requirements – you can initialise it later.

---

## Connecting the Frontend

1. Set the frontend API base URL to `http://localhost:8000`
2. On login, store the `access_token` and send it as:
   ```
   Authorization: Bearer <token>
   ```
3. Loan application form → `POST /api/applications` with the full JSON body matching the form fields.
4. After success, the response contains `reference_number` – show it on the confirmation page and optionally trigger the email (already sent by backend).

Example login call:

```js
const res = await fetch("http://localhost:8000/api/auth/login/json", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ identifier: "user@email.com", password: "..." })
});
const { access_token, user } = await res.json();
```

---

## Project Structure

```
mbuzi-tshena-backend/
├── app/
│   ├── main.py              # FastAPI app + CORS + lifespan
│   ├── config.py            # Settings from env
│   ├── database.py          # SQLAlchemy engine & session
│   ├── models.py            # ORM models
│   ├── schemas.py           # Pydantic schemas
│   ├── auth.py              # JWT + password hashing
│   ├── routers/
│   │   ├── auth.py
│   │   ├── applications.py
│   │   ├── payments.py
│   │   ├── admin.py
│   │   └── documents.py
│   └── utils/
│       ├── risk_score.py    # Simple AI risk engine
│       └── email.py         # Confirmation emails
├── uploads/                 # Document storage
├── requirements.txt
├── .env.example
├── run.py
└── README.md
```

---

## Production Notes

- Change `SECRET_KEY` to a strong random value
- Use PostgreSQL
- Set `EMAIL_ENABLED=True` + real SMTP credentials
- Put documents on S3 / Cloudflare R2 instead of local disk
- Add rate limiting and proper logging
- Replace the rule-based risk score with a real model when ready
- Run behind nginx / Caddy with HTTPS

---

Built for the Mbuzi Tshena / Mbudzi Tshena LMS frontend.
