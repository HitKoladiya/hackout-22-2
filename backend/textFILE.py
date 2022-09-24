from text_steganography import encode,decode
def encod(image,file_name):
    with open(file_name) as f:
        lines = f.readlines()
    # print(lines[0])
    new_image=encode(image,lines[0])
    # print(decode(new_image))
    new_image.save("fileInImage.png")

def decod(image):
    text=decode(image)
    # print(text)
    f = open("recoverFileFromImage.txt", "a")
    f.write(text)
    f.close()
#
encod("hello.png","texting_file.txt")
# decod("hello.png")
decod("fileInImage.png")
