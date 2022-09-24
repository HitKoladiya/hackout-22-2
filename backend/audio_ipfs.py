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

print(send_audio_to_cloud("encoded_audio.wav"))