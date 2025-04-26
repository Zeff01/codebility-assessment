"use client";

import { useEffect, useState } from "react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-orange-500">
              Bite<span className="text-teal-500">Rush</span>
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#menu"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Menu
            </a>
            <a
              href="#locations"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Locations
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
            >
              Contact
            </a>
            <Button variant="primary" size="sm">
              Order Now
            </Button>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-500 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4">
          <Container>
            <nav className="flex flex-col space-y-4">
              <a
                href="#menu"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#locations"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Locations
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button variant="primary" size="sm" className="w-full">
                Order Now
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
