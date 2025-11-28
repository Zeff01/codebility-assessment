'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faArrowRight, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import PrimaryButton from "./Primarybutton";

const Footer = () => {
    const [localTime, setLocalTime] = useState<string>('');
    const [currentYear, setCurrentYear] = useState<string>('');

    useEffect(() => {
        setCurrentYear(new Date().getFullYear().toString());
        setLocalTime(new Date().toLocaleTimeString());

        const timer = window.setInterval(() => {
            setLocalTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => window.clearInterval(timer);
    }, []);
    
    return (
        <footer id="contact" className="w-full bg-linear-to-r from-theme-color to-black text-white">
            <div className="mx-auto w-full max-w-screen-xl px-4 xl:px-0 py-16">
                <div className="flex flex-col md:flex-row gap-8 justify-between md:items-center">
                    <div className="flex flex-col gap-4">
                        <a href="/" className='flex items-center w-fit gap-1.5 text-white font-["Outfit"] font-bold uppercase text-4xl'>
                            <FontAwesomeIcon icon={faBagShopping} className='text-4xl'/>
                            <p>Shopy</p>
                        </a>
                        <div className="flex gap-8">
                            <Link
                            href="/"
                            title="Visit our Facebook"
                            aria-label="Staple on Facebook"
                            className="text-white hover:scale-125 transition-transform duration-300 text-[28px]"
                            >
                            <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
                            </Link>
                            <Link
                            href="/"
                            title="Instagram Profile"
                            aria-label="Staple on Instagram"
                            className="text-white hover:scale-125 transition-transform duration-300 text-[30px]"
                            >
                            <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 underline">
                        <a href="/">Privacy Policy</a>
                        <a href="/">Terms of Service</a>
                        <a href="/">Contact Us</a>
                        <a href="/">Help Center</a>
                    </div>
                    <div className="flex gap-4">
                    <PrimaryButton className="rounded-xl px-8 py-4">
                        <span className='flex items-center font-["Roboto"]'>Shop Now! <FontAwesomeIcon icon={faArrowRight} className="ml-2 w-4 h-4" /></span>
                    </PrimaryButton>
                    </div>
                </div>
            </div>
             <div className="mx-auto w-full max-w-screen-xl px-4 flex justify-between xl:px-0 pb-4">
                <div>
                    <span className="text-neutral-400 font-medium">Version</span>
                <p className="text-sm font-extralight mt-2">
                    &copy;{currentYear ? currentYear : ''} ver 1.0 | <Link href="https://arcejhenslee.vercel.app" className="text-white hover:underline">JHENSLEE ARCE</Link>
                </p>
                </div>
                <div>
                    <span className="text-neutral-400 font-medium">Local Time</span>
                    <p className="text-sm font-extralight mt-2">
                        {localTime ? localTime : ''}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;