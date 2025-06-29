'use client';

/**
 * @file NavBar.tsx
 * Main navigation component for the Moola application
 * 
 * This component implements a responsive navigation bar with:
 * - Desktop and mobile layouts with appropriate navigation patterns
 * - Hamburger menu for mobile view with animated transitions
 * - Currency indicator
 * - Download app button
 * - Modal integration for app download information
 * 
 * The navigation adapts to different screen sizes using Tailwind CSS breakpoints
 * and manages its own state for menu visibility and modal display.
 */

import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import ButtonComponent from './ButtonComponent';
import Image from 'next/image';
import Modal from './Modal';
import { Download, Share2, Star } from 'lucide-react';

/**
 * NavBar Component
 * 
 * Main navigation header for the application that provides:
 * - Site branding (logo)
 * - Primary navigation links
 * - Download app button
 * - Currency selection
 * - Mobile-responsive menu with hamburger toggle
 * 
 * @returns {JSX.Element} The rendered NavBar component
 */
const NavBar: React.FC = () => {
    // State to control the visibility of the app download modal
    const [isShareModalOpen, setIsShareModalOpen] = useState(false);
    
    // State to control the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    /**
     * Grid data for the modal display
     * Each item is either an image with styling properties or a text element
     * @type {Array<{type: 'image', src: string, alt: string, bg: string} | {type: 'text', content: string, bg: string}>}
     */
    const gridItems: Array<
        | { type: 'image'; src: string; alt: string; bg: string }
        | { type: 'text'; content: string; bg: string }
    > = [
        { type: 'image', src: '/images/Frame_1.png', alt: 'Grid1', bg: 'bg-[#bfd781]' },
        { type: 'image', src: '/images/Frame_2.png', alt: 'Grid2', bg: 'bg-[#f183b4]' },
        { type: 'image', src: '/images/Frame_3.png', alt: 'Grid3', bg: 'bg-[#c5e7ec]' },
        { type: 'text', content: 'Gift Cards that Give Back!', bg: 'bg-[#99b8e3]' },
        { type: 'image', src: '/images/Frame_5.png', alt: 'Grid5', bg: 'bg-[#a8f0e9]' },
        { type: 'image', src: '/images/Frame_6.png', alt: 'Grid6', bg: 'bg-[#fcdc6f]' },
        { type: 'image', src: '/images/Frame_7.png', alt: 'Grid7', bg: 'bg-[#8942ed]' },
        { type: 'image', src: '/images/Frame_8.png', alt: 'Grid8', bg: 'bg-[#874cd9]' },
        { type: 'image', src: '/images/Frame_5.png', alt: 'Grid9', bg: 'bg-[#a771ca]' },
    ];

    /**
     * Toggles the mobile menu visibility state
     */
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    /**
     * Closes the share/download modal
     */
    const handleCloseModal = () => {
        setIsShareModalOpen(false);
    };

    return (
        <div className="w-full min-h-[75px] flex px-3 sm:px-6 lg:px-3 justify-center bg-white relative z-50">
            <nav className="flex justify-between lg:justify-center lg:gap-8 xl:gap-24 items-center w-full max-w-7xl">
                {/* Logo - Site branding and home link */}
                <a href="/page.tsx" className='cursor-default'>
                    <Image
                        src="/Logo_Desktop_purple.svg"
                        alt="Logo"
                        width={120}
                        height={28}
                        className="w-[100px] sm:w-[120px]"
                    />
                </a>

                {/* Desktop Navigation - Main navigation links visible on desktop */}
                <div className="hidden lg:block">
                    <ul className="flex lg:flex-row lg:gap-6 xl:gap-12 font-semibold text-black/65 text-sm">
                        <li>
                            <a href="/page.tsx" className='p-2 hover:text-purple transition-colors whitespace-nowrap'>Shop</a>
                        </li>
                        <li>
                            <a href="/page.tsx" className='p-2 hover:text-purple transition-colors whitespace-nowrap'>Winter Holiday Sale</a>
                        </li>
                        <li>
                            <a href="/page.tsx" className='p-2 hover:text-purple transition-colors whitespace-nowrap'>How it Works</a>
                        </li>
                        <li>
                            <a href="/page.tsx" className='p-2 hover:text-purple transition-colors whitespace-nowrap'>Refer & Earn</a>
                        </li>
                        <li>
                            <a href="/page.tsx" className='p-2 hover:text-purple transition-colors whitespace-nowrap'>Merchant Solutions</a>
                        </li>
                    </ul>
                </div>

                {/* Desktop Right Section - Download button and currency indicator */}
                <div className='hidden lg:flex items-center gap-4'>
                    <ButtonComponent variant="gradient" className="text-[11px]" onClick={() => setIsShareModalOpen(true)}>
                        DOWNLOAD NOW
                    </ButtonComponent>

                    <div className='flex gap-1'>
                        <Image
                            src="/ca.svg"
                            alt="Canada Flag"
                            width={20}
                            height={20}
                        />
                        <span className='text-xs font-semibold'>CAD</span>
                    </div>
                </div>

                {/* Mobile Right Section - Currency indicator and hamburger menu */}
                <div className='flex lg:hidden items-center gap-3'>
                    {/* Currency for mobile */}
                    <div className='flex gap-1'>
                        <Image
                            src="/ca.svg"
                            alt="Canada Flag"
                            width={18}
                            height={18}
                        />
                        <span className='text-xs font-semibold'>CAD</span>
                    </div>

                    {/* Hamburger Menu Button - Animated toggle for mobile menu */}
                    <button
                        onClick={toggleMenu}
                        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`bg-purple block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                            <span className={`bg-purple block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`bg-purple block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu - Slide-down menu for mobile view */}
                <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out z-50 overflow-hidden ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 py-4">
                        <ul className="flex flex-col gap-4 font-semibold text-black/65 text-sm">
                            <li>
                                <a href="/page.tsx" className='block py-2 hover:text-purple transition-colors whitespace-nowrap'>Shop</a>
                            </li>
                            <li>
                                <a href="/page.tsx" className='block py-2 hover:text-purple transition-colors whitespace-nowrap'>Winter Holiday Sale</a>
                            </li>
                            <li>
                                <a href="/page.tsx" className='block py-2 hover:text-purple transition-colors whitespace-nowrap'>How it Works</a>
                            </li>
                            <li>
                                <a href="/page.tsx" className='block py-2 hover:text-purple transition-colors whitespace-nowrap'>Refer & Earn</a>
                            </li>
                            <li>
                                <a href="/page.tsx" className='block py-2 hover:text-purple transition-colors whitespace-nowrap'>Merchant Solutions</a>
                            </li>
                        </ul>

                        {/* Mobile Download Button - Only shown in mobile menu */}
                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <ButtonComponent variant="gradient" className="text-[11px] w-full" onClick={() => setIsShareModalOpen(true)}>
                                DOWNLOAD NOW
                            </ButtonComponent>
                        </div>
                    </div>
                </div>
            </nav>
            
            {/* Share Modal - App download modal with QR code and grid display */}
            <Modal
                isOpen={isShareModalOpen}
                onClose={handleCloseModal}
            >
                <div className="flex flex-col lg:flex-row min-h-[60vh] lg:min-h-[70vh]">
                    {/* Left Panel - Download information and QR code */}
                    <div className="w-full lg:w-1/2 bg-purple-light text-white px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-18 flex flex-col items-center justify-center gap-4 sm:gap-6">
                        <div className="flex flex-col items-center gap-2 sm:gap-3">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-center">Download Moola now</h1>
                            <p className="text-xs sm:text-sm md:text-base text-center max-w-xs sm:max-w-sm">
                                Scan the QR Code on your mobile phone to get Moola in your app store!
                            </p>
                        </div>
                        <Image
                            src="/images/qr-code.png"
                            alt="QR Code to download Moola"
                            width={170}
                            height={170}
                            className="object-cover rounded-2xl sm:rounded-3xl w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-40 lg:h-40 xl:w-44 xl:h-44"
                        />
                        <a href="" className="flex text-center text-xs sm:text-sm gap-1 items-center hover:opacity-80 transition-opacity">
                            <span className="underline">Share Deal</span>
                            <Share2 width={14} className="sm:w-4 sm:h-4" />
                        </a>
                        <div className="flex flex-col sm:flex-row text-xs sm:text-sm md:text-[15px] gap-1 sm:gap-2 font-semibold text-center">
                            <p className="flex items-center justify-center gap-1">
                                <Star width={12} className="sm:w-[15px] sm:h-[15px]" />
                                4.9 star rating
                            </p>
                            <p className="flex items-center justify-center gap-1">
                                <Download width={12} className="sm:w-[15px] sm:h-[15px]" />
                                109,000 total downloads
                            </p>
                        </div>
                    </div>

                    {/* Right Panel - Visual grid display showing app features */}
                    <div className="w-full lg:w-1/2 grid grid-cols-3 grid-rows-3 gap-0 items-center min-h-[40vh] lg:min-h-auto">
                        {gridItems.map((item, index) => (
                            <div key={index} className={`${item.bg} w-full h-full flex items-center justify-center aspect-square lg:aspect-auto`}>
                                {item.type === 'image' ? (
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        width={150}
                                        height={150}
                                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 object-cover"
                                    />
                                ) : (
                                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[22px] leading-tight p-2 sm:p-3 md:p-4 text-white">
                                        {item.content}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default NavBar;