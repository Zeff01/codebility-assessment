import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full text-white font-sans">
      
      {/* 1. Accepted Payments Bar */}
      <div className="bg-[#8e21d6] py-4 px-4 sm:px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-[13px] sm:text-sm font-semibold">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <span>Accepted Payment Methods</span>
            <div className="flex space-x-2">
              <div className="bg-white rounded px-1.5 py-0.5 flex items-center justify-center">
                <img src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-2006.png" alt="Visa" className="h-3 sm:h-4" />
              </div>
              <div className="bg-white rounded px-1.5 py-0.5 flex items-center justify-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-3 sm:h-4" />
              </div>
              <div className="bg-white rounded px-1.5 py-0.5 flex items-center justify-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KsNv1E-CEQ95oQ2KPdGElyoHd1frji8S4w&s" alt="Discover" className="h-3 sm:h-4" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 opacity-90">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 15l-3-3 1.41-1.41L11 13.17l4.59-4.58L17 10l-6 6z"/></svg>
            <span className="text-xs sm:text-sm">Payments Powered by <span className="font-bold">Moneris</span></span>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Section */}
      <div className="bg-[#a329f5] pt-12 pb-10 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto text-center">
          
          {/* Logo and Links */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
            <img src="https://play-lh.googleusercontent.com/N1Rg4YimNpcHAEuXf89K5l_UfIltuwn95btpKROERWVJW9TJSJXVPo-CrrglD5H-BYMo" alt="Moola" className="h-9 sm:h-10 w-auto" />
            
            {/* Links: Grid 2x2 on mobile, single row on desktop */}
            <div className="grid grid-cols-2 lg:flex lg:space-x-10 gap-x-8 gap-y-4 text-[13px] sm:text-sm font-bold">
              <Link to="/privacy" className="hover:underline whitespace-nowrap">Privacy Policy</Link>
              <Link to="/terms" className="hover:underline whitespace-nowrap">Terms & Conditions</Link>
              <Link to="/help" className="hover:underline whitespace-nowrap">Help Center</Link>
              <Link to="/contact" className="hover:underline whitespace-nowrap">Contact Us</Link>
            </div>
          </div>

          {/* Social Icons (SVG replacements for Lucide) */}
          <div className="flex justify-center space-x-6 mb-10">
            <SocialIcon d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" /> {/* FB */}
            <SocialIcon d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /> {/* Twitter */}
            <SocialIcon d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2" /> {/* LinkedIn */}
          </div>

          {/* Legal Disclaimer */}
          <div className="max-w-3xl mx-auto px-2">
            <p className="text-[10px] sm:text-[11px] leading-relaxed opacity-80 font-medium">
              Designated trademarks and brands are the property of their respective owners. Moola Inc. and its products are not affiliated or endorsed by such owners. Use of this (website/app) constitutes acceptance of Moola Inc. Privacy Policy and Terms of Use. Copyright © 2025 Moola Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="bg-[#8e21d6] py-4 text-center text-[11px] sm:text-[12px] font-bold border-t border-purple-400/20">
        Copyright © 2025 Moola Inc. All rights reserved.
      </div>
    </footer>
  );
}

// Helper component for Social Icons to keep code clean
const SocialIcon = ({ d }) => (
  <svg 
    className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition-transform fill-current" 
    viewBox="0 0 24 24"
  >
    <path d={d} />
  </svg>
);