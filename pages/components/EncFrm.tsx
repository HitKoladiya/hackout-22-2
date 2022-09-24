import React, { useState } from "react";
import axios from "axios";

const EncFrm = () => {
    const [data, setData] = useState({
        data: "",
        key: "",
    });

    const [file, setFile] = useState();

    const [fnm, setFnm] = useState("Upload File");

    const handleChange = (e: any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data);
    };

    const handleFile = async (e: any) => {
        let file = await e.target.files[0];
        setFile(file);
        setFnm(file.name);
        console.log(file);
    };

    const handleSubmit = async (event: { preventDefault: () => void }) => {
        event.preventDefault();
        const finalData = {
            data: data.data,
            key: data.key,
            file: file,
        };
        console.log(finalData);
        const options = {
            method: "POST",
            url: "http://127.0.0.1:5000/image",
            data: finalData,
        };

        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
        alert(JSON.stringify(finalData));
    };

    //

    //
    return (
        <div className="flex mb-10 pb-0 min-h-full items-center justify-center py-10 px-4 sm:px-6 lg:px-8 ">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className=" text-center text-3xl font-bold tracking-tight text-gray-100">
                        Encrypt Data
                    </h2>
                </div>
                <form className="mt-8 space-y-6">
                    <div className=" rounded-md shadow- bg-white shadow-gray-800 p-5">
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
                            <label
                                htmlFor="key"
                                className="block text-sm font-medium text-gray-700 mb-2 ml-1"
                            >
                                Encryption Key
                            </label>
                            <input
                                id="key"
                                name="key"
                                type="text"
                                required
                                onChange={handleChange}
                                placeholder="Enter your encryption key"
                                className="mb-3 relative block w-full appearance-none rounded-md rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                                Encryption image
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
