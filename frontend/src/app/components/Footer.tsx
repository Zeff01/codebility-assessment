"use client";

import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full">
            {/* Top Layer - Darkest Violet */}
            <div className="bg-violet-900 text-white flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-4 md:py-0 h-20 md:h-10">
                <div className="flex flex-wrap items-center justify-center md:justify-start space-x-2 md:space-x-4 mb-2 md:mb-0">
                    <span className="font-semibold text-xs opacity-80 whitespace-nowrap">Accepted payment methods:</span>

                    <div className="w-10 h-6 bg-white flex items-center justify-center rounded">
                        <Image src="/logos/visa.png" alt="Visa" width={25} height={24} />
                    </div>
                    <div className="w-10 h-6 bg-white flex items-center justify-center rounded">
                        <Image src="/logos/mastercard.png" alt="Mastercard" width={25} height={24} />
                    </div>
                    <div className="w-10 h-6 bg-white flex items-center justify-center rounded">
                        <Image src="/logos/amex.png" alt="Amex" width={30} height={24} />
                    </div>
                    <div className="w-10 h-6 bg-white flex items-center justify-center rounded">
                        <Image src="/logos/paypal.png" alt="PayPal" width={25} height={24} />
                    </div>
                </div>

                <div className="flex items-center space-x-1 opacity-80 text-xs justify-center md:justify-end">
                    <span>Payment powered by</span>
                    <Image src="/logos/moneris.svg" alt="Moneris" width={75} height={24} className="mb-3"/>
                </div>
            </div>

            {/* Middle Layer - Violet */}
            <div className="bg-violet-200 text-violet-900 px-4 md:px-20 py-12 flex flex-col items-center space-y-6">
                {/* Logo and Links */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-6xl">
                    <div className="mb-4 md:mb-0 flex justify-center md:justify-start">
                        <Image src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_purple.svg" alt="Moola Logo" width={120} height={40} />
                    </div>
                    <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm font-medium">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms & Conditions</a>
                        <a href="#" className="hover:underline">Help Center</a>
                        <a href="#" className="hover:underline">Contact Us</a>
                    </div>
                </div>

                {/* Socials */}
                <div className="flex flex-wrap justify-center md:justify-center space-x-4 md:space-x-6 text-violet-900">
                    <a href="#" className="hover:text-violet-700"><FaInstagram size={20} /></a>
                    <a href="#" className="hover:text-violet-700"><FaTwitter size={20} /></a>
                    <a href="#" className="hover:text-violet-700"><FaFacebookF size={20} /></a>
                    <a href="#" className="hover:text-violet-700"><FaYoutube size={20} /></a>
                    <a href="#" className="hover:text-violet-700"><FaLinkedinIn size={20} /></a>
                </div>

                {/* Legal text */}
                <p className="text-xs text-center text-gray-700 max-w-3xl">
                    Designated trademarks and brands are the property of their respective owners. Moola Inc. and its products are not affiliated or endorsed by such owners. Use of this (website/app) constitutes acceptance of Moola Inc. Privacy Policy and Terms of Use. Copyright © 2025 Moola Inc. All rights reserved.
                </p>
            </div>

            {/* Bottom Layer - Light Violet */}
            <div className="bg-violet-300 text-violet-900 h-8 flex items-center justify-center text-sm">
                © 2025 Moola Inc. All rights reserved.
            </div>
        </footer>
    );
}
