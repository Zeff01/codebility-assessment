import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Menu = [
    { name: "Shop", href: "#home" },
    { name: "Winter Holiday Sale", href: "#about" },
    { name: "How it Works", href: "#skills" },
    { name: "Refer & Earn", href: "#projects" },
    { name: "Merchant Solutions", href: "#contact" },
  ];

  return (
    <nav className="w-full bg-white flex items-center justify-between min-h-[64px] relative z-20 p-4 lg:p-6">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          src="/moola-logo.svg"
          alt="logo"
          className="h-6"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex flex-row items-center flex-1 justify-center gap-x-6 xl:gap-x-10">
        <ul className="flex flex-row items-center gap-x-6 xl:gap-x-10">
          {Menu.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-gray-700 hover:text-violet-500 transition ease-linear text-sm font-semibold hover:border-b-4 border-violet-500 pb-6 whitespace-nowrap"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Button & Currency */}
      <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
        <button className="bg-gradient-to-bl from-purple-600 to-fuchsia-500 text-white px-4 py-2 rounded-full font-medium text-xs hover:from-purple-500 hover:to-purple-700 transition whitespace-nowrap">
          DOWNLOAD NOW
        </button>
        <span className="text-gray-700 text-sm flex items-center gap-1 font-medium">
          <Icon icon="twemoji:flag-canada" className="w-5 h-5" /> CAD
        </span>
      </div>

      {/* Mobile menu button */}
      <div className="lg:hidden flex items-center z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none"
          aria-label="Toggle menu"
        >
            {isMenuOpen ? (
              <Icon icon="gridicons:cross-small" className="text-5xl text-violet-500" />
            ) : (
              <Icon icon="gridicons:menu" className="text-5xl text-violet-500" />
            )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-t border-gray-200 z-40 flex flex-col items-center py-6 lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-y-4 w-full">
          {Menu.map((item) => (
            <li key={item.name} className="w-full text-center">
              <a
                href={item.href}
                className="text-gray-700 hover:text-violet-500 block py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                  {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button className="mt-6 bg-gradient-to-bl from-purple-600 to-fuchsia-500 text-white px-5 py-2 rounded-full font-medium text-sm shadow-md w-4/5 hover:from-purple-500 hover:to-purple-700">
          DOWNLOAD NOW
        </button>
      </div>
    </nav>
  );
};

export default Navbar;