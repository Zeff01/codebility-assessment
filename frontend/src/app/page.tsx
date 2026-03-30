"use client";

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto border-b border-slate-100">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex items-center justify-center bg-slate-900 text-cyan-400 font-mono font-bold px-2 py-1 rounded-lg border border-slate-700 group-hover:border-cyan-400 transition-colors">
            {`</>`}
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
            JHYRN
          </span>
        </div>
        
        <div className="hidden md:flex gap-6 text-sm font-semibold text-slate-500">
          <a href="#" className="hover:text-cyan-500 transition">Market</a>
          <a href="#" className="hover:text-rose-500 transition">Assets</a>
          <a href="#" className="hover:text-cyan-500 transition">Exchange</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-cyan-400 text-slate-900 px-5 py-2 rounded-lg text-sm font-bold hover:bg-cyan-300 transition shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            Download
          </button>
          <button className="bg-black text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-slate-800 transition border border-white/10">
            Login
          </button>
        </div>
      </nav>

     {/* Search Bar Section */}
      <section className="px-6 py-5 bg-slate-950 border-y border-slate-800 shadow-inner">
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search for products, stocks, or crypto assets..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder:text-slate-600 transition shadow-lg"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-6 py-10 lg:py-16 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tighter">
              Invest in your <br />
              <span className="text-cyan-500 uppercase">Digital </span> 
              <span className="text-rose-500 uppercase">Future.</span>
            </h1>
            
            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-md font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
            
            <div className="mt-8">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-500 transition shadow-lg shadow-cyan-100">
                Get Started
              </button>
            </div>
          </div>

          {/* Hero Card */}
          <div className="relative group max-w-md lg:max-w-lg mx-auto w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-rose-500/20 rounded-[3rem] blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative z-10 bg-white p-6 rounded-[2.5rem] shadow-2xl border border-slate-100 transform rotate-1 group-hover:rotate-0 transition-transform duration-700">
                <div className="bg-slate-50 rounded-[2rem] p-6 flex flex-col gap-5">
                   <div className="flex gap-4">
                      <div className="h-20 w-full bg-cyan-500/10 rounded-2xl border border-cyan-200 flex items-center px-4 shadow-sm">
                         <div className="h-9 w-9 bg-cyan-400 rounded-xl shadow-md"></div>
                         <div className="ml-3 h-2.5 w-12 bg-cyan-500/20 rounded-full"></div>
                      </div>
                      <div className="h-20 w-full bg-rose-500/10 rounded-2xl border border-rose-200 flex items-center px-4 shadow-sm">
                         <div className="h-9 w-9 bg-rose-500 rounded-xl shadow-md"></div>
                         <div className="ml-3 h-2.5 w-12 bg-rose-500/20 rounded-full"></div>
                      </div>
                   </div>

                   <div className="h-28 w-full bg-slate-950 rounded-2xl p-6 flex flex-col justify-center gap-3 shadow-2xl border border-slate-800">
                      <div className="h-1.5 w-1/4 bg-cyan-400/40 rounded-full"></div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full"></div>
                      <div className="h-1.5 w-2/3 bg-white/10 rounded-full"></div>
                      <div className="mt-1 h-1 w-1/3 bg-rose-500/30 rounded-full"></div>
                   </div>
                </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/20">
              <div className="w-6 h-6 bg-cyan-400 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">System Asset</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium font-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-rose-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-8 border border-rose-500/20">
              <div className="w-6 h-6 bg-rose-500 rounded-lg shadow-[0_0_15px_rgba(244,63,94,0.5)]"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Secure Logic</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium font-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>

          <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 hover:border-slate-500/50 transition-all duration-300 group">
            <div className="w-14 h-14 bg-slate-500/10 rounded-2xl flex items-center justify-center mb-8 border border-slate-700">
              <div className="w-6 h-6 bg-slate-300 rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
            </div>
            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">Global Reach</h3>
            <p className="text-slate-400 text-sm leading-relaxed font-medium font-serif">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}