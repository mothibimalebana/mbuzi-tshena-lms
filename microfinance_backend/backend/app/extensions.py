"""
Central place for Flask extension instances so they can be imported
by models, routes, and services without circular-import issues.
"""
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from flask_cors import CORS

db = SQLAlchemy()
jwt = JWTManager()
migrate = Migrate()
cors = CORS()
