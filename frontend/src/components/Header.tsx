"use client";

import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    'Shop',
    'Winter Holiday Sale',
    'How it Works',
    'Refer & Earn',
    'Merchant Solutions'
  ];

  return (
    <header className="relative z-50">
      <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 bg-white/95 backdrop-blur-sm border-b border-purple-800/20">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right side actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="bg-purple-800 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-900 transition-colors duration-200">
            DOWNLOAD NOW
          </button>
          <div className="flex items-center text-gray-700">
            <Image
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 480'%3E%3Cpath fill='%23ff0000' d='M0 0h640v240H0z'/%3E%3Cpath fill='%23fff' d='M0 240h640v240H0z'/%3E%3Cpath fill='%23ff0000' d='M200 200l40 40 40-40v80l-40 40-40-40z'/%3E%3C/svg%3E"
              alt="Canada Flag"
              width={20}
              height={16}
              className="mr-2"
            />
            CAD
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 p-2"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <MobileMenu isOpen={isMenuOpen} navItems={navItems} />
    </header>
  );
}