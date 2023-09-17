from flask import Flask, render_template
import smtplib, os
from dotenv import load_dotenv
from flask_bootstrap import Bootstrap5

load_dotenv()

MY_EMAIL = os.getenv("EMAIL")
MY_PASSWORD = os.getenv("PASSWORD")

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

Bootstrap5(app)

@app.route("/")
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)