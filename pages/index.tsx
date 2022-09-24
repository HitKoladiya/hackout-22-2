import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import EncFrm from "./components/txt2img/EncFrm";
import DncFrm from "./components/txt2img/DncFrm";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

const Home: NextPage = () => {
    return (
        <>
            <Navbar current="/" />
            <Cards />
        </>
    );
};

export default Home;
