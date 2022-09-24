import React from "react";
import EncFrm from "./components/EncFrm";
import Navbar from "./components/Navbar";

const encrypt = () => {
    return (
        <>
            <Navbar current="encrypt" />
            <EncFrm />
        </>
    );
};

export default encrypt;
