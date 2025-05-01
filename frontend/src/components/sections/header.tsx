'use client';

import React from 'react';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import { NavBar } from '@/components/ui/tubelight-navbar';
import { navItems } from '@/lib/navigation';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="border-b relative">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <div className="hidden md:block w-full mt-3 sm:mt-5">
            <NavBar
              items={navItems}
              className="static translate-x-0 left-0 mb-0 sm:pt-0 w-full"
              logo={
                <Link href="/">
                  <Image
                    src="/moola-logo.svg"
                    alt="Moola"
                    width={100}
                    height={20}
                    priority
                    className="w-[80px] sm:w-[100px] h-auto"
                  />
                </Link>
              }
              actionButton={
                <button className="bg-violet-600 text-white text-sm sm:text-base font-medium rounded-full py-1.5 sm:py-2 px-4 sm:px-6 flex items-center gap-1 sm:gap-2 hover:bg-violet-700 transition-colors cursor-pointer">
                  <span>DOWNLOAD NOW</span>
                </button>
              }
              cartInfo={
                <div className="flex items-center space-x-2 ml-2 sm:ml-4">
                  <span className="flex items-center gap-1 sm:gap-2">
                    <Image
                      src="/canada.svg"
                      alt="CAD"
                      width={20}
                      height={14}
                      className="w-4 sm:w-5 h-auto"
                    />
                    <span className="text-sm sm:text-base font-bold">CAD</span>
                  </span>
                </div>
              }
            />
          </div>
          <div className="md:hidden flex w-full items-center justify-between mt-1 sm:mt-2">
            <Link href="/">
              <Image
                src="/moola-logo.svg"
                alt="Moola"
                width={100}
                height={20}
                priority
                className="w-[80px] sm:w-[100px] h-auto"
              />
            </Link>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <button className="bg-violet-600 text-white text-xs sm:text-sm font-medium rounded-full py-1.5 px-3 sm:px-4 flex items-center gap-1 hover:bg-violet-700 transition-colors cursor-pointer whitespace-nowrap">
                <span>DOWNLOAD NOW</span>
              </button>
              <div className="flex items-center space-x-1 sm:space-x-2 ml-2 sm:ml-4">
                <span className="flex items-center gap-1 sm:gap-2">
                  <Image
                    src="/canada.svg"
                    alt="CAD"
                    width={20}
                    height={14}
                    className="w-4 sm:w-5 h-auto"
                  />
                  <span className="text-sm font-bold hidden sm:inline">
                    CAD
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mb-2 sm:mb-3">
          <input
            type="text"
            placeholder="Search over 250 gift card brands..."
            className="w-full pl-8 sm:pl-10 pr-3 sm:pr-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            aria-label="Search gift cards"
          />
          <FaSearch className="absolute left-2.5 sm:left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer text-sm sm:text-base" />
        </div>
      </div>
      <div className="md:hidden">
        <NavBar items={navItems} className="mb-0" />
      </div>
    </header>
  );
};

export default Header;
