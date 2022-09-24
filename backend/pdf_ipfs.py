from Access_t import jwt
import requests
import  json
from text_steganography import encode,decode
from pdf_to_txt import  Pdf_to_txt,Txt_to_Pdf
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

def send_pdf_to_cloud(pdf):
    auth_test()
    url = "https://api.pinata.cloud/pinning/pinFileToIPFS"
    dict = {'name': "base_pdf", 'keyvalues': {'company': 'Pinata'}}
    b = json.dumps(dict)
    payload = {'pinataOptions': '{"cidVersion": 1}',
               'pinataMetadata': f"{b}"}
    files = [
        ('file', (pdf, open(pdf, 'rb'), 'application/octet-stream'))
    ]
    headers = {
        'Authorization': f'Bearer {jwt} '
    }
    response = requests.request("POST", url, headers=headers, data=payload, files=files)
    return response.json()["IpfsHash"]


def auth_test():
    url = "https://api.pinata.cloud/data/testAuthentication"
    payload = {"hey ":"1"}
    headers = {'Authorization': f'Bearer {jwt}'}
    response = requests.request("GET", url, headers=headers, data=payload)
    print(response.text)

def recieve_pdf_data_encode(j):
    base_url = "https://gateway.pinata.cloud/ipfs/"
    bs_url = base_url
    image_link = j['image']
    p = j["pdf"]
    l = image_link.split('://')[1]
    pa = p.split('://')[1]
    bs_url += pa
    base_url += l
    print(base_url)
    download_encode(base_url)
    data = download_pdf(bs_url)
    encoded_image = encode("base_image.png",data)
    encoded_image.save("encoded_image.png")
    return send_to_cloud("encoded_image.png")

def recieve_pdf_data_decode(j):
    base_url = "https://gateway.pinata.cloud/ipfs/"
    image_link = j['image']
    l = image_link.split('://')[1]
    base_url += l
    print(base_url)
    download_decode(base_url)
    s = decode("encoded_image.png")
    Txt_to_Pdf(s)
    return send_pdf_to_cloud("new.pdf")

def download_pdf(durl):
    req = requests.get(durl)
    with open("base.pdf", 'wb') as f:
        for chunk in req.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)
    s = Pdf_to_txt("base.pdf")
    return s
def download_encode(durl):
    req = requests.get(durl)
    with open("base_image.png", 'wb') as f:
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
    "pdf": "ipfs://bafkreicx53iggsshqil6elyhhmko47ln3dciycyomqdgyblfwrjv6t62da",
    "image": "ipfs://bafkreidu5tlgns6y5ficn7be7smaxczcx4jrbk3mkpzner53xivdvsw74m"
}