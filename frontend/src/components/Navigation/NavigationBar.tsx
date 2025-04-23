"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DropdownNav from "./DropdownNav";
import SearchInput from "../SearchInput";

const navLinks = [
  { href: "#shop", label: "Shop" },
  { href: "#sale", label: "Winter Holiday Sale" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#refer-earn", label: "Refer & Earn" },
  { href: "#merchant-solutions", label: "Merchant Solutions" },
];

const NavigationBar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <nav className="bg-white shadow-md py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="producto.png" alt="Logo" className="h-6" />
            <span className="text-black text-xl font-bold">PRODUCTO</span>
          </div>
          <ul className="hidden lg:flex space-x-6 text-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gray-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4 ">
            <div className="hidden lg:flex items-center space-x-4 ">
              <button className="bg-gradient-to-r from-gray-950 to-gray-700 text-white py-2 px-4 rounded-full hover:opacity-90">
                DOWNLOAD NOW
              </button>
            </div>
            <div className="text-gray-700 flex items-center space-x-2">
              <img src="philippines.png" alt="flag" className="w-6 h-auto" />
              <span>PHL</span>
            </div>

            <button
              className="lg:hidden text-gray-700 focus:outline-none"
              onClick={toggleDropdown}
            >
              {isDropdownOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <DropdownNav navLinks={navLinks} isOpen={isDropdownOpen} />
      </nav>
      <div className="bg-gray-900 py-6">
        <SearchInput />
      </div>
    </>
  );
};

export default NavigationBar;