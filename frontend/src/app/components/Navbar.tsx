"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../../public/images/logo.svg";
import canada from "../../../public/images/canada.svg";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./NavLink";
import { navbarItems } from "../data/data_NavLink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full max-w-7xl mx-auto py-3 sm:py-5 px-3 sm:px-5">
      {/* mobile */}
      <div className="lg:hidden px-2 sm:px-4 flex justify-between items-center">
        <Image
          src={logo}
          alt="logo"
          priority
          width={120}
          height={40}
          className="w-[100px] sm:w-[120px] h-auto"
        />
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <Image
              src={canada}
              alt="canada"
              width={20}
              height={20}
              priority
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <p className="font-semibold text-sm sm:text-base">CAD</p>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2 transition-all duration-300 ease-in-out focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <span className="text-xl sm:text-2xl text-[#7514e3] transition-all duration-300 transform rotate-0">
                X
              </span>
            ) : (
              <GiHamburgerMenu
                size={24}
                className="text-[#7514e3] transition-all duration-300 transform rotate-0"
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile NavLink */}
      <div
        className={`
          flex flex-col space-y-3 mt-4 px-4 lg:hidden
          transition-all duration-300 ease-in-out
          origin-top
          ${
            isOpen
              ? "opacity-100 max-h-[500px] transform scale-y-100"
              : "opacity-0 max-h-0 transform scale-y-0 overflow-hidden"
          }
        `}
      >
        <NavLink navbarItems={navbarItems} />
        <button className="w-[140px] sm:w-[150px] text-xs sm:text-sm uppercase text-white bg-[#7514e3] py-1.5 sm:py-2 rounded-full hover:bg-[#7514e3b2] transition duration-300 mt-2">
          Download Now
        </button>
      </div>

      {/* desktop */}
      <div className="hidden lg:flex justify-between items-center">
        <Image
          src={logo}
          alt="logo"
          priority
          width={120}
          height={40}
          className="w-[120px] h-auto"
        />
        {/* NavLink */}
        <div className="flex gap-6 xl:gap-9 capitalize items-center">
          <NavLink navbarItems={navbarItems} />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src={canada} alt="canada" width={20} height={20} priority />
            <p className="font-semibold">CAD</p>
          </div>
          <button className="w-[150px] text-xs sm:text-sm uppercase text-white bg-[#7514e3] py-2 rounded-full hover:bg-opacity-90 transition duration-300">
            Download Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
