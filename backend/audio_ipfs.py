from Access_t import jwt
import requests
import  json
from audio_steganography import encode_audio,decode_audio

def send_audio_to_cloud(audio):
    auth_test()
    url = "https://api.pinata.cloud/pinning/pinFileToIPFS"
    dict = {'name': "encoded_audio", 'keyvalues': {'company': 'Pinata'}}
    b = json.dumps(dict)
    payload={'pinataOptions': '{"cidVersion": 1}',
    'pinataMetadata':f"{b}" }
    files = [
        ('file', (audio, open(audio , 'rb'), 'application/octet-stream'))
    ]
    headers = {
      'Authorization':  f'Bearer {jwt} '
    }
    response = requests.request("POST", url, headers=headers, data=payload, files = files)
    return response.json()["IpfsHash"]

def auth_test():
    url = "https://api.pinata.cloud/data/testAuthentication"
    payload = {"hey ":"1"}
    headers = {'Authorization': f'Bearer {jwt}'}
    response = requests.request("GET", url, headers=headers, data=payload)
    print(response.text)

def download_encode(durl):
    req = requests.get(durl)
    with open("file_example_WAV_1MG.wav", 'wb') as f:
        for chunk in req.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)
def download_decode(durl):
    req = requests.get(durl)
    with open("encoded_song.wav", 'wb') as f:
        for chunk in req.iter_content(chunk_size=8192):
            if chunk:
                f.write(chunk)

def recieve_audio_data_encode(j):
    base_url = "https://gateway.pinata.cloud/ipfs/"
    image_link = j['audio']
    data = j["data"]
    l = image_link.split('://')[1]
    base_url += l
    download_encode(base_url)
    encode_audio(data)
    return send_audio_to_cloud("encoded_song.wav")

def recieve_audio_data_decode(j):
    base_url = "https://gateway.pinata.cloud/ipfs/"
    image_link = j['audio']
    l = image_link.split('://')[1]
    base_url += l
    print(base_url)
    download_decode(base_url)
    return decode_audio()
j = {
    "data" : "byee",
    "image": "ipfs://bafybeihsuqdu4wfcunmo6p3diswwfpyf74furmp67o5coyfyadvbekhe7i"
}