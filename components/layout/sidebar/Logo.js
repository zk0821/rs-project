/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Logo = () => {
    return (
        <Link href="/">
            <span className="inline-flex items-center justify-center h-20 w-full bg-cyan-300 hover:bg-cyan-400 focus:bg-cyan-400 cursor-pointer">
                <Image
                    src="/logo.png"
                    alt="Fitness Stickman"
                    height="50"
                    width="50"
                />
            </span>
        </Link>
    );
};

export default Logo;
