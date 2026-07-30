from flask import Flask
from flask_sqlalchemy import SQLAlchemy
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://admin:MyPassword@123@localhost:5432/mydatabase"

db = SQLAlchemy(app)

@app.route('/api/')
def index():
    return "<h1>Home Page</h1>"