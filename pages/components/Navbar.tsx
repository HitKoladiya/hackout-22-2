/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const Navbar = (props: { current: string }) => {
    return (
        <Disclosure as="nav" className="bg-black">
            <>
                <div className="mx-auto max-w-7xl px-2 h-16 sm:px-6 lg:px-8 relative flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                    <Link href="/">
                        <div className="flex text-center flex-shrink-0 items-center text-white text-2xl font-bold cursor-pointer">
                            Security
                        </div>
                    </Link>
                </div>
            </>
        </Disclosure>
    );
};

export default Navbar;
