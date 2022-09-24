import React from "react";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

const decrypt = () => {
    return (
        <>
            <Navbar current="decrypt" />
            <Cards />
        </>
    );
};

export default decrypt;
