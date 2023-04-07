import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import propTypes from "prop-types";

import Logo from "public/images/logo.svg";

export default function Header({ onLigth }) {
    const linkColor = onLigth ? "text-gray-900" : "text-white";

    const router = useRouter();
    const linkCTA = router.pathname.indexOf("/login") > -1 ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register` : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
    const textCTA = router.pathname.indexOf("/login") > -1 ? 'Daftar' : 'Masuk';



    return (
        <header className="flex justify-between items-center">
            <div style={{ height: 54 }}>
                <Logo className="on-dark"></Logo>
            </div>
            <ul className="flex">
                <li>
                    <Link href="/">
                        <button className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3"].join(" ")}>
                            Home
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <button className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3"].join(" ")}>
                            Pricing
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <button className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3"].join(" ")}>
                            Features
                        </button>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <button className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3"].join(" ")}>
                            Story
                        </button>
                    </Link>
                </li>
                <li>
                    <Link target="_blank" rel="noopener noereferrer" href={linkCTA} className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 
                    text-white hover:text-teal-500 text-lg px-6 py-3 ml-6">
                        <button className={[linkColor, "text-white hover:text-teal-500 text-lg px-6 py-3"].join(" ")}>
                            {textCTA}
                        </button>
                    </Link>
                </li>
            </ul>
        </header>
    );
}

Header.propTypes = {
    onLight: propTypes.bool,
};
