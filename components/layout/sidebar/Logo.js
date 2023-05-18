/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import React from "react";

const Logo = () => {
    return (
        <Link href="/">
            <span className="inline-flex items-center justify-center h-20 w-full bg-cyan-300 hover:bg-cyan-400 focus:bg-cyan-400 cursor-pointer">
                <img src="logo.png" width="50"></img>
            </span>
        </Link>
    );
};

export default Logo;
