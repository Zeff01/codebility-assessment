"use client"

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-[63px] bg-[#ffffff] lg:h-[75px] px-4 sm:px-8 md:px-12 lg:px-[66px] 2xl:px-[200px]">
      <div className="h-full flex items-center justify-between">
        {/* Brand Section */}
        <Link href="/">
          <Image
            alt="Logo"
            width={120}
            height={28}
            src="/moolaLogo.svg"/>
        </Link>

        <nav className="hidden lg:flex 2xl:space-x-10">
          {[
            { href: '#Shop', label: 'Shop' },
            { href: '#Winter Holiday Sale', label: 'Winter Holiday Sale' },
            { href: '#How it Works', label: 'How it Works' },
            { href: '#Refer & Earn', label: 'Refer & Earn' },
            { href: '/partners', label: 'Merchant Solutions' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-gray-700 p-2 text-xs xl:text-sm font-medium 
                          transition-all duration-300
                          hover:text-purple-600
                          after:absolute after:left-0 after:bottom-0
                          after:h-[2px] after:w-0 after:bg-purple-600 
                          hover:after:w-full
                          ${item.label === 'Merchant Solutions' ? 'animate-pulse text-purple-800' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Download Button */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-6">
            <a
              href="/download"
              className="bg-[linear-gradient(91deg,#c701fc,#750dea)] text-[11px] leading-[1.3em] tracking-[0.2px] text-white fill-white border border-white rounded-full px-[25px] py-[12px]">
              DOWNLOAD NOW
            </a>
            <div className="flex gap-2">
              <Image
                width={32}
                height={24}
                alt="Philippines"
                src="/Flag_of_the_Philippines.svg.webp"
                />
                <p className="text-black font-semibold text-sm">PHI</p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#4c0d94] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute top-[63px] left-0 w-full z-999 lg:hidden bg-white shadow-md border-t overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
        <nav className="flex flex-col px-6 py-4 space-y-4 divide-y divide-gray-100">
          {[
            { href: '#Shop', label: 'Shop' },
            { href: '#Winter Holiday Sale', label: 'Winter Holiday Sale' },
            { href: '#How it Works', label: 'How it Works' },
            { href: '#Refer & Earn', label: 'Refer & Earn' },
            { href: '/partners', label: 'Merchant Solutions' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-[#4c0d94] text-center font-medium hover:font-semibold"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex items-center justify-center gap-6">
            <a
              href="/download"
              className="bg-[linear-gradient(91deg,#c701fc,#750dea)] text-[11px] leading-[1.3em] tracking-[0.2px] text-white fill-white border border-white rounded-full px-[25px] py-[12px]"
            >
              DOWNLOAD NOW
            </a>
            <div className="flex gap-2">
              <Image
                width={32}
                height={24}
                alt="Philippines"
                src="/Flag_of_the_Philippines.svg.webp"
              />
              <p className="text-black font-semibold text-sm">PHI</p>
            </div>
          </div>
        </nav>
        </div>
      )}
    </header>
  );
}
