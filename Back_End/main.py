from urllib import request
from PIL import Image
from flask import Flask
from flask_cors import CORS
from flask import send_file
from image_Stegano import Encode,Decode

app = Flask(__name__)

CORS(app)


@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route("/image", methods=["POST"])
def process_image():
    file = request.files['image']
    img = Image.open(file.stream)
    img = img.save('savedimage.jpg')
    Encode('savedimage.jpg',"ooo its working")


    return send_file("dest.png", mimetype='image/gif')

if __name__ == "__main__":
    app.run(debug=True)









# @app.route('/user_signin/', methods=['POST'])
# def user_signin():
#     data = request.get_json()
#     value = sign_in(data)
#     return value