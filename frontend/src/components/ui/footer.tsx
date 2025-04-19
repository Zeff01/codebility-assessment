import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaLock,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#750dea] text-white">

      {/* Top Row: Payment Methods and Security */}
      <div className="flex px-6 py-4 text-sm bg-[#5713bd]">
        <div className="flex justify-between items-center w-full mx-10 lg:mx-40 md:mx-30">
          {/* Payment Methods */}
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-2xs lg:text-xs md:text-xs">Accepted Payment Methods</span>
            <Image
              src="/visa.png"
              className="rounded-sm"
              alt="Visa"
              width={30}
              height={20}
            />
            <Image
              src="/mastercard.png"
              className="rounded-sm"
              alt="Mastercard"
              width={30}
              height={20}
            />
            <Image
              src="/discover.png"
              className="rounded-sm"
              alt="Discover"
              width={30}
              height={20}
            />
          </div>

          {/* Payment Security */}
          <div className="flex items-center space-x-1">
            <FaLock className="text-white text-sm" />
            <span className="font-semibold text-2xs lg:text-xs md:text-xs">Payments Powered by</span>
            <Image
              src="/moneris.png"
              className="mb-4" 
              alt="Moneris"
              width={100}
              height={20} 
            />
          </div>
        </div>
      </div>

      {/* Middle Section: Logo, Links, Social */}
      <div className="bg-[#750dea] text-center py-10 px-4">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/moola-footer-logo.png"
            alt="Moola Logo"
            width={120}
            height={30} 
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium underline mb-6"> 
          <Link href="#" className="hover:text-gray-300">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-300">Terms & Conditions</Link>
          <Link href="#" className="hover:text-gray-300">Help Center</Link>
          <Link href="#" className="hover:text-gray-300">Contact Us</Link>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 text-white mb-6">
          <Link href="#" aria-label="Instagram"><FaInstagram className="text-xl hover:text-gray-300" /></Link>
          <Link href="#" aria-label="Twitter"><FaTwitter className="text-xl hover:text-gray-300" /></Link> 
          <Link href="#" aria-label="Facebook"><FaFacebookF className="text-xl hover:text-gray-300" /></Link> 
          <Link href="#" aria-label="YouTube"><FaYoutube className="text-xl hover:text-gray-300" /></Link> 
          <Link href="#" aria-label="LinkedIn"><FaLinkedinIn className="text-xl hover:text-gray-300" /></Link>
        </div>

        {/* Disclaimer Text */}
        <p className="max-w-3xl mx-auto text-xs text-gray-100">
          Designated trademarks and brands are the property of their respective owners. Moola Inc. and its products are not
          affiliated or endorsed by such owners. Use of this (website/app) constitutes acceptance of Moola Inc. Privacy Policy and
          Terms of Use. Copyright © 2025 Moola Inc. All rights reserved.
        </p>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="bg-[#8942F4] text-center py-3 text-xs">
        Copyright © 2025 Moola Inc. All rights reserved. 
      </div>

    </footer>
  );
}