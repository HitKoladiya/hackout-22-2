import math
import os
import cv2
from subprocess import call,STDOUT
from stegano import lsb

vidcap = cv2.VideoCapture("video.mp4")
success, image = vidcap.read()

count=0
while True:
        success, image = vidcap.read()
        if not success:
            break
        cv2.imwrite(os.path.join("D:\My Projects\DAIICT HECKATHON\hackout-22-2\Back_End/temp_folder", "{:d}.png".format(count)), image)
        count += 1

call(["ffmpeg", "-i","video.mp4" , "-q:a", "0", "-map", "a", "tmp/audio.mp3", "-y"],stdout=open(os.devnull, "w"), stderr=STDOUT)


def split_string(s_str, count=10):
    per_c = math.ceil(len(s_str) / count)
    c_cout = 0
    out_str = ''
    split_list = []
    for s in s_str:
        out_str += s
        c_cout += 1
        if c_cout == per_c:
            split_list.append(out_str)
            out_str = ''
            c_cout = 0
    if c_cout != 0:
        split_list.append(out_str)
    return split_list


def encode_string(input_string,root="./tmp/"):
    split_string_list=split_string(input_string)
    for i in range(0,len(split_string_list)):
        f_name="{}frame{}.jpg".format(root,i)
        secret_enc=lsb.hide(f_name,split_string_list[i])
        secret_enc.save(f_name)
        print("[INFO] frame {} holds {}".format(f_name,split_string_list[i]))

call(["ffmpeg", "-i", "tmp/frame%d.png" , "-vcodec", "png", "video.mov", "-y"],stdout=open(os.devnull, "w"), stderr=STDOUT)

call(["ffmpeg", "-i", "temp/video.mov", "-i", "temp/audio.mp3", "-codec", "copy","data/enc-" + str(tmp/audio.mp3)+".mov", "-y"],stdout=open(os.devnull, "w"), stderr=STDOUT)



def frame_extraction(video):
    if not os.path.exists("./tmp"):
        os.makedirs("tmp")
    temp_folder = "./tmp"
    print("[INFO] tmp directory is created")

    vidcap = cv2.VideoCapture(video)
    count = 0

    while True:
        success, image = vidcap.read()
        if not success:
            break
        cv2.imwrite(os.path.join(temp_folder, "{:d}.png".format(count)), image)
        count += 1

def decode_string(video):
    frame_extraction(video)
    secret = []
    root = "./tmp/"
    for i in range(len(os.listdir(root))):
        f_name = "{}{}.png".format(root, i)
        secret_dec = lsb.reveal(f_name)
        if secret_dec == None:
            break
        secret.append(secret_dec)

    print(''.join([i for i in secret]))