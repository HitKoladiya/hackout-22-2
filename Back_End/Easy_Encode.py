from stegano import lsb
secret = lsb.hide("./tests/sample-files/Lenna.png", "Hello World")
secret.save("./Lenna-secret.png")
clear_message = lsb.reveal("./Lenna-secret.png")