import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Shop", path: "#" },
    { name: "Winter Holiday Sale", path: "#" },
    { name: "How It Works", path: "#" },
    { name: "Refer & Earn", path: "/#" },
    { name: "Merchant Solutions", path: "/#" },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <Link to="/" className="shrink-0">
            <img
              src="https://play-lh.googleusercontent.com/3I4ZtU7VwhEXYR5eValWkMFxU9lB-e_GojqEZ2I0EFyA6zxM6LonphV43TFOUjB6mUU"
              alt="Moola"
              className="h-7 md:h-8 w-auto"
            />
          </Link>

          <div className="hidden xl:flex items-center space-x-8 text-[13px] font-semibold text-gray-500 h-full">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition-colors duration-200 hover:text-purple-600 ${
                  isActive(link.path) ? "text-purple-600" : ""
                }`}
              >
                {link.name}

                {isActive(link.path) && (
                  <span className="absolute -bottom-[21px] left-0 w-full h-[3px] bg-purple-600" />
                )}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-3 md:space-x-6">
          <button className="hidden sm:block bg-[#a329f5] hover:bg-[#8e21d6] text-white px-7 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition">
            Download Now
          </button>

          <div className="flex items-center space-x-1.5 text-[12px] font-bold text-gray-800 border-l pl-4 border-gray-200">
            <img
              src="https://flagcdn.com/w20/ca.png"
              alt="CA"
              className="w-4 h-auto"
            />
            <span>CAD</span>
          </div>

          <button className="xl:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-semibold ${
                isActive(link.path) ? "text-purple-600" : "text-gray-600"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
