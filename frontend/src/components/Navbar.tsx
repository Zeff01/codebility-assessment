"use client";

import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-xl font-semibold text-gray-900 hover:text-cyan-600 transition-colors duration-200"
            >
              Brand
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
              >
                About
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button className="bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-cyan-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
              Download Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-cyan-600 focus:outline-none focus:text-cyan-600 transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#features"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="w-full bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-cyan-700 hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
