FROM python:3.10-slim

WORKDIR /app

# System deps for psycopg2 / scikit-learn
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN mkdir -p /app/models /app/logs

ENV PYTHONUNBUFFERED=1 \
    FLASK_APP=run.py

EXPOSE 5000

CMD ["python", "run.py"]
