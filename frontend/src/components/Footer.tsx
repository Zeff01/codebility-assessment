"use client";

import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
} from "react-icons/fa";
import { SiMonzo } from "react-icons/si"; // placeholder for Moneris
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-700 to-purple-600 text-white">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-3 border-b border-white/20">
        <div className="flex items-center space-x-3 text-sm mb-2 md:mb-0">
          <span>Accepted Payment Methods</span>
          <FaCcVisa size={32} />
          <FaCcMastercard size={32} />
          <FaCcDiscover size={32} />
        </div>
        <div className="flex items-center text-sm space-x-2">
          <span className="flex items-center">
            <span className="mr-1">🔒</span> Payments Powered by
          </span>
          <SiMonzo size={28} /> {/* placeholder for Moneris */}
        </div>
      </div>

      {/* Middle Section */}
      <div className="text-center py-10 max-w-5xl mx-auto px-6">
        {/* Logo + Links */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly mb-6">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Logo color="text-white"/>
          </div>
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>


        {/* Social Icons */}
        <div className="flex justify-center space-x-6 text-xl mb-6">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-white/80 max-w-3xl mx-auto mb-4">
          Designated trademarks and brands are the property of their respective
          owners. Moola Inc. and its products are not affiliated or endorsed by
          such owners. Use of this (website/app) constitutes acceptance of Moola
          Inc. Privacy Policy and Terms of Use. Copyright © 2025 Moola Inc. All
          rights reserved.
        </p>
      </div>

      {/* Bottom Bar */}
      <div className="bg-purple-800 text-center py-3 text-xs">
        Copyright © 2025 Moola Inc. All rights reserved.
      </div>
    </footer>
  );
}
