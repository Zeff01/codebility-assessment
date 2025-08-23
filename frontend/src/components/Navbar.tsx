"use client";
import Image from "next/image";
import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

   useEffect(() => {
    const handleScroll = () => {
      const sections = ["shop", "winter", "works", "refer", "merchant"];
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 80 && top + el.offsetHeight > 80) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/images/logo.svg"
            alt="Moola Logo"
            width={120}
            height={120}
            priority
          />         
        </div>

       {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 font-medium text-gray-600">
          {["shop", "winter", "works", "refer", "merchant"].map((section, idx) => (
            <li key={idx}>
            <a
            href={`#${section}`}
            className={`hover:text-black border-b-4 pb-3 ${
              activeSection === section ? "border-violet-700" : "border-transparent"
            }`}
          >
            {section === "shop"
              ? "Shop"
              : section === "winter"
              ? "Winter Holiday Sale"
              : section === "works"
              ? "How it Works"
              : section === "refer"
              ? "Refer & Earn"
              : "Merchant Solutions"}
          </a>

            </li>
          ))}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">     
          <a
            href="#"
            className="bg-gradient-to-r from-[#BB03FA] to-[#7C0CEC] 
                      text-white px-4 py-2 rounded-full 
                      text-xs font-medium shadow-md 
                      hover:from-[#A102E0] hover:to-[#690ABA] 
                      transition duration-300"
          >
            DOWNLOAD NOW
          </a>

          <div className="flex items-center space-x-2">
            <Image src="/images/cad.svg" alt="Canada" width={24} height={24} />
            <span>CAD</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-8 h-8 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            initial={false}
            animate={isOpen ? { rotate: 45, y: 0, backgroundColor: "#7c3aed" } : { rotate: 0, y: -8, backgroundColor: "#374151" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block absolute h-0.5 w-6 rounded"
          />
          <motion.span
            initial={false}
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="block absolute h-0.5 w-6 bg-gray-700 rounded"
          />
          <motion.span
            initial={false}
            animate={isOpen ? { rotate: -45, y: 0, backgroundColor: "#7c3aed" } : { rotate: 0, y: 8, backgroundColor: "#374151" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="block absolute h-0.5 w-6 rounded"
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
           className="md:hidden bg-white overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 px-6 py-4 text-gray-700">
              <li><a href="#" className="hover:text-black">Shop</a></li>
              <li><a href="#" className="hover:text-black">Winter Holiday Sale</a></li>
              <li><a href="#" className="hover:text-black">How it Works</a></li>
              <li><a href="#" className="hover:text-black">Refer & Earn</a></li>
              <li><a href="#" className="hover:text-black">Merchant Solutions</a></li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-[#BB03FA] to-[#7C0CEC] 
                            text-white px-4 py-2 rounded-full 
                            text-xs font-medium shadow-md 
                            hover:from-[#A102E0] hover:to-[#690ABA] 
                            transition duration-300"
                >
                  DOWNLOAD NOW
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Image src="/images/cad.svg" alt="Canada" width={24} height={24} />
                <span>CAD</span>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
