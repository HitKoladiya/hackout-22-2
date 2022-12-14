import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

const Home: NextPage = () => {
    return (
        <>
            <Navbar current="/" />
            <div className="m-auto">
                <Cards />
            </div>
        </>
    );
};

export default Home;
