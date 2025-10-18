"use client";

import { menuLinks } from "../../app/client";
import canada_flag from "../../../public/canada_flag.png";
import menu from "../../../public/menu.png";
import close from "../../../public/close.png";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 md:px-20 lg:px-40 xl:px-60 py-5 sticky top-0 bg-primary z-50">
      <nav className="flex items-center justify-between w-full text-gray">
        <div>
          <Link
            href="/"
            className="font-bold uppercase h-20 text-2xl max-sm:left-0"
          >
            moola.
          </Link>
        </div>

        <div
          className={`flex max-sm:bg-primary max-sm:text-lg z-50 max-sm:h-screen max-sm:w-full max-sm:border-t max-sm:px-10 max-sm:py-4 max-sm:border-gray items-start sm:flex-row text-md font-normal md:items-center gap-5 right-0 max-sm:top-16 max-sm:fixed flex-col  
          hover:cursor-pointer transition-all duration-500
           ${isOpen ? "max-sm:translate-x-0" : "max-sm:translate-x-full"}
          `}
        >
          <ul className="flex max-sm:flex-col gap-5">
            {menuLinks.map((menu) => (
              <li key={menu.id} className="relative flex group">
                <Link
                  href={menu.href}
                  className="  transition-all duration-500"
                >
                  {menu.name}
                </Link>
                <span className="h-1 w-10 invisible bottom-0   group-hover:visible bg-gradient-to-r from-secondary to-primary rounded-md absolute transition-all duration-400"></span>
              </li>
            ))}
          </ul>

          <button className="text-sm text-white px-5 py-2 uppercase  bg-gradient-to-r from-purple-400 to-purple-900 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-950 shadow-md shadow-purple-800  hover:cursor-pointer  rounded-full transition-all duration-500">
            Download Now
          </button>
        </div>

        <div className="flex gap-2">
          <div className="flex flex-row items-center justify-between gap-2">
            <Image src={canada_flag} alt="canada flag" className="h-8 w-8" />
            <p className="font-semibold uppercase">cad</p>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden h-10 w-10"
          >
            {isOpen ? (
              <Image src={close} alt="close icon" />
            ) : (
              <Image src={menu} alt="menu icon" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
