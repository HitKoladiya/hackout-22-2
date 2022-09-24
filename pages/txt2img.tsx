import React from "react";
import DncFrm from "./components/txt2img/DncFrm";
import EncFrm from "./components/txt2img/EncFrm";
import Navbar from "./components/Navbar";

const txt2img = () => {
    return (
        <>
            <Navbar current="encrypt" />
            <div className="">
                <EncFrm />
                <DncFrm />
            </div>
        </>
    );
};

export default txt2img;
