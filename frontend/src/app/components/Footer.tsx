"use client";

import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

export default function Footer() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        alert("Thank you! Your message has been sent.");
        setForm({ name: "", email: "", message: "" });
    };

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
                    <Image src="/logos/moneris.svg" alt="Moneris" width={75} height={24} className="mb-3" />
                </div>
            </div>

            {/* Middle Layer - Violet */}
            <div className="bg-violet-200 text-violet-900 px-4 md:px-20 py-12 flex flex-col md:flex-row items-start md:items-stretch justify-between space-y-6 md:space-y-0">
                {/* Left Column */}
                <div className="flex-1 flex flex-col space-y-8 pr-0 md:pr-12 items-center md:items-start justify-center">
                    {/* Logo */}
                    <div className="flex justify-center md:justify-start mb-4">
                        <Image src="https://content.moola.com/wp-content/uploads/2019/10/Logo_Desktop_purple.svg" alt="Moola Logo" width={150} height={50} />
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-6 text-sm font-medium justify-center md:justify-start">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms & Conditions</a>
                        <a href="#" className="hover:underline">Help Center</a>
                        <a href="#" className="hover:underline">Contact Us</a>
                    </div>

                    {/* Socials */}
                    <div className="flex space-x-6 text-violet-900 justify-center md:justify-start">
                        <a href="#" className="hover:text-violet-700"><FaInstagram size={20} /></a>
                        <a href="#" className="hover:text-violet-700"><FaTwitter size={20} /></a>
                        <a href="#" className="hover:text-violet-700"><FaFacebookF size={20} /></a>
                        <a href="#" className="hover:text-violet-700"><FaYoutube size={20} /></a>
                        <a href="#" className="hover:text-violet-700"><FaLinkedinIn size={20} /></a>
                    </div>

                    {/* Legal text */}
                    <p className="text-xs text-gray-700 max-w-lg text-center md:text-left">
                        Designated trademarks and brands are the property of their respective owners. Moola Inc. and its products are not affiliated or endorsed by such owners. Use of this (website/app) constitutes acceptance of Moola Inc. Privacy Policy and Terms of Use.
                    </p>
                </div>


                {/* Right Column - Write an Email Form */}
                <div className="w-full md:w-96 bg-white rounded-lg p-6 shadow-md flex flex-col space-y-4">
                    <h3 className="text-lg font-semibold text-violet-900 text-center">Write Us an Email</h3>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-violet-900 text-white rounded px-4 py-2 font-semibold hover:bg-violet-800 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom Layer - Light Violet */}
            <div className="bg-violet-300 text-violet-900 h-8 flex items-center justify-center text-sm">
                © 2025 Moola Inc. All rights reserved.
            </div>
        </footer>
    );
}
