import React, { useState } from "react";

const test = () => {



    const [file, setFile] = useState();


    const handleInput = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);

    }

    const handleFile = async (e: any) => {
        let file = await e.target.files[0];
        setFile(file);
        console.log(file);
    };


    return (
        <>
            <form action="">
                <input type="text" onChange={handleInput} className="" />
                <input type="file" onChange={handleFile} name="file" id="file" />
                <input type="submit" value="Upload" />
            </form>
        </>
    );
};

export default test;
