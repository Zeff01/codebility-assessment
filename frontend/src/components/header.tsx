"use client";

import Link from "next/link";

import { useState } from "react";

import {
    Menu as MenuIcon,
    Search as SearchIcon,
    X as XIcon,
} from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="px-3 md:px-8 lg:px-0 py-4 flex flex-col">
                <ul className="flex items-center justify-between lg:justify-around w-full">
                    <li>
                        <img
                            src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_purple.svg"
                            alt="logo"
                            className="w-30 h-auto"
                        />
                    </li>

                    <li className="hidden lg:flex">
                        <ul className="flex font-semibold text-xs text-[#595959] gap-4 xl:gap-15 xl:text-sm">
                            <li>
                                <Link href={"/shop"}>
                                    <span>Shop</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/winter-holiday-gift-sale-2024"}>
                                    <span>Winter Holiday Sale</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"https://content.moola.com/"}
                                    target="_blank"
                                >
                                    <span>How it Works</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        "https://content.moola.com/moola-referral-program/"
                                    }
                                >
                                    <span>Refer & Earn</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={"https://content.moola.com/partners/"}
                                >
                                    <span>Merchant Solutions</span>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li className="hidden lg:flex text-xs">
                        <button className="cursor-pointer px-6 py-3 rounded-full text-white font-normal bg-gradient-to-r from-[#bf02fa] to-[#780ceb]">
                            DOWNLOAD NOW
                        </button>
                    </li>

                    <li className="flex items-center gap-2 pr-5 lg:hidden">
                        <div className="flex items-center gap-1.5">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/1600px-Flag_of_the_Philippines.svg.png?20240817131847"
                                alt="philippine-flag"
                                className="w-6 h-auto"
                            />
                            <span className="font-semibold text-xs tracking-wider">
                                PHP
                            </span>
                        </div>

                        <button onClick={() => setMenuOpen((open) => !open)}>
                            {menuOpen ? (
                                <XIcon className="text-[#750dea]" size={30} />
                            ) : (
                                <MenuIcon
                                    className="text-[#750dea]"
                                    size={30}
                                />
                            )}
                        </button>
                    </li>
                </ul>

                {/* MOBILE DROPDOWN MENU */}
                <div
                    className={`${
                        menuOpen ? "max-h-96" : "max-h-0"
                    } lg:hidden overflow-hidden transition-[max-height] duration-550 ease-in-out`}
                >
                    <div className="rounded-b-md">
                        <ul className="pt-7 flex flex-col gap-9 font-semibold text-xs text-[#595959]">
                            <li>
                                <Link href={"/shop"}>
                                    <span>Shop</span>
                                </Link>
                            </li>
                            <li>
                                <Link href={"/winter-holiday-gift-sale-2024"}>
                                    <span>Winter Holiday Sale</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={"https://content.moola.com/"}
                                    target="_blank"
                                >
                                    <span>How it Works</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={
                                        "https://content.moola.com/moola-referral-program/"
                                    }
                                >
                                    <span>Refer & Earn</span>
                                </Link>
                            </li>
                            <li className="flex flex-col gap-6 items-start">
                                <Link
                                    href={"https://content.moola.com/partners/"}
                                >
                                    <span>Merchant Solutions</span>
                                </Link>

                                <button className="px-6 py-3 rounded-full bg-purple-500 text-white font-normal bg-gradient-to-r from-[#bf02fa] to-[#780ceb]">
                                    DOWNLOAD NOW
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section className="bg-[#7514e3] flex items-center justify-center py-5 px-4 lg:px-25">
                <div className="bg-white rounded-full flex w-full">
                    <input
                        type="text"
                        placeholder="Search over 250 gift card brands"
                        className="py-2 px-2.5 font-roboto text-normal grow placeholder:pl-6 focus:outline-none"
                    />
                    <button className="bg-[#4c0d94] text-white rounded-tr-full rounded-br-full px-7">
                        <SearchIcon />
                    </button>
                </div>
            </section>
        </>
    );
}
