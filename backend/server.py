from flask import  Flask,request,send_file
from flask_cors import CORS
from ipfs import recieve_data

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "hello world"

@app.route("/image",methods = ["post","get"])
def process():
    if request.method == 'POST':
        data = request.get_json()
        recieve_data(data)
        return "200"


if __name__ == "__main__":
    app.run(debug=True)