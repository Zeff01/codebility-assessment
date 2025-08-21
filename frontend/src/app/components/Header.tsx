"use client"
import Link from "next/link"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="w-full flex flex-col items-center justify-center h-20 shadow relative">
      <nav className="flex-1 flex items-center justify-between px-2 gap-20 max-lg:w-full max-lg:px-10">
        <Link href="/" className="text-moola text-3xl font-bold tracking-tight">
          moola
        </Link>
        <div className="flex-1 h-full flex items-center justify-around gap-10 max-lg:hidden">
          <Link
            href="/"
            className="text-gray-700 text-sm font-bold tracking-wide"
          >
            Shop
          </Link>
          <Link
            href="/"
            className="text-gray-700  text-sm font-bold tracking-wide"
          >
            Winter Holiday Sale
          </Link>
          <Link
            href="/"
            className="text-gray-700 text-sm font-bold tracking-wide"
          >
            How it works
          </Link>
          <Link
            href="/"
            className="text-gray-700 text-sm font-bold tracking-wide"
          >
            Refer & Earn
          </Link>
          <Link
            href="/"
            className="text-gray-700 text-sm font-bold tracking-wide"
          >
            Merchant Solutions
          </Link>
        </div>
        <button className="px-5 py-2 bg-moola text-white text-sm rounded-3xl cursor-pointer max-lg:hidden">
          Download Now
        </button>
        <button
          className="text-lg cursor-pointer hidden max-lg:block"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          <GiHamburgerMenu className="text-moola" />
        </button>
      </nav>
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-start p-4 gap-4 lg:hidden">
          <Link
            href="/"
            className="text-gray-700 text-sm font-bold tracking-wide"
          >
            Shop
          </Link>
          <Link
            href="/"
            className="text-gray-700 text-sm font-bold tracking-wide"
          >
            Winter Holiday Sale
          </Link>
          <Link
            href="/"
            className="text-gray-700 text-sm font-bold tracking-wide"
          >
            How it works
          </Link>
          <Link
            href="/"
            className="text-gray-700 text-sm font-bold tracking-wide"
          >
            Refer & Earn
          </Link>
          <Link
            href="/"
            className="text-gray-700 text-sm font-bold tracking-wide"
          >
            Merchant Solutions
          </Link>
          <button className="px-5 py-2 bg-moola text-white text-sm rounded-3xl cursor-pointer">
            Download Now
          </button>
        </div>
      )}
    </header>
  )
}
