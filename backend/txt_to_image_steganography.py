from text_steganography import encode,decode
def encode_txt(image,file_name):
    with open(file_name) as f:
        lines = f.readlines()
    new_image=encode(image,lines[0])
    new_image.save("fileInImage.png")

def decode_txt(image):
    text=decode(image)
    f = open("recoverFileFromImage.txt", "a")
    f.write(text)
    f.close()


