import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

import { useRouter } from 'next/router';

import Link from "next/link";

import Logo from "public/images/logo.svg";
import DefaultAvatar from "public/images/default-avatar.svg";

export default function Header({ onLigth }) {
    const [User, setUser] = useState(() => null);

    const [ToggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        const userCookies = decodeURIComponent(window.document.cookie)?.split(";")?.find?.(item => item.indexOf("BWAMICRO:user") > -1)?.split("=")[1] ?? null;
        setUser(userCookies ? JSON.parse(userCookies) : null);
        console.log(userCookies);
    }, [])


    const linkColor = onLigth ? "text-gray-900" : "text-white";

    const router = useRouter();
    const linkCTA = router.pathname.indexOf("/login") > -1 ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/register` : `${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/login`;
    const textCTA = router.pathname.indexOf("/login") > -1 ? "Daftar" : "Masuk";

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
                <li className="mt-8 md:mt-0">
                    {User ? (
                        <a
                            target="_blank"
                            rel="noopener noereferrer"
                            href={linkCTA}
                            className="hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6 inline-flex items-center"
                        >
                            <span className="rounded-full overflow-hidden mr-3 border-2 border-orange-500">
                                {User?.thumbnail ? (
                                    <img
                                        src={User?.thumbnail}
                                        alt={User?.name ?? "Username"}
                                        className="object-cover w-8 h-8 inline-block"
                                    />
                                ) : (
                                    <DefaultAvatar className="fill-indigo-500 w-8 h-8 inline-block"></DefaultAvatar>
                                )}
                            </span>
                            Hi, {User.name}
                        </a>
                    ) : (
                        <a
                            target="_blank"
                            rel="noopener noereferrer"
                            href={linkCTA}
                            className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal-500 text-lg px-6 py-3 font-medium ml-6"
                        >
                            {textCTA}
                        </a>
                    )}
                </li>
            </ul>
        </header>
    );
}

Header.propTypes = {
    onLight: propTypes.bool,
};
