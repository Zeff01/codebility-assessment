'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white py-[16px] z-50 relative"> 
      <div className="mx-18 sm:px-6 lg:px-8"> 
        <div className="relative flex items-center justify-between">

          {/* Logo & NavBar Tabs */}
          <div className="flex flex-1 items-center justify-center">
            {/* Logo */}
            <div className="flex shrink-0 items-center">
              <Image
                className="h-10 w-auto"
                src="/moola.png"
                alt="Moola Logo" 
                width={80}
                height={40} 
              />
            </div>

            {/* Tabs*/}
            <div className="hidden lg:flex">
              <div className="flex space-x-10 mx-20">
                <Link href="#" className="text-tiny px-3 py-2 text-base font-semibold text-[#5d5c5f] hover:text-gray-800">
                  Shop
                </Link>
                <Link href="#" className="text-tiny px-3 py-2 text-base font-semibold text-[#5d5c5f] hover:text-gray-800">
                  Winter Holiday Sale
                </Link>
                <Link href="#" className="text-tiny px-3 py-2 text-base font-semibold text-[#5d5c5f] hover:text-gray-800">
                  How it Works
                </Link>
                <Link href="#" className="text-tiny px-3 py-2 text-base font-semibold text-[#5d5c5f] hover:text-gray-800">
                  Refer & Earn
                </Link>
                <Link href="#" className="text-tiny px-3 py-2 text-base font-semibold text-[#5d5c5f] hover:text-gray-800">
                  Merchant Solutions
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section: Download Button & Flag */}
          <div className="flex inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Download Now Button */}
            <div className="hidden lg:flex inset-y-0 right-0 items-center pr-2">
              <Link
                href="#"
                type="button" 
                className="
                  text-white bg-gradient-to-r from-[#C202FB] to-[#780CEB]
                  hover:bg-gradient-to-br
                  focus:ring-4 focus:outline-none focus:ring-blue-300
                  dark:focus:ring-blue-800
                  font-medium rounded-3xl text-2xs px-5.5 py-2.5 text-center me-2 mb-2" 
              >
                DOWNLOAD NOW
              </Link>
            </div>

            {/* Canadian Flag */}
            <div className="relative ml-4">
              <div className="flex items-center text-xs font-bold text-gray-800">
                <Image
                  className="h-3 w-auto mr-1"
                  src="/canada-flag-icon.svg"
                  alt="Canadian Flag"
                  width={12} 
                  height={8}  
                />
                CAD
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex right-0 flex items-center lg:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-[#780CEB] hover:text-[#600abc]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                // Close Icon
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden z-100" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* Mobile Tabs */}
            <Link href="#" className="block rounded-md px-3 py-2 text-base font-semibold text-[#5d5c5f] hover:text-gray-800">
              Shop
            </Link>
            <Link href="#" className="block rounded-md px-3 py-2 text-base font-semibold text-[#5d5c5f] hover:text-gray-800">
              Winter Holiday Sale
            </Link>
            <Link href="#" className="block rounded-md px-3 py-2 text-base font-semibold text-[#5d5c5f] hover:text-gray-800">
              How it Works
            </Link>
            <Link href="#" className="block rounded-md px-3 py-2 text-base font-semibold text-[#5d5c5f] hover:text-gray-800">
              Refer and Earn 
            </Link>
            <Link href="#" className="block rounded-md px-3 py-2 text-base font-semibold text-[#5d5c5f] hover:text-gray-800">
              Merchant Solutions
            </Link>
            <Link href="#" className="block rounded-md px-3 py-2 text-base font-semibold text-[#5d5c5f] hover:text-gray-800">
              Download Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}