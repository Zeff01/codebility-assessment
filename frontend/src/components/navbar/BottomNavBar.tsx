import React from 'react';
import Link from 'next/link';

function BottomNavBar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/', label: 'Shop' },
    { href: '/', label: 'Winter Holiday Sale' },
    { href: '/', label: 'How it Works' },
    { href: '/', label: 'Refer & Earn' },
    { href: '/', label: 'Merchant Solutions' },
  ];
  return (
    <div className="p-5 xl:rounded bg-[#7514E3] flex-col flex justify-between items-center xl:flex-row gap-2.5 max-w-7xl mx-auto w-full">
      <nav className="hidden lg:flex gap-1 box-border text-white font-semibold text-center items-center">
        {links.map((link,index) => (
          <Link
            key={index}
            href={link.href}
            className="py-2 px-5 hover:bg-white/10 rounded transition-all duration-300 ease-in-out"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="bg-zinc-100 px-5 py-2 rounded flex flex-row gap-5 items-center w-full xl:w-auto">
        <div className="w-full xl:w-32 focus-within:xl:w-64 transition-all duration-300 ease-in-out overflow-hidden">
          <input
            type="text"
            name="search"
            id="search"
            className="appearance-none bg-transparent border-none outline-none p-0 m-0 placeholder:text-[11px] w-full placeholder:truncate"
            placeholder="Search over 250 gift card brands..."
          />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
          className="flex-shrink-0 fill-zinc-500 hover:fill-black h-7 w-auto transition-all ease-in-out duration-300"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default BottomNavBar;