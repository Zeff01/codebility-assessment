"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

const Nav = () => {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <header className="w-full bg-[#28282b] text-[#f9f6ee]">
      <nav className="main-container flex justify-between items-center py-2">
        <h1 className="logo font-bold">Nextjs Blog</h1>

        <ul
          className={`absolute transition-[top] duration-300 ease-in-out bg-[#f9f6ee] text-[#28282b] block w-full border-b-8 border-black md:border-0  ${
            isShow ? "top-0" : "top-[-100%]"
          } left-0 md:w-auto md:bg-transparent md:text-[#f9f6ee] md:static md:flex gap-5`}
        >
          <IoIosClose
            onClick={handleClose}
            className="text-5xl ml-auto block md:hidden"
          />
          <li
            onClick={handleClose}
            className="text-center text-2xl py-4 md:py-0"
          >
            <Link href="/">Home</Link>
          </li>
          <li
            onClick={handleClose}
            className="text-center text-2xl py-4 md:py-0"
          >
            <Link href="/create">Create</Link>
          </li>
        </ul>

        <IoMenu
          onClick={handleShow}
          className="text-3xl cursor-pointer block md:hidden"
        />
      </nav>
    </header>
  );
};

export default Nav;
