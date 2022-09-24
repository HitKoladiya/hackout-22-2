import React from "react";
import DncFrm from "./components/img2img/DncFrm";
import EncFrm from "./components/img2img/EncFrm";
import Navbar from "./components/Navbar";

const img2img = () => {
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

export default img2img;
