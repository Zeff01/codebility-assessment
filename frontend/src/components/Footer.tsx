"use client"

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="">
      <div className="w-full bg-[#750dea] px-5 lg:px-10">
        {/* links */}
        <div className="flex sm:h-[67px] w-full items-end justify-center pt-10 sm:pt-30">
          <div className="max-w-6xl w-full flex flex-col sm:flex-row sm:justify-center sm:gap-5 items-center space-y-2">
            <Link href="/">
              <Image
                alt="Logo"
                width={140}
                height={28}
                src="/footer/Logo_Desktop_white.svg"/>
            </Link>
            <div className="flex justify-center flex-wrap">
              <Link
                href="#PrivacyPolicy"
                className="text-white p-2 text-sm font-medium underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="#TermsConditions"
                className="text-white p-2 text-sm font-medium underline"
              >
                Terms & Conditions
              </Link>
              <Link
                href="#HelpCenter"
                className="text-white p-2 text-sm font-medium underline"
              >
                Help Center
              </Link>
              <Link
                href="#ContactUs"
                className="text-white p-2 text-sm font-medium underline"
              >
                Contact Us
              </Link>
            </div>

          </div>
        </div>
        {/* socials */}
        <div className="flex h-[67px] w-full items-end justify-center">
          <div className="my-4 flex gap-6">
            <a href="#" aria-label="Instagram" className="hover:text-pink-500 transition-colors duration-200">
              <FaInstagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-sky-500 transition-colors duration-200">
              <FaTwitter size={20} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition-colors duration-200">
              <FaFacebookF size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-red-600 transition-colors duration-200">
              <FaYoutube size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 transition-colors duration-200">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        <div className="flex w-full items-end justify-center p-4">
          <p className="text-center w-[735px] text-xs leading-4 font-medium">Designated trademarks and brands are the property of their respective owners. Moola Inc. and its products are not affiliated or endorsed by such owners. Use of this (website/app) constitutes acceptance of Moola Inc. Privacy Policy <br></br>and Terms of Use. Copyright © 2025 Moola Inc. All rights reserved.</p>
        </div>
      </div>

      <div className="bg-[#8942f4] flex w-full items-end justify-center p-4">
        <p className="text-center text-xs leading-4 font-medium">Copyright © 2025 Moola Inc. All rights reserved.</p>
      </div>


    </footer>
  );
}
