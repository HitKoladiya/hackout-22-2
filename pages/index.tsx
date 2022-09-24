import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import EncFrm from "./components/EncFrm";
import DncFrm from "./components/DncFrm";
import Navbar from "./components/Navbar";

const Home: NextPage = () => {
    return (
        <>
            <Navbar current="/" />
        </>
    );
};

export default Home;
