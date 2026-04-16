"use client";
import Carousel from "@/app/Carousel";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Navbar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-white">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-purple-600 text-2xl font-bold tracking-tight">
              moola
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 font-semibold">
            <a href="#" className="hover:text-purple-600 transition-colors">
              Shop
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Winter Holiday Sale
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              How it Works
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Refer &amp; Earn
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Merchant Solutions
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Desktop Download Button */}
            <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-2 rounded-full transition-colors">
              DOWNLOAD NOW
            </button>

            {/* Hamburger Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-purple-600 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-purple-600 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-purple-600 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="flex flex-col bg-white px-8 pb-4 gap-4 text-sm font-medium text-gray-700">
            <a
              href="#"
              className="hover:text-purple-600 transition-colors py-2 border-b border-gray-100"
            >
              Shop
            </a>
            <a
              href="#"
              className="hover:text-purple-600 transition-colors py-2 border-b border-gray-100"
            >
              Winter Holiday Sale
            </a>
            <a
              href="#"
              className="hover:text-purple-600 transition-colors py-2 border-b border-gray-100"
            >
              How it Works
            </a>
            <a
              href="#"
              className="hover:text-purple-600 transition-colors py-2 border-b border-gray-100"
            >
              Refer &amp; Earn
            </a>
            <a
              href="#"
              className="hover:text-purple-600 transition-colors py-2 border-b border-gray-100"
            >
              Merchant Solutions
            </a>
            <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors w-full">
              DOWNLOAD NOW
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="w-full bg-purple-600 px-8 py-4">
        <div className="flex items-center bg-white rounded-full overflow-hidden max-w-4xl mx-auto">
          <input
            type="text"
            placeholder="Search over 250 gift card brands"
            className="flex-1 px-6 py-3 text-sm text-gray-700 outline-none bg-transparent"
          />
          <button className="bg-purple-800 hover:bg-purple-900 px-5 py-3 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="rounded-lg overflow-hidden bg-white shadow-lg">
          <Carousel
            slides={["/slide4.png", "/spring.png"]}
            autoPlay={true}
            autoPlayInterval={3000}
          />
        </div>
      </div>
    </>
  );
}
