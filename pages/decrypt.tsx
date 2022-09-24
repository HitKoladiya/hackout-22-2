import React from "react";
import Navbar from "./components/Navbar";
import DncFrm from "./components/DncFrm";

const decrypt = () => {
    return (
        <>
            <Navbar current="decrypt" />
            <DncFrm />
        </>
    );
};

export default decrypt;
