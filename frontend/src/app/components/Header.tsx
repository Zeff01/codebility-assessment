"use client";
import React from "react";

const Header = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold text-blue-500 cursor-pointer" onClick={() => handleScroll("hero")}>
          Moola Clone
        </div>
        <ul className="flex gap-6">
          <li className="cursor-pointer hover:text-blue-500 transition" onClick={() => handleScroll("features")}>
            Features
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition" onClick={() => handleScroll("contact")}>
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
