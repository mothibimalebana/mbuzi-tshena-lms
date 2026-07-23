from flask import Flask

app = Flask(__name__)

@app.route('/api/')
def index():
    return "<h1>Home Page</h1>"