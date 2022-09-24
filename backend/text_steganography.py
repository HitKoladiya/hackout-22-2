from stegano import lsb

def encode(img, data):
    if (len(data) == 0):
        return ValueError('Data is empty')
    new_img = lsb.hide(img, data)
    return  new_img

def decode(img):
    encrypted_text = lsb.reveal(img)
    return encrypted_text