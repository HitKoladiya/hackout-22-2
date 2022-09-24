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
        try:
            data = request.get_json()
            id = recieve_data(data)
            return {
                "status": "success",
                "IpfsHash" : id
            }
        except :
            return {
                "status": "failed"
            }


if __name__ == "__main__":
    app.run(debug=True)