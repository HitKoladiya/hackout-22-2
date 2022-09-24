import React from "react";
import DncFrm from "./components/txt2audio/DncFrm";
import EncFrm from "./components/txt2audio/EncFrm";
import Navbar from "./components/Navbar";

const txt2audio = () => {
    return (
        <>
            <Navbar current="encrypt" />
            <div className="">
                {/* <EncFrm /> */}
                <DncFrm />
            </div>
        </>
    );
};

export default txt2audio;
