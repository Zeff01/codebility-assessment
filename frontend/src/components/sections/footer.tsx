'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaLock,
  FaAngleRight,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import {
  SiVisa,
  SiMastercard,
  SiDiscover,
  SiApple,
  SiGooglepay,
} from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-purple-50"
          ></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="pt-16 pb-8 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="container mx-auto px-4">
          {/* Top Section with Logo and Newsletter */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            {/* Logo and Tagline */}
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <Link href="/" className="inline-block cursor-pointer">
                <Image
                  src="/moola-logo.svg"
                  alt="Moola"
                  width={140}
                  height={28}
                  className="mb-2 brightness-0 invert"
                />
              </Link>
              <p className="text-purple-200 mt-3 max-w-md">
                The smarter way to save on gift cards for all your favorite
                brands.
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-8">
              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/how-it-works"
                      className="text-purple-200 hover:text-white transition flex items-center cursor-pointer"
                    >
                      <FaAngleRight className="mr-2 text-xs" />
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/gift-cards"
                      className="text-purple-200 hover:text-white transition flex items-center cursor-pointer"
                    >
                      <FaAngleRight className="mr-2 text-xs" />
                      Browse Gift Cards
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/rewards"
                      className="text-purple-200 hover:text-white transition flex items-center cursor-pointer"
                    >
                      <FaAngleRight className="mr-2 text-xs" />
                      Rewards Program
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">
                  Support
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/help-center"
                      className="text-purple-200 hover:text-white transition flex items-center cursor-pointer"
                    >
                      <FaAngleRight className="mr-2 text-xs" />
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact-us"
                      className="text-purple-200 hover:text-white transition flex items-center cursor-pointer"
                    >
                      <FaAngleRight className="mr-2 text-xs" />
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-purple-200 hover:text-white transition flex items-center cursor-pointer"
                    >
                      <FaAngleRight className="mr-2 text-xs" />
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4 text-lg">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-purple-200 hover:text-white transition flex items-center cursor-pointer"
                    >
                      <FaAngleRight className="mr-2 text-xs" />
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms-conditions"
                      className="text-purple-200 hover:text-white transition flex items-center cursor-pointer"
                    >
                      <FaAngleRight className="mr-2 text-xs" />
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Middle Section with Contact & Social */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 py-8 border-t border-b border-purple-700 mb-8">
            {/* Contact Information */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex items-center">
                <FaEnvelope className="text-purple-300 mr-2" />
                <a
                  href="mailto:hello@moola.com"
                  className="text-purple-200 hover:text-white transition cursor-pointer"
                >
                  hello@moola.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-purple-300 mr-2" />
                <a
                  href="tel:+18001234567"
                  className="text-purple-200 hover:text-white transition cursor-pointer"
                >
                  1-800-123-4567
                </a>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-purple-300 mr-2" />
                <span className="text-purple-200">Toronto, Canada</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/moola"
                className="bg-purple-700/50 hover:bg-purple-600 p-2.5 rounded-full transition duration-300"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="text-white" size={20} />
              </Link>
              <Link
                href="https://twitter.com/moola"
                className="bg-purple-700/50 hover:bg-purple-600 p-2.5 rounded-full transition duration-300"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter className="text-white" size={20} />
              </Link>
              <Link
                href="https://facebook.com/moola"
                className="bg-purple-700/50 hover:bg-purple-600 p-2.5 rounded-full transition duration-300"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF className="text-white" size={20} />
              </Link>
              <Link
                href="https://youtube.com/moola"
                className="bg-purple-700/50 hover:bg-purple-600 p-2.5 rounded-full transition duration-300"
                aria-label="Follow us on YouTube"
              >
                <FaYoutube className="text-white" size={20} />
              </Link>
              <Link
                href="https://linkedin.com/company/moola"
                className="bg-purple-700/50 hover:bg-purple-600 p-2.5 rounded-full transition duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedinIn className="text-white" size={20} />
              </Link>
            </div>
          </div>

          {/* Payment Options & Security */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
            <div className="flex items-center">
              <span className="text-white font-medium mr-4">
                Accepted Payment Methods
              </span>
              <div className="flex flex-wrap gap-2">
                <SiVisa className="text-white h-8 w-auto" />
                <SiMastercard className="text-white h-8 w-auto" />
                <SiDiscover className="text-white h-8 w-auto" />
                <SiApple className="text-white h-8 w-auto" />
                <SiGooglepay className="text-white h-8 w-auto" />
              </div>
            </div>

            <div className="flex items-center text-white">
              <FaLock className="mr-2" />
              <span>
                Payments Powered by <strong>Moneris</strong>
                <span className="text-teal-300 ml-1">®</span>
              </span>
            </div>
          </div>

          {/* Disclaimer Text */}
          <div className="text-center text-sm text-purple-200 max-w-4xl mx-auto mb-6">
            <p>
              Designated trademarks and brands are the property of their
              respective owners. Moola Inc. and its products are not affiliated
              or endorsed by such owners. Use of this website constitutes
              acceptance of Moola Inc. Privacy Policy and Terms of Use.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm text-white">
              Copyright © 2025 Moola Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
