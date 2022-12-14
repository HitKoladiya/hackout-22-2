import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const EncFrm = () => {
    const MySwal = withReactContent(Swal);

    const [data, setData] = useState({
        data: "",
        image: "",
    });

    const [img, setImg] = useState("");

    const sendFileToIPFS = async (e: any) => {
        console.log("file");

        if (img) {
            try {
                const formData = new FormData();
                await formData.append("file", img);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        pinata_api_key: `f07278d2821266c978fe`,
                        pinata_secret_api_key: `350ac748c968d726208495d0ab1cf85264856db12cae91e23b4471c166b146a0`,
                        "Content-Type": "multipart/form-data",
                    },
                });

                const ImgHash = await `ipfs://${resFile.data.IpfsHash}`;
                await setData({ ...data, image: ImgHash });
                console.log(ImgHash);
                await setImg(ImgHash);
                console.log("img");

                console.log(data);

                //Take a look at your Pinata Pinned section, you will see a new file added to you list.
            } catch (error) {
                console.log("Error sending File to IPFS: ");
                console.log(error);
            }
        }
    };

    const [fnm, setFnm] = useState("Upload File");

    const handleChange = (e: { target: { name: any; value: any } }) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        sendFileToIPFS(img);
        console.log(data);
    };

    const handleFile = async (e: any) => {
        let file = await e.target.files[0];
        setFnm(file.name);
        console.log(img);
        await setImg(file);
        console.log(data);
        await sendFileToIPFS(file);
        setData({ ...data, image: img });
    };

    const handleAxios = async (data: any) => {
        const options = {
            method: "POST",
            url: "http://127.0.0.1:5000/image_encode",
            data: {
                data: data.data,
                image: img,
            },
        };

        axios
            .request(options)
            .then(async (response) => {
                console.log(response.data);
                MySwal.close();

                MySwal.fire({
                    title: "Message encrypted and uploaded to IPFS",
                    text: `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`,
                    icon: "success",
                    confirmButtonText: "Ok",
                });
                window.location.assign(`https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`);
            })
            .catch(function (error) {
                console.error(error);
                MySwal.close();
                MySwal.fire({
                    title: "Error",
                    text: error,
                    icon: "error",
                    confirmButtonText: "Ok",
                });
            });

        console.log(data);
    };

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        setData({
            ...data,
        });
        setImg(img);
        MySwal.fire({
            title: "Encrypting...",
            text: "Please wait...",
            allowOutsideClick: false,
            didOpen: () => {
                MySwal.showLoading();
            },
        });

        handleAxios(data);
        sendFileToIPFS(event);
        console.log(data);
        
    };

    return (
        <div className="flex mb-10 pb-0 min-h-full items-center justify-center py-10 px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-100">
                        Encrypt Data txt2img
                    </h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className=" rounded-md shadow- bg-white shadow-gray-800 p-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                                Image
                            </label>
                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-medium text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 hover:text-gray-700"
                                        >
                                            <span>{fnm}</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                onChange={handleFile}
                                                className="sr-only"
                                            />
                                        </label>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        PNG & JPG
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-2 ml-1"
                            >
                                Data
                            </label>
                            <textarea
                                id="data"
                                name="data"
                                rows={5}
                                required
                                onChange={handleChange}
                                placeholder="Enter data you want to encrypt"
                                className="mb-3 relative block w-full appearance-none rounded-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="mt-10 group relative flex w-full justify-center rounded-md border shadow-md shadow-gray-300 border-transparent bg-black py-2 px-4 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                            >
                                Encrypt data
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EncFrm;
