from flask import  Flask,request,send_file
from PIL import Image
from flask_cors import CORS
from text_steganography import  encode,decode

app = Flask(__name__)
CORS(app)

@app.route("/")
def hello_world():
    return "hello world"

@app.route("/image",methods = ["post","get"])
def process():
    if request.method == 'POST':
        # check if the post
        # request has the file part
        print(request)
        f = request.files.get('file')
        img = Image.open(f)
        print(img)
        img.save("hello.png")
        encode(img,"fuck off")
        return "200"


if __name__ == "__main__":
    app.run(debug=True)