"use client";

import React from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import GiftCardsGrid from './components/GiftCardsGrid';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden flex flex-col">
      <Navbar />
      <SearchBar />
      
      <main className="max-w-[1100px] mx-auto px-4 space-y-6 flex-grow">
        <HeroCarousel />
        <PromoBoxes />
        <GiftCardsGrid />
        <Features />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
}

function SearchBar() {
  return (
    <div className="bg-[#8b31ff] w-full py-4 md:py-6 px-4 flex justify-center mb-6 md:mb-12 shrink-0">
      <div className="flex items-center w-full max-w-[1100px] shadow-sm">
        <input type="text" placeholder="Search brands" className="w-full bg-white rounded-l-full outline-none text-sm md:text-base px-5 md:px-8 py-3.5 text-slate-700 placeholder:text-slate-400 font-medium h-[48px] md:h-[54px]" />
        <button className="bg-[#4a00b0] text-white px-6 md:px-8 py-3.5 h-[48px] md:h-[54px] rounded-r-full hover:bg-[#380088] transition flex items-center justify-center cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </button>
      </div>
    </div>
  );
}

function PromoBoxes() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="bg-[#fc9c86] rounded-3xl p-6 md:p-8 flex items-center justify-between overflow-hidden relative min-h-[220px]">
        <div className="w-full sm:w-[60%] z-10 relative">
          <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4 leading-tight">Send gift cards<br />instantly through<br />text.</h3>
          <div className="flex flex-wrap gap-2">
            <button className="bg-[#411195] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#340c78] transition cursor-pointer">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
              <div className="flex flex-col items-start text-left"><span className="text-[9px] leading-[10px] font-medium tracking-wide">Download on the</span><span className="text-[15px] leading-[15px] font-semibold tracking-tight">App Store</span></div>
            </button>
            <button className="bg-[#411195] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-[#340c78] transition cursor-pointer">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 512 512"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
              <div className="flex flex-col items-start text-left"><span className="text-[9px] leading-[10px] uppercase font-medium tracking-wide">GET IT ON</span><span className="text-[15px] leading-[15px] font-semibold tracking-tight">Google Play</span></div>
            </button>
          </div>
        </div>
        <div className="hidden sm:block absolute right-[-20px] bottom-[-40px] opacity-90 pointer-events-none scale-[0.85] origin-bottom-right">
          <div className="w-48 h-72 bg-white/20 rounded-t-[2rem] border-[6px] border-white/40 p-3 shadow-lg flex flex-col items-center">
            <div className="w-16 h-1.5 bg-white/50 rounded-full mb-6"></div><div className="w-full h-24 bg-white/30 rounded-xl mb-3 flex items-center justify-center text-4xl">🎁</div><div className="w-full h-8 bg-white/30 rounded-xl mb-3"></div><div className="w-full h-20 bg-white/20 rounded-xl flex justify-around items-center px-2 text-xl"><span>✉️</span><span>📱</span><span>💬</span></div>
          </div>
        </div>
      </div>
      <div className="bg-[#9da7f7] rounded-3xl p-6 md:p-8 flex items-center justify-between overflow-hidden relative min-h-[220px]">
        <div className="w-full sm:w-[60%] z-10 relative">
          <h3 className="text-xl md:text-2xl font-extrabold text-white leading-tight">Invite a friend &<br />get 1% Moola cash<br />back on all their<br />purchases.</h3>
        </div>
        <div className="hidden sm:block absolute right-0 top-0 w-[40%] h-full pointer-events-none">
          <div className="absolute right-4 top-10 w-24 h-40 bg-slate-800 rounded-2xl border-[3px] border-slate-900 shadow-2xl rotate-12 flex flex-col p-1.5 opacity-80">
            <div className="w-full h-full bg-slate-700 rounded-xl flex flex-col gap-1.5 p-1.5 overflow-hidden"><div className="w-full h-6 bg-purple-500 rounded-md"></div><div className="w-full h-6 bg-pink-500 rounded-md"></div><div className="w-full h-6 bg-indigo-500 rounded-md"></div></div>
          </div>
          <div className="absolute right-16 top-16 z-10 w-28 h-48 bg-slate-900 rounded-2xl border-[3px] border-slate-800 shadow-2xl -rotate-6 flex flex-col p-1.5">
            <div className="w-full h-full bg-white rounded-xl flex flex-col p-2 items-center justify-center"><div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm mb-2">🤝</div><div className="w-full h-2 bg-slate-200 rounded-full mb-1"></div><div className="w-3/4 h-2 bg-slate-200 rounded-full mb-3"></div><div className="w-full h-8 bg-[#8b31ff] rounded-lg mt-auto"></div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <section className="py-8 md:py-10">
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-[#efefef] rounded-[2rem] p-6 md:p-10 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4"><div className="bg-[#b312ff] w-6 h-6 rounded flex items-center justify-center transform -rotate-12 shadow-sm"><span className="text-white text-[12px] font-black leading-none">%</span></div><h3 className="text-xl font-bold text-[#411195] tracking-tight">Deals Each Week</h3></div>
          <p className="text-slate-600 mb-8 flex-grow text-sm leading-relaxed">Each week, we feature new deals in the Moola Marketplace where you can save up to 15% on popular brands. Check out this week's feature deal.</p>
          <button className="bg-[#411195] hover:bg-[#340c78] text-white px-8 py-3.5 rounded-full font-bold text-[13px] transition cursor-pointer w-full md:w-auto">SHOP DEALS</button>
        </div>
        <div className="bg-[#efefef] rounded-[2rem] p-6 md:p-10 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4"><div className="bg-[#b312ff] w-6 h-6 rounded flex items-center justify-center transform -rotate-12 shadow-sm"><span className="text-white text-[12px] font-black leading-none">%</span></div><h3 className="text-xl font-bold text-[#411195] tracking-tight">Everyday Essentials</h3></div>
          <p className="text-slate-600 mb-8 flex-grow text-sm leading-relaxed">Moola has deals on all your everyday essentials such as grocery, fuel, pharmacy, food delivery, and more. It all adds up to great savings!</p>
          <button className="bg-[#411195] hover:bg-[#340c78] text-white px-8 py-3.5 rounded-full font-bold text-[13px] transition cursor-pointer w-full md:w-auto">SHOP ESSENTIALS</button>
        </div>
        <div className="bg-[#efefef] rounded-[2rem] p-6 md:p-10 flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4"><div className="bg-[#b312ff] w-6 h-6 rounded flex items-center justify-center transform -rotate-12 shadow-sm"><span className="text-white text-[12px] font-black leading-none">%</span></div><h3 className="text-xl font-bold text-[#411195] tracking-tight">Download App</h3></div>
          <p className="text-slate-600 mb-8 flex-grow text-sm leading-relaxed">Download the Moola App and start collecting cash back and bonus gift vouchers.</p>
          <button className="bg-[#411195] hover:bg-[#340c78] text-white px-8 py-3.5 rounded-full font-bold text-[13px] transition cursor-pointer w-full md:w-auto">DOWNLOAD APP</button>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="py-8 md:py-16">
      <div className="text-center mb-8 md:mb-10"><h2 className="text-2xl md:text-3xl font-extrabold text-[#411195] tracking-tight">What Do Customers Think About Moola</h2></div>
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center text-center">
          <p className="text-[13px] text-slate-600 font-medium leading-relaxed mb-6 flex-grow flex items-center">This is a great app that saves money. Saved over 200 dollars so far!</p>
          <div className="flex gap-1 mb-6">{[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-[#daba24]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
          <div className="flex items-center gap-2 font-bold text-slate-800 text-lg"><svg className="w-5 h-5 fill-black" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg><span>Apple Store</span></div>
        </div>
        <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center text-center">
          <p className="text-[13px] text-slate-600 font-medium leading-relaxed mb-6 flex-grow flex items-center">Great way to save on the stuff you buy anyway. I always check Moola first when shopping online or in-store. It also helped me organize all my rewards cards in one place which stream-lined my wallet.</p>
          <div className="flex gap-1 mb-6">{[...Array(4)].map((_, i) => <svg key={i} className="w-5 h-5 fill-[#daba24]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
          <div className="flex items-center justify-center"><img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-6 object-contain" /></div>
        </div>
        <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center text-center">
          <p className="text-[13px] text-slate-600 font-medium leading-relaxed mb-6 flex-grow flex items-center">It's very easy to use, has more than 200 brands, and also lots of discounts and bonuses. Once you've paid you can receive the gift cards within 1 minute.</p>
          <div className="flex gap-1 mb-6">{[...Array(5)].map((_, i) => <svg key={i} className="w-5 h-5 fill-[#daba24]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
          <div className="flex items-center gap-2 font-medium text-slate-600 text-lg"><svg className="w-6 h-6" viewBox="0 0 512 512"><path fill="#00d859" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"/><path fill="#00a0ff" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"/><path fill="#ff3333" d="M425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z"/><path fill="#ffd000" d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg><span>Google Play</span></div>
        </div>
      </div>
    </section>
  );
}