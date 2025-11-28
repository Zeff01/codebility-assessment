'use client';
import { faBagShopping, faBars, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import PrimaryButton from './Primarybutton'
import gsap from 'gsap';

const Header = () => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    // GSAP Animation
    useEffect(() => {
        if (!overlayRef.current) return
        tl.current = gsap.timeline({ paused: true })
        const targetHeight = overlayRef.current.scrollHeight;
        tl.current.to(overlayRef.current, {
            duration: 0.45,
            height: `${targetHeight}px`,
            ease: 'power2.inOut',
        })

        return () => {
        tl.current?.kill()
        tl.current = null
        }
    }, []);

    useEffect(() => {
    if (tl.current) {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }}, [isMenuOpen]);

    // Auto Close the menu when the window is resized to desktop size
    useEffect(() => {
        const handleResize = () => setIsMenuOpen(window.innerWidth < 768 ? isMenuOpen : false);

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (
    <>
        <div className='mx-auto w-full max-w-screen-xl px-4'>
            <div className='flex justify-between w-full py-4'>
                <a href="/" className='flex items-center w-fit gap-1.5 text-transparent bg-clip-text font-extrabold bg-gradient-to-r from-green-900 to-green-700 font-["Outfit"] uppercase text-2xl'>
                    <FontAwesomeIcon icon={faBagShopping} className='text-2xl text-theme-color'/>
                    <h4 className='leading-0'>Shopy</h4>
                </a>
                <div className="menu-open hidden md:block">
                    <div className='flex gap-4 items-center'>
                        <ul className='flex items-center h-full text-neutral-600 text-md font-["Outfit"] [&>li>a]:px-6 [&>li>a:hover]:text-black [&>li>a]:transition-colors [&>li>a:hover]:duration-300'>
                            <li><a href="/">Shop</a></li>
                            <li><a href="/">Sale</a></li>
                            <li><a href="/">Refer & Earn</a></li>
                            <li><a href="/">About</a></li>
                        </ul>
                        <div>
                            <PrimaryButton className='text-xs font-["Outfit"] font-light rounded-full px-8 cursor-pointer'>
                                DOWNLOAD NOW
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                <button
                    className="block md:hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    <span className="relative w-8 h-8 inline-flex items-center justify-center">
                        <FontAwesomeIcon
                            icon={faBars}
                            className={`absolute text-2xl text-theme-color transition-transform duration-300 ${
                                isMenuOpen ? "rotate-90 opacity-0 scale-75" : "rotate-0 opacity-100 scale-100"
                            }`}
                        />
                        <FontAwesomeIcon
                            icon={faXmark}
                            className={`absolute text-2xl text-theme-color transition-transform duration-300 ${
                                isMenuOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-90 opacity-0 scale-75"
                            }`}
                        />
                    </span>
                </button>
            </div>

            {/* Dropdown */}
            <div ref={overlayRef} className="h-0 z-20 overflow-hidden">
                <ul
                    className='list-none w-full flex flex-col justify-center items-start text-neutral-600 text-xl font-["Outfit"]
                        [&>li]:w-full [&>li>a]:block [&>li>a]:w-full [&>li>a]:px-6 [&>li>a]:py-4
                        [&>li>a]:transition-colors [&>li>a:hover]:text-black'
                    >
                    <li><a href="/">Shop</a></li>
                    <li><a href="/">Sale</a></li>
                    <li><a href="/">Refer & Earn</a></li>
                    <li><a href="/">About</a></li>
                </ul>
                <div className='p-4'>
                    <PrimaryButton className='text-md font-["Outfit"] font-light rounded-full px-8 cursor-pointer'>
                        DOWNLOAD NOW
                    </PrimaryButton>
                </div>
            </div>
        </div>

        {/* Search Bar */}
        <div className='bg-theme-color py-4'>
            <div className='mx-auto w-full max-w-screen-xl px-4 flex rounded-full'>
                <input type="text" placeholder="Search over 200 gift cards" className='bg-white w-full outline-0 py-2 px-4 rounded-l-full'/>
                <button className='bg-green-700 hover:bg-green-950 duration-300 transition-colors rounded-r-full px-8 hover:cursor-pointer flex items-center'><FontAwesomeIcon icon={faSearch} className='text-xl text-white'/></button>
            </div>
        </div>
    </>
  )
}

export default Header