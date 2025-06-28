'use client';

import { useState } from "react";
import Link from "next/link";
import Button from "./button";
import Hamburger from "./hamburger";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    const navLinks = [
        { label: "Shop", path: "/" },
        { label: "Winter Holiday Sale", path: "/" },
        { label: "How It Works", path: "/" },
        { label: "Refer & Earn", path: "/" },
        { label: "Merchant Solutions", path: "/" },
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="sticky top-0 left-0 z-50 w-full bg-white shadow-sm">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <h1 className="text-xl font-bold text-primary">Moola</h1>

                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-6 text-sm font-medium">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.path} className="hover:text-purple-600 transition">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="hidden lg:block">
                    <Button variant="gradient">Download Now</Button>
                </div>

                <Hamburger isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
            </div>

            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <nav className="bg-white/95 backdrop-blur-lg border-t border-white/20">
                    <ul className="flex flex-col py-4">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link 
                                    href={link.path} 
                                    className="block px-6 py-3 text-sm font-medium hover:bg-purple-50 hover:text-purple-600 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="px-6 py-3">
                            <Button variant="gradient" className="w-full">
                                Download Now
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
