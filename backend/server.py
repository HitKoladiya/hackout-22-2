from flask import  Flask,request,send_file
from flask_cors import CORS
from ipfs import recieve_data_encode,recieve_data_decode
from audio_ipfs import  recieve_audio_data_encode,recieve_audio_data_decode
from text_to_img_ipfs import recieve_data_decode_txt,recieve_data_encode_txt

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "hello world"

@app.route("/image_encode",methods = ["post","get"])
def process_encode():
    if request.method == 'POST':
        data = request.get_json()
        id = recieve_data_encode(data)
        return {
            "status": "200",
            "IpfsHash" : id
        }
@app.route("/image_decode",methods = ["post","get"])
def process_decode():
    if request.method == 'POST':
        data = request.get_json()
        id = recieve_data_decode(data)

        return {
            "status": "200",
            "decoded_text": id
        }
@app.route("/audio_encode",methods = ["post","get"])
def process_audio_encode():
    if request.method == 'POST':
        data = request.get_json()
        id = recieve_audio_data_encode(data)
        return {
            "status": "200",
            "IpfsHash" : id
        }

@app.route("/audio_decode",methods = ["post","get"])
def process_audio_decode():
    if request.method == 'POST':
        data = request.get_json()
        id = recieve_audio_data_decode(data)
        return {
            "status": "200",
            "decoded_text": id
        }
@app.route("/txt_encode",methods = ["post","get"])
def process_txt_encode():
    if request.method == 'POST':
        data = request.get_json()
        id = recieve_data_encode_txt(data)
        return {
            "status": "200",
            "IpfsHash" : id
        }

@app.route("/txt_decode",methods = ["post","get"])
def process_txt_decode():
    if request.method == 'POST':
        data = request.get_json()
        id = recieve_data_decode_txt(data)
        return {
            "status": "200",
            "decoded_text": id
        }


if __name__ == "__main__":
    app.run(debug=True)