from flask import Flask, render_template, request, jsonify
import smtplib, os
from dotenv import load_dotenv
from flask_bootstrap import Bootstrap5


load_dotenv()

MY_EMAIL = os.getenv("EMAIL")
MY_PASSWORD = os.getenv("PASSWORD")

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')

Bootstrap5(app)

@app.route("/", methods = ["GET", "POST"])
def home():
    
    if request.method == "POST":
        data = request.form
        print(f"Name: {data['name']}\nEmail: {data['email']}\nPhone: {data['phone']}\nMessage: {data['message']}")
        try:
            connection = smtplib.SMTP("smtp.gmail.com", port=587)
            connection.starttls()
            connection.login(user=MY_EMAIL, password=MY_PASSWORD)
            connection.sendmail(
                from_addr=MY_EMAIL,
                to_addrs=MY_EMAIL,
                msg=f"Subject: {data['name']} has contacted you! \n\nName: {data['name']}\nEmail: {data['email']}\nPhone: {data['phone']}\nMessage: {data['message']}"
            )
            connection.quit()
            print("Message Sent!")
            return jsonify({"success": True})
        except Exception as e:
            return jsonify({"success": False, "error_message": str(e)})
    return render_template("index.html")

@app.route("/about-me")
def about_me():
    return render_template("about-me.html")


if __name__ == "__main__":
    app.run(debug=False)