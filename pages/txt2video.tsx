import React from "react";
import DncFrm from "./components/txt2video/DncFrm";
import EncFrm from "./components/txt2video/EncFrm";
import Navbar from "./components/Navbar";

const txt2video = () => {
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

export default txt2video;
