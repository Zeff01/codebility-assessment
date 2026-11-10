// components/Navbar.jsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu, X, ArrowRight, LogIn,
  Home, Workflow, BarChart3, Sparkles, Store,
} from "lucide-react";
import Button from "./ui/Button";

const links = [
  { name: "Home", href: "#home", icon: Home },
  { name: "How It Works", href: "#how", icon: Workflow },
  { name: "Results", href: "#results", icon: BarChart3 },
  { name: "Features", href: "#features", icon: Sparkles },
  { name: "Marketplace", href: "#marketplace", icon: Store },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm"
          : "bg-white/40 backdrop-blur-md border-b border-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-[#6366F1]/30 group-hover:scale-105 transition-transform bg-white">
            <Image 
              src="/favicon.ico" 
              alt="RestoFlow Logo" 
              fill
              sizes="36px"
              className="object-cover"
              priority
            />
          </div>
          <span className="font-bold text-lg text-slate-900 tracking-tight">
            Resto<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">Flow</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#6366F1] rounded-lg hover:bg-[#6366F1]/5 transition-colors"
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Login + Request Info */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#6366F1] transition-colors"
          >
            <LogIn size={16} strokeWidth={2} />
            Login
          </Link>
          <Button href="#contact" size="sm">
            Request Info <ArrowRight size={16} strokeWidth={2} />
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[560px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-white/95 backdrop-blur-xl border-t border-slate-200/60">
          {links.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[#6366F1]/5 hover:text-[#6366F1] rounded-lg transition-colors"
              >
                <Icon size={18} strokeWidth={2} className="text-slate-400" />
                {l.name}
              </a>
            );
          })}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-[#6366F1]/5 hover:text-[#6366F1] rounded-lg transition-colors"
          >
            <LogIn size={18} strokeWidth={2} className="text-slate-400" />
            Login
          </Link>
          <Button href="#contact" className="w-full mt-2" onClick={() => setOpen(false)}>
            Request Info <ArrowRight size={16} strokeWidth={2} />
          </Button>
        </div>
      </div>
    </header>
  );
}