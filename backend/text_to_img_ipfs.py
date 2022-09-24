from txt_to_image_steganography import encode_txt,decode_txt
from Access_t import jwt
import requests
import  json
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

def recieve_data_encode_txt(j):
    base_url = "https://gateway.pinata.cloud/ipfs/"
    image_link = j['image']
    data = j["data"]
    l = image_link.split('://')[1]
    base_url += l
    print(base_url)
    download_encode(base_url)
    encoded_image = encode_txt("base_image.png",data)
    encoded_image.save("encoded_image.png")
    return send_to_cloud("encoded_image.png")

def recieve_data_decode_txt(j):
    base_url = "https://gateway.pinata.cloud/ipfs/"
    image_link = j['image']
    l = image_link.split('://')[1]
    base_url += l
    print(base_url)
    download_decode(base_url)
    return decode_txt("encoded_image.png")

def download_encode(durl):
    req = requests.get(durl)
    with open("base.txt", 'wb') as f:
        for chunk in req.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)
def download_decode(durl):
    req = requests.get(durl)
    with open("encoded_image.png", 'wb') as f:
        for chunk in req.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)

j = {
    "data": "Jayu",
    "image": "ipfs://bafkreidu5tlgns6y5ficn7be7smaxczcx4jrbk3mkpzner53xivdvsw74m"
}