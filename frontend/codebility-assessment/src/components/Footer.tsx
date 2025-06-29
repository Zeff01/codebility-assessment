'use client';

/**
 * @file Footer.tsx
 * Site-wide footer component for the Moola application
 * 
 * This component renders a comprehensive footer with three main sections:
 * 1. Payment methods and payment processor information
 * 2. Main footer with logo, links, social media, and legal text
 * 3. Copyright bar
 * 
 * The footer is fully responsive and adapts to different screen sizes
 * using Tailwind CSS breakpoints.
 */

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

/**
 * Footer Component
 * 
 * Renders the site-wide footer with payment info, navigation links, 
 * social media links, and legal information.
 * 
 * @returns {JSX.Element} The rendered Footer component
 */
const Footer: React.FC = () => {
    return (
        <footer className="w-full">
            {/* Payment Section - Shows accepted payment methods and payment processor */}
            <div className='bg-[#5713bd] text-white font-medium text-xs py-4 sm:py-5 px-4 lg:px-24 xl:px-28 2xl:px-32'>
                <div className='flex flex-col items-center space-y-5 sm:space-y-0 sm:flex-row sm:justify-between'>
                    {/* Accepted Payment Methods */}
                    <div className='flex flex-col items-center sm:items-start sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto'>
                        <p className='text-center sm:text-left'>Accepted Payment Methods</p>
                        <div className='flex justify-center gap-6 sm:gap-4'>
                            <Image
                                src="/visa.svg"
                                alt="Visa"
                                width={30}
                                height={20}
                            />
                            <Image
                                src="/mastercard.svg"
                                alt="Mastercard"
                                width={30}
                                height={20}
                            />
                            <Image
                                src="/discover.svg"
                                alt="Discover"
                                width={30}
                                height={20}
                            />
                        </div>
                    </div>
                    {/* Payment Processor */}
                    <div className='flex items-center gap-2 mt-2 sm:mt-0'>
                        <IoIosLock className="text-lg" />
                        <p>Payments Powered by</p>
                        <Image
                            src="/moneris.svg"
                            alt="Moneris"
                            width={85}
                            height={25}
                            className='relative bottom-1'
                        />
                    </div>
                </div>
            </div>

            {/* Main Footer Section - Contains logo, navigation links, social icons, and legal text */}
            <div className='bg-[#750dea] text-white flex flex-col gap-6 sm:gap-8 py-8 sm:py-12 px-4 lg:px-24 xl:px-28 2xl:px-32'>
                {/* Navigation Links */}
                <ul className='flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-sm font-medium'>
                    <li>
                        <Link href="/">
                            <Image src="/Logo_Desktop_white.svg" alt="Logo" width={140} height={28} />
                        </Link></li>
                    <li className='underline'><Link href="https://content.moola.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</Link></li>
                    <li className='underline'><Link href="https://content.moola.com/terms-of-service/" target="_blank" rel="noopener noreferrer">Terms & Conditions</Link></li>
                    <li className='underline'><Link href="https://content.moola.com/moola-general-help/" target="_blank" rel="noopener noreferrer">Help Center</Link></li>
                    <li className='underline'><Link href="https://content.moola.com/contact-us/" target="_blank" rel="noopener noreferrer">Contact Us</Link></li>
                </ul>

                {/* Social Media Links - Icon-based links to social media profiles */}
                <div className='flex gap-6 justify-center'>
                    <a href="https://www.instagram.com/moolacanada/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <FaInstagram size={20} className="sm:text-2xl" />
                    </a>
                    <a href="https://x.com/moolacanada" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <FaTwitter size={20} className="sm:text-2xl" />
                    </a>
                    <a href="https://www.facebook.com/MoolaCanada" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <FaFacebookF size={20} className="sm:text-2xl" />
                    </a>
                    <a href="https://www.youtube.com/@moola8709" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <FaYoutube size={20} className="sm:text-2xl" />
                    </a>
                    <a href="https://www.linkedin.com/company/moolacanada" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <FaLinkedin size={20} className="sm:text-2xl" />
                    </a>
                </div>
                
                {/* Legal Disclaimer Text */}
                <p className='text-center text-xs font-medium mx-auto w-full max-w-sm sm:max-w-md md:max-w-2xl px-2'>
                    Designated trademarks and brands are the property of their respective owners. 
                    Moola Inc. and its products are not affiliated or endorsed by such owners. 
                    Use of this (website/app) constitutes acceptance of Moola Inc. Privacy Policy 
                    and Terms of Use. Copyright © 2025 Moola Inc. All rights reserved.
                </p>
            </div>

            {/* Copyright Bar - The bottom-most section with copyright notice */}
            <div className='bg-[#8942f4] text-white font-medium text-xs flex justify-center py-4 sm:py-5 px-4'>
                <p>Copyright © 2025 Moola Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;