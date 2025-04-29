"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  setMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setMenuOpen }) => {
  const [localMenuOpen, setLocalMenuOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !localMenuOpen;
    setLocalMenuOpen(newState);
    setMenuOpen(newState);
  };

  return (
    <header className="w-full bg-white shadow-md relative z-30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-20">
        
        {/* Left: Logo */}
        <div className="flex items-center space-x-4 mr-7">
          <img
            src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_purple.svg"
            alt="Logo"
            className="h-7 w-auto md:h-8"
          />
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6">
          {["Shop", "Winter Holiday Sale", "How it Works", "Refer & Earn", "Merchant Solutions"].map((item) => (
            <a
              key={item}
              href="#"
              className="block py-2 px-3 text-[14px] font-medium text-gray-700 hover:text-gray-500"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right: Download Now Button + PHIL Flag (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            className="text-white text-[10px] rounded-full px-[20px] py-[10px]"
            style={{
              background: 'linear-gradient(91deg, #c701fc, #750dea)',
              fontFamily: 'Poppins',
            }}
          >
            DOWNLOAD NOW
          </button>

          <div className="flex items-center space-x-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
              alt="Canada Flag"
              className="h-4 w-auto"
            />
            <span className="text-gray-700 text-xs">CAD</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button type="button" onClick={toggleMenu}>
            <FontAwesomeIcon icon={localMenuOpen ? faTimes : faBars} className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {localMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-6 md:hidden">
          <nav className="flex flex-col items-center space-y-2">
            {["Shop", "Winter Holiday Sale", "How it Works", "Refer & Earn", "Merchant Solutions"].map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 px-4 text-[15px] font-medium text-gray-700 hover:text-gray-500"
              >
                {item}
              </a>
            ))}
          </nav>

          <button
            className="text-white text-[10px] rounded-full px-[20px] py-[10px]"
            style={{
              background: 'linear-gradient(91deg, #c701fc, #750dea)',
              fontFamily: 'Poppins',
            }}
          >
            DOWNLOAD NOW
          </button>

          <div className="flex items-center space-x-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg"
              alt="Canada Flag"
              className="h-4 w-auto"
            />
            <span className="text-gray-700 text-xs">CAD</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
