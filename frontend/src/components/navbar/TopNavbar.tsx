'use client';

import Link from 'next/link';

import { useState } from 'react';

function TopNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'Shop' },
    { href: '/', label: 'Winter Holiday Sale' },
    { href: '/', label: 'How it Works' },
    { href: '/', label: 'Refer & Earn' },
    { href: '/', label: 'Merchant Solutions' },
  ];

  return (
    <header className="flex justify-between items-center relative">
      {/* Desktop top nav*/}
      <img
        src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_purple.svg"
        className="w-30 h-auto hidden lg:block"
        alt="Company logo"
      />

      <div className="hidden lg:flex gap-5  ">
        <div className="flex flex-row items-center justify-center mr-5">
          <span className="py-2 px-3 hover:bg-zinc-200">PHP</span>
          <span className="bg-zinc-200 w-[3px] rounded h-10 ml-2 mr-5"></span>
          <img
            src="https://cdn.britannica.com/73/3473-050-3A33E719/Flag-Philippines.jpg"
            alt="Country"
            className="h-10 w-10  rounded-full object-cover object-left border-1 border-zinc-200 cursor-pointer"
          />
        </div>
        <button
          className="px-5 py-2 bg-[#7514E3] text-white rounded font-bold scale-100 hover:scale-105 cursor-pointer
        transition-all ease-in-out duration-300 drop-shadow-md hover:drop-shadow-[0_4px_6px_#7514E380]"
        >
          Download now
        </button>
      </div>

      {/*mobile top nav */}
      <div className="lg:hidden flex justify-between w-full items-center">
        <img
          src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_purple.svg"
          className="w-30 h-auto block lg:hidden"
          alt="Company logo"
        />
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-2 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* mobile slide side menu*/}
      <div
        className={`fixed top-0 right-0 h-full w-fit bg-white shadow-lg z-100 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="py-2 px-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-5">
              <div className="flex flex-row items-center justify-center mr-5">
                <span className="py-2 px-3 hover:bg-zinc-200">PHP</span>
                <span className="bg-zinc-200 w-[3px] rounded h-10 ml-2 mr-5"></span>
                <img
                  src="https://cdn.britannica.com/73/3473-050-3A33E719/Flag-Philippines.jpg"
                  alt="Country"
                  className="h-10 w-10  rounded-full object-cover object-left border-1 border-zinc-200 cursor-pointer"
                />
              </div>
              <button
                className="px-5 py-2 bg-[#7514E3] text-white rounded font-bold scale-100 hover:scale-105 cursor-pointer
        transition-all ease-in-out duration-300 drop-shadow-md hover:drop-shadow-[0_4px_6px_#7514E380] w-full"
              >
                Download now
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Black bg mobile*/}

      <div
        className={`fixed inset-0 z-10 lg:hidden transition-opacity duration-300 ease-in-out bg-black ${
          isMenuOpen
            ? 'pointer-events-auto opacity-80'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </header>
  );
}

export default TopNavBar;
