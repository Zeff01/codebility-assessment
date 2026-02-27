import React from 'react';
import moolaLogo from '../../image/moola-logo.png';

export default function Navbar() {
    return (
    <div className="w-full bg-white shrink-0">
        <nav className="flex items-center justify-between px-6 py-4 max-w-[1400px] mx-auto">
        
        <div className="flex items-center gap-2 w-1/4">
            <div className="cursor-pointer">
            <img src={moolaLogo.src} alt="Moola Logo" className="h-8 w-auto object-contain" />
            </div>
        </div>
        
        <div className="hidden lg:flex items-center justify-center gap-8 font-semibold text-[13px] text-slate-700 w-2/4">
            <a href="#" className="hover:text-[#8b31ff] transition">Shop</a>
            <a href="#" className="hover:text-[#8b31ff] transition">Winter Holiday Sale</a>
            <a href="#" className="hover:text-[#8b31ff] transition">How it Works</a>
            <a href="#" className="hover:text-[#8b31ff] transition">Refer & Earn</a>
            <a href="#" className="hover:text-[#8b31ff] transition">Merchant Solutions</a>
        </div>
        
        <div className="flex items-center justify-end gap-6 w-1/4">
            <button className="bg-[#b312ff] hover:bg-[#990cd9] text-white px-7 py-2.5 rounded-full font-bold text-[11px] tracking-wide transition cursor-pointer">
            DOWNLOAD NOW
            </button>
            <div className="flex items-center gap-1.5 text-[13px] font-extrabold text-slate-900 cursor-pointer">
            <img src="https://flagcdn.com/w20/ca.png" srcSet="https://flagcdn.com/w40/ca.png 2x" alt="Canada Flag" className="w-[18px] shadow-sm rounded-sm" />
            <span>CAD</span>
            </div>
        </div>

        </nav>
    </div>
    );
}