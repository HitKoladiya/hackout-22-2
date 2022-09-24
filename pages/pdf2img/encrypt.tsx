import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const EncFrm = () => {
    const [frmd, setFrmd] = useState({});

    const [fnm, setFnm] = useState("Upload File");
    const [fnmm, setFnmm] = useState("Upload File");

    const sendFileToIPFS = async (img: any) => {
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

                return await `ipfs://${resFile.data.IpfsHash}`;

                //Take a look at your Pinata Pinned section, you will see a new file added to you list.
            } catch (error) {
                console.log("Error sending File to IPFS: ");
                console.log(error);
            }
        }
    };

    const handleFile = async (e: any) => {
        const file = e.target.files[0];
        const name = e.target.name;

        setFrmd({ ...frmd, [name]: file });

        if (name === "file-upload1") {
            setFnm(file.name);
        } else if (name === "file-upload2") {
            setFnmm(file.name);
        }

        console.log(frmd);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const v1 = sendFileToIPFS("file-upload1");
        const v2 = sendFileToIPFS("file-upload2");

        console.log(v1, v2);

        console.log(frmd);
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
                                            htmlFor="file-upload1"
                                            className="relative cursor-pointer rounded-md bg-white font-medium text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 hover:text-gray-700"
                                        >
                                            <span>{fnm}</span>
                                            <input
                                                id="file-upload1"
                                                name="file-upload1"
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
                            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                                Pdf
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
                                            htmlFor="file-upload2"
                                            className="relative cursor-pointer rounded-md bg-white font-medium text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-700 focus-within:ring-offset-2 hover:text-gray-700"
                                        >
                                            <span>{fnmm}</span>
                                            <input
                                                id="file-upload2"
                                                name="file-upload2"
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
