# Steganography

Python program based on stegonographical methods to hide files in images using the Least Significant Bit technique.

I used the most basic method which is the least significant bit. A colour pixel is composed of red, green and blue, encoded on one byte. The idea is to store information in the first bit of every pixel's RGB component. In the worst case, the decimal value is different by one which is not visible to the human eye. In practice, if you don't have space to store all of your data in the first bit of every pixel you should start using the second bit, and so on. You have to keep in mind that the more your store data in an image, the more it can be detected.

# how to use 

run the following commands

backend



` pip install -r requirements.txt`

`python backend/server.py`

frontend

`yarn `

`yarn dev`


# errors

 we have stored our image in  pinata IPFS 
 
 as the servers of Pinata are down, hence an error will be produced.
 
 for reference 
 
 https://gateway.pinata.cloud/ipfs/bafybeigu5yu6dvvvaary253un2ljhyl33fq4s32gmqixcvalvrnhktbaoq
 
