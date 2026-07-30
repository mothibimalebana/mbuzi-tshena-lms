import os
import time
from sqlalchemy.exc import OperationalError

from app import create_app
from app.extensions import db
from app.seeds.init_data import seed_data

app = create_app(os.environ.get("FLASK_ENV", "production"))


def wait_for_db(max_retries=15, delay=2):
    """Docker Compose starts postgres and flask-api close together;
    even with a healthcheck it's worth a small retry loop here too."""
    for attempt in range(1, max_retries + 1):
        try:
            with app.app_context():
                db.session.execute(db.text("SELECT 1"))
            return True
        except OperationalError:
            app.logger.info(f"Database not ready yet (attempt {attempt}/{max_retries}), retrying...")
            time.sleep(delay)
    return False


if __name__ == "__main__":
    if wait_for_db():
        with app.app_context():
            db.create_all()
            seed_data(app)
            app.logger.info("Database tables created and seed data loaded.")
    else:
        app.logger.error("Could not connect to the database after multiple retries.")

    app.run(host="0.0.0.0", port=5000)
