"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
    onMenuToggle?: (open: boolean) => void;
}

export default function Navbar({ onMenuToggle }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        "Shop",
        "Winter Holiday Sale",
        "How It Works",
        "Refer & Earn",
        "Merchant Solutions",
    ];

    const handleToggle = () => {
        setIsOpen(!isOpen);
        onMenuToggle?.(!isOpen); // Notify parent
    };

    return (
        <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

                {/* LEFT SECTION - LOGO */}
                <div className="flex items-center">
                    <img
                        src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_purple.svg"
                        alt="Moola Logo"
                        className="h-6 sm:h-7 w-auto"
                    />
                </div>

                {/* CENTER NAV LINKS */}
                <div className="hidden md:flex items-center space-x-8 text-gray-500 font-medium text-sm ml-15">
                    {navLinks.map((item) => (
                        <a key={item} href="#" className="relative group">
                            <span className="hover:text-black transition">{item}</span>
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>

                {/* RIGHT SECTION */}
                <div className="flex items-center space-x-3">
                    <button className="hidden md:inline-block bg-gradient-to-r from-purple-400 to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-500 hover:to-purple-800 transition-all duration-300">
                        Download Now
                    </button>

                    <div className="flex items-center space-x-1">
                        <img
                            src="https://flagemoji.com/wp-content/uploads/2020/02/Flag_of_the_Philippines.svg"
                            alt="PH Flag"
                            className="h-3 sm:h-4 w-auto rounded-sm"
                        />
                        <span className="text-xs sm:text-sm font-medium text-gray-700">
                            PH | Phi
                        </span>
                    </div>

                    <button className="md:hidden ml-2" onClick={handleToggle}>
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col space-y-2 px-4 py-3">
                        {navLinks.map((item) => (
                            <a key={item} href="#" className="text-gray-700 font-medium py-2 border-b border-gray-200">
                                {item}
                            </a>
                        ))}
                        <button className="bg-gradient-to-r from-purple-400 to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-purple-500 hover:to-purple-800 transition-all duration-300 mt-2">
                            Download Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
