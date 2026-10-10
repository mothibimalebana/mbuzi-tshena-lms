"""
Make FICTIONAL application documents (ID, payslip, bank statement, proof of residence) for testing
the Mbudzi Tshena LMS document check. Every file is clearly marked SPECIMEN. Only use it with test data.

Run it from the backend folder and type the SAME details into the loan application form:

    .\\venv\\Scripts\\python.exe scripts\\make_test_documents.py --name "Lerato Mokwena" --id 0003150234080 --address "45 Church Street" --city Polokwane --postal 0699 --employer "Limpopo Traders" --income 15000 --bank fnb --account 6234567890

Add --mistake to get one thing wrong on purpose (that document should be FLAGGED):

    ... --mistake wrong-employer

It saves a PNG and a PDF of each document in Downloads\\mbuzi-test-documents\\<name>
"""
import argparse
import os
from datetime import date, timedelta

from PIL import Image, ImageDraw, ImageFont

MONTHS = ["January", "February", "March", "April", "May", "June", "July",
          "August", "September", "October", "November", "December"]
BANKS = {"capitec": "Capitec", "fnb": "FNB", "absa": "ABSA", "nedbank": "Nedbank", "standard-bank": "Standard Bank"}
MISTAKES = {
    "wrong-id": "ID document has a different ID number",
    "wrong-name": "ID document has a different name",
    "wrong-employer": "payslip has a different employer",
    "income-too-high": "payslip pay is much higher than the stated income",
    "wrong-account": "bank statement has a different account number",
    "low-income": "bank statement salary is much lower than the stated income",
    "wrong-address": "proof of residence has a different address",
    "old-residence": "proof of residence is older than 3 months",
}
OUT_DIR = os.path.join(os.path.expanduser("~"), "Downloads", "mbuzi-test-documents")

def font(size, bold=False):
    name = "arialbd.ttf" if bold else "arial.ttf"
    try:
        return ImageFont.truetype(os.path.join(os.environ.get("WINDIR", "C:/Windows"), "Fonts", name), size)
    except OSError:
        return ImageFont.load_default()


def money(amount):
    """R 18 500.00 (negative: R -1 250.00), the way South African documents write it."""
    return f"R {amount:,.2f}".replace(",", " ")


def nice_date(d):
    return f"{d.day:02d} {MONTHS[d.month - 1]} {d.year}"

# ---------- SA ID number ----------

def id_checksum_ok(id_number):
    """Luhn check on the 13 digits (same rule as backend/app/utils/sa_id.py)."""
    total = 0
    for position, digit in enumerate(reversed(id_number)):
        d = int(digit)
        if position % 2 == 1:
            d = d * 2 - 9 if d > 4 else d * 2
        total += d
    return total % 10 == 0


def fixed_id(id_number):
    """The same first 12 digits with the last digit that makes the checksum valid."""
    return next(id_number[:12] + str(d) for d in range(10) if id_checksum_ok(id_number[:12] + str(d)))

def birth_date(id_number):
    year = int(id_number[:2])
    century = 1900 if year > date.today().year % 100 else 2000
    return date(century + year, int(id_number[2:4]), int(id_number[4:6]))

# ---------- Drawing ----------

def new_page(heading, subheading):
    """An A4-shaped white page with a heading. Returns the image and the pen to draw with."""
    img = Image.new("RGB", (1240, 1754), "white")
    pen = ImageDraw.Draw(img)
    pen.text((80, 70), heading, font=font(44, True), fill="black")
    pen.text((80, 135), subheading, font=font(28), fill="black")
    return img, pen

def draw_rows(pen, y, rows):
    """Label on the left, value on the right. Returns where the next line can start."""
    for label, value in rows:
        pen.text((80, y), f"{label}:", font=font(30), fill="black")
        pen.text((520, y), value, font=font(32, True), fill="black")
        y += 62
    return y

def save(img, pen, folder, file_name):
    pen.text((80, 1670), "SPECIMEN - FICTIONAL TEST DATA - NOT A REAL DOCUMENT", font=font(26, True), fill=(200, 30, 30))
    base = os.path.join(folder, file_name)
    img.save(base + ".png")
    img.save(base + ".pdf", "PDF", resolution=150)
    print("  " + base + ".png  (+ .pdf)")

# ---------- The four documents ----------

def make_id_document(a, folder):
    id_number = a.id
    name = a.name
    if a.mistake == "wrong-id":
        id_number = fixed_id(str(int(a.id[:12]) + 1).zfill(12))
    if a.mistake == "wrong-name":
        name = "Nomvula Precious Dlamini"
    *first_names, surname = name.split()
    born = birth_date(a.id)
    img, pen = new_page("Republic of South Africa (SPECIMEN)", "Identity Document")
    draw_rows(pen, 240, [
        ("Surname", surname.upper()),
        ("Names", " ".join(first_names).upper()),
        ("Identity number", id_number),
        ("Date of birth", nice_date(born)),
        ("Sex", "M" if int(a.id[6:10]) >= 5000 else "F"),
        ("Nationality", "RSA"),
        ("Date of issue", nice_date(born.replace(year=born.year + 16))),
    ])
    save(img, pen, folder, "id_document" + ("_" + a.mistake if a.mistake in ("wrong-id", "wrong-name") else ""))

def make_payslip(a, folder, today):
    employer = "Other Company (Pty) Ltd" if a.mistake == "wrong-employer" else a.employer
    gross = a.income * 1.5 if a.mistake == "income-too-high" else a.income
    paye = round(gross * 0.18, 2)
    uif = round(min(gross * 0.01, 177.12), 2)
    net = gross - paye - uif
    pay_day = today.replace(day=25) if today.day >= 25 else (today.replace(day=1) - timedelta(days=1)).replace(day=25)
    img, pen = new_page(f"{employer} (SPECIMEN)", "Payslip")
    y = draw_rows(pen, 240, [
        ("Employee", a.name),
        ("ID number", a.id),
        ("Occupation", a.occupation),
        ("Pay date", nice_date(pay_day)),
    ])
    pen.line((80, y + 10, 1160, y + 10), fill="black", width=3)
    draw_rows(pen, y + 40, [
        ("Gross Pay", money(gross)),
        ("PAYE", money(paye)),
        ("UIF", money(uif)),
        ("Net Pay", money(net)),
    ])
    save(img, pen, folder, "payslip" + ("_" + a.mistake if a.mistake in ("wrong-employer", "income-too-high") else ""))
    return net, pay_day

def make_bank_statement(a, folder, net, pay_day):
    account = a.account
    if a.mistake == "wrong-account":
        account = a.account[:-3] + str((int(a.account[-3:]) + 111) % 1000).zfill(3)
    salary = net * 0.4 if a.mistake == "low-income" else net
    # Three months: salary in on pay day, a few payments out (negative), and the running balance
    rows = []
    balance = 1520.35
    for months_back in (2, 1, 0):
        month = (pay_day.month - months_back - 1) % 12 + 1
        year = pay_day.year - (1 if pay_day.month - months_back < 1 else 0)
        paid_in = date(year, month, 25)
        for when, text, amount in [
            (paid_in, f"SALARY {a.employer.upper().replace(' (PTY) LTD', '')[:22]}", salary),
            (paid_in + timedelta(days=2), "DEBIT ORDER RENT", -round(salary * 0.30 + months_back * 3.17, 2)),
            (paid_in + timedelta(days=4), "CARD PURCHASE GROCERIES", -round(salary * 0.12 + months_back * 7.43, 2)),
        ]:
            balance = round(balance + amount, 2)
            rows.append((when, text, amount, balance))
    bank = BANKS[a.bank]
    img, pen = new_page(f"{bank} - Bank Statement (SPECIMEN)", "Statement for the last 3 months")
    y = draw_rows(pen, 240, [
        ("Account holder", a.name),
        ("Account number", account),
        ("Account type", "Savings"),
        ("Bank", bank),
    ])
    y += 30
    for x, title in [(80, "Date"), (330, "Description"), (820, "Amount"), (1160, "Balance")]:
        pen.text((x, y), title, font=font(26, True), fill="black", anchor="ra" if x == 1160 else "la")
    y += 50
    for when, text, amount, bal in rows:
        pen.text((80, y), f"{when.day:02d} {MONTHS[when.month - 1][:3]} {when.year}", font=font(26), fill="black")
        pen.text((330, y), text, font=font(26), fill="black")
        pen.text((820, y), money(amount), font=font(26), fill="black")
        pen.text((1160, y), money(bal), font=font(26), fill="black", anchor="ra")
        y += 52
    save(img, pen, folder, "bank_statement" + ("_" + a.mistake if a.mistake in ("wrong-account", "low-income") else ""))

def make_proof_of_residence(a, folder, today):
    address = "99 Different Road" if a.mistake == "wrong-address" else a.address
    issued = today - timedelta(days=120 if a.mistake == "old-residence" else 10)
    img, pen = new_page(f"{a.city} Municipality (SPECIMEN)", "Municipal account - proof of residence")
    draw_rows(pen, 240, [
        ("Account holder", a.name),
        ("Address", address),
        ("City", a.city),
        ("Postal code", a.postal),
        ("Statement date", nice_date(issued)),
        ("Amount due", money(842.60)),
    ])
    save(img, pen, folder, "proof_of_residence" + ("_" + a.mistake if a.mistake in ("wrong-address", "old-residence") else ""))

def main():
    p = argparse.ArgumentParser(description="Make SPECIMEN application documents for testing")
    p.add_argument("--name", required=True, help='full name, e.g. "Lerato Mokwena"')
    p.add_argument("--id", required=True, help="13-digit SA ID number")
    p.add_argument("--address", required=True, help='street address, e.g. "45 Church Street"')
    p.add_argument("--city", default="Polokwane")
    p.add_argument("--postal", default="0699")
    p.add_argument("--employer", default="Limpopo Traders (Pty) Ltd")
    p.add_argument("--occupation", default="Sales Assistant")
    p.add_argument("--income", type=float, default=15000, help="GROSS monthly income, as typed on the form")
    p.add_argument("--bank", choices=BANKS, default="capitec")
    p.add_argument("--account", default="1234567890", help="bank account number")
    p.add_argument("--mistake", choices=MISTAKES, help="get one thing wrong on purpose")
    a = p.parse_args()

    if not (a.id.isdigit() and len(a.id) == 13):
        p.error("--id must be 13 digits")
    if not id_checksum_ok(a.id):
        p.error(f"{a.id} fails the SA ID checksum, so the form will reject it. Try {fixed_id(a.id)} instead.")

    today = date.today()
    folder = os.path.join(OUT_DIR, a.name.replace(" ", "_"))
    os.makedirs(folder, exist_ok=True)
    print("Made:")
    make_id_document(a, folder)
    net, pay_day = make_payslip(a, folder, today)
    make_bank_statement(a, folder, net, pay_day)
    make_proof_of_residence(a, folder, today)
    print(f"\nType these into the application form: {a.name}, ID {a.id}, born {birth_date(a.id)}, "
          f"{a.address}, {a.city} {a.postal}, employer {a.employer}, gross income {a.income:,.0f}, "
          f"bank {BANKS[a.bank]}, account {a.account}")
    if a.mistake:
        print(f"Mistake on purpose: {MISTAKES[a.mistake]} -> that document should be FLAGGED")

if __name__ == "__main__":
    main()