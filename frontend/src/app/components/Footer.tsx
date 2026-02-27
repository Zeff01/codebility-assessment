import React from 'react';

export default function Footer() {
    return (
    <footer className="w-full flex flex-col text-white mt-16">
        
   
        <div className="bg-[#5a0bb5] w-full py-4 flex justify-center">
        <div className="w-full max-w-[1100px] px-4 flex flex-col md:flex-row justify-between items-center text-[13px] font-bold">
            <div className="flex items-center gap-4">
            <span>Accepted Payment Methods</span>
            <div className="flex gap-2">
                <div className="bg-white w-9 h-6 rounded flex items-center justify-center shadow-sm"><span className="text-[#1434cb] text-[10px] font-black italic">VISA</span></div>
                <div className="bg-white w-9 h-6 rounded flex items-center justify-center shadow-sm relative overflow-hidden">
                <div className="w-3.5 h-3.5 bg-[#eb001b] rounded-full absolute left-1.5 z-10 opacity-90"></div>
                <div className="w-3.5 h-3.5 bg-[#f79e1b] rounded-full absolute right-1.5 z-0 opacity-90"></div>
                </div>
                <div className="bg-white w-9 h-6 rounded flex items-center justify-center shadow-sm"><span className="text-slate-800 text-[8px] font-black tracking-tighter">DISCOVER</span></div>
            </div>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
            <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 448 512"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>
            <span>Payments Powered by</span>
            <div className="flex items-center font-bold text-lg tracking-tight ml-1">
                Moneris
                <svg className="w-5 h-5 ml-1.5" viewBox="0 0 24 24" fill="none" stroke="#00c8e5" strokeWidth="2" strokeLinecap="round">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                </svg>
            </div>
            </div>
        </div>
        </div>


        <div className="bg-[#7818d8] w-full py-12 flex justify-center">
        <div className="w-full max-w-[1100px] px-4 flex flex-col items-center">
            <div className="w-full flex flex-col md:flex-row items-center justify-center mb-10 relative">
            <div className="text-3xl font-black tracking-tighter flex items-center gap-2 md:absolute md:left-0 mb-8 md:mb-0">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 12C4 12 5.5 8 12 8C18.5 8 20 12 20 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/><path d="M8 16C8 16 9 14 12 14C15 14 16 16 16 16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
                moola
            </div>
            <div className="flex flex-wrap justify-center gap-8 md:gap-14 text-[14px] font-bold underline underline-offset-[6px] decoration-[1.5px]">
                <a href="#" className="hover:text-purple-200 transition">Privacy Policy</a><a href="#" className="hover:text-purple-200 transition">Terms & Conditions</a><a href="#" className="hover:text-purple-200 transition">Help Center</a><a href="#" className="hover:text-purple-200 transition">Contact Us</a>
            </div>
            </div>
            <div className="flex gap-8 mb-8">
            <a href="#" className="hover:opacity-75 transition"><svg className="w-[20px] h-[20px] fill-white" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a>
            <a href="#" className="hover:opacity-75 transition"><svg className="w-[20px] h-[20px] fill-white" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L273.1 180.5 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
            <a href="#" className="hover:opacity-75 transition"><svg className="w-[20px] h-[20px] fill-white" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg></a>
            <a href="#" className="hover:opacity-75 transition"><svg className="w-[20px] h-[20px] fill-white" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></a>
            <a href="#" className="hover:opacity-75 transition"><svg className="w-[20px] h-[20px] fill-white" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></a>
            </div>
            <p className="text-center text-[12px] font-semibold max-w-4xl leading-relaxed opacity-95 px-4">Designated trademarks and brands are the property of their respective owners. Moola Inc. and its products are not affiliated or endorsed by such owners. Use of this (website/app) constitutes acceptance of Moola Inc. Privacy Policy and Terms of Use. Copyright © 2026 Moola Inc. All rights reserved.</p>
        </div>
        </div>


        <div className="bg-[#984dfa] w-full py-5 text-center text-[12px] font-bold tracking-wide">
        Copyright © 2026 Moola Inc. All rights reserved.
        </div>
    </footer>
    );
}