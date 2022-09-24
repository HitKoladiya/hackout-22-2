from stegano import lsb

def Encode(src, message):
    secret=lsb.hide(src,message)
    secret.save("dest.png")

def Decode(src):
    print(lsb.reveal('./dest.png'))

# Encode("hit.jpg","i am hit koladiya")
# Decode("hit.jpg")