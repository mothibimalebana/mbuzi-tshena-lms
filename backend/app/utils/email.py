import logging
from pathlib import Path
from typing import Optional
from app.config import settings

logger = logging.getLogger(__name__)

# Load the confirmation template once
TEMPLATE_PATH = Path(__file__).resolve().parents[2] / "email-confirmation-template.html"
# Fallback if not present (we can embed a minimal one)
FALLBACK_TEMPLATE = """
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; background:#F4F6F8; padding:20px;">
  <div style="max-width:600px;margin:0 auto;background:#fff;padding:30px;border-radius:8px;">
    <h1 style="color:#005B3F;">Application Received!</h1>
    <p>Thank you, {{APPLICANT_NAME}}. Your loan application has been received.</p>
    <p><strong>Reference:</strong> {{REFERENCE_NUMBER}}</p>
    <p><strong>Amount:</strong> R {{LOAN_AMOUNT}}</p>
    <p>We will review it within 24 hours and contact you via email/SMS.</p>
    <p style="color:#666;font-size:12px;">Mbudzi Tshena Financial Solutions</p>
  </div>
</body>
</html>
"""


def render_confirmation_email(
    applicant_name: str,
    reference_number: str,
    loan_amount: float,
) -> str:
    try:
        if TEMPLATE_PATH.exists():
            html = TEMPLATE_PATH.read_text(encoding="utf-8")
        else:
            html = FALLBACK_TEMPLATE
    except Exception:
        html = FALLBACK_TEMPLATE

    html = html.replace("{{APPLICANT_NAME}}", applicant_name)
    html = html.replace("{{REFERENCE_NUMBER}}", reference_number)
    html = html.replace("{{LOAN_AMOUNT}}", f"{loan_amount:,.0f}")
    return html


async def send_email(
    to_email: str,
    subject: str,
    html_body: str,
) -> bool:
    """
    Send email if EMAIL_ENABLED and SMTP credentials are set.
    Otherwise log the email content (dev mode).
    """
    if not settings.EMAIL_ENABLED or not settings.SMTP_USER:
        logger.info(
            "EMAIL (dev mode) → To: %s | Subject: %s\n%s",
            to_email,
            subject,
            html_body[:500] + "..." if len(html_body) > 500 else html_body,
        )
        return True

    try:
        import aiosmtplib
        from email.mime.text import MIMEText
        from email.mime.multipart import MIMEMultipart

        message = MIMEMultipart("alternative")
        message["From"] = settings.SMTP_FROM
        message["To"] = to_email
        message["Subject"] = subject
        message.attach(MIMEText(html_body, "html"))

        await aiosmtplib.send(
            message,
            hostname=settings.SMTP_HOST,
            port=settings.SMTP_PORT,
            username=settings.SMTP_USER,
            password=settings.SMTP_PASSWORD,
            start_tls=True,
        )
        logger.info("Email sent successfully to %s", to_email)
        return True
    except Exception as e:
        logger.error("Failed to send email to %s: %s", to_email, e)
        return False


async def send_application_confirmation(
    to_email: str,
    applicant_name: str,
    reference_number: str,
    loan_amount: float,
) -> bool:
    subject = f"Loan Application Received – {reference_number} | Mbudzi Tshena"
    body = render_confirmation_email(applicant_name, reference_number, loan_amount)
    return await send_email(to_email, subject, body)