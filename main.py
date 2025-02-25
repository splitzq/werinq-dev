from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portsfolio.html')

@app.errorhandler(Exception)
def handle_error(e):
    code = getattr(e, "code", 500)  # get status code, default to 500
    name = getattr(e, "name", "Internal Server Error")  # get reason

    if code == 404:
        name = "Page Not Found"  # override name

    if code == 500:
        name = "Internal Server Error"

    return render_template('error.html', code=code, name=name), code

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)