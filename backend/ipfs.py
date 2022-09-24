import requests
from Access_t import jwt
import requests
import  json
from text_steganography import encode,decode
def send_to_cloud(img):
    auth_test()
    url = "https://api.pinata.cloud/pinning/pinFileToIPFS"
    dict = {'name': "encoded_image", 'keyvalues': {'company': 'Pinata'}}
    b = json.dumps(dict)
    payload={'pinataOptions': '{"cidVersion": 1}',
    'pinataMetadata':f"{b}" }
    files = [
        ('file', (img, open(img , 'rb'), 'application/octet-stream'))
    ]
    headers = {
      'Authorization':  f'Bearer {jwt} '
    }
    response = requests.request("POST", url, headers=headers, data=payload, files = files)
    s =  response.json()
    return s['IpfsHash']
def auth_test():
    url = "https://api.pinata.cloud/data/testAuthentication"
    payload = {"hey ":"1"}
    headers = {'Authorization': f'Bearer {jwt}'}
    response = requests.request("GET", url, headers=headers, data=payload)
    print(response.text)

def recieve_data_encode(j):
    base_url = "https://gateway.pinata.cloud/ipfs/"
    image_link = j['image']
    data = j["data"]
    l = image_link.split('://')[1]
    base_url += l
    print(base_url)
    download(base_url)
    encoded_image = encode("base_image.png",data)
    encoded_image.save("encoded_image.png")
    return send_to_cloud("encoded_image.png")

def recieve_data_decode(j):
    base_url = "https://gateway.pinata.cloud/ipfs/"
    image_link = j['image']
    l = image_link.split('://')[1]
    base_url += l
    print(base_url)
    download(base_url)
    return decode("base_image.png")

def download(durl):
    req = requests.get(durl)
    with open("base_image.png", 'wb') as f:
        for chunk in req.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)

j = {
    "data": "Jayu",
    "image": "ipfs://QmNc7vC1ZgCMffQkusrdQZTAwqAUhFSPSQzyK1aUbZBskf"
}