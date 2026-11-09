// components/Footer.jsx
"use client"; 
import { useState, useEffect } from "react"; // <-- 1. Import useState, useEffect
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, Phone, MapPin, ArrowRight, 
  Globe, Briefcase, Camera 
} from "lucide-react";
import Button from "./ui/Button";

export default function Footer() {
  // <-- 2. Set up state for the year
  const [year, setYear] = useState("");

  // <-- 3. Only calculate the year after the browser loads
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative bg-[#10172A] text-slate-300 pt-16 pb-8 overflow-hidden">
      {/* Ambient Glow */}
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6366F1]/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top CTA Banner */}
        <div className="bg-gradient-to-r from-[#312E81] to-[#10172A] border border-[#6366F1]/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-2xl shadow-[#6366F1]/10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Ready to see what your marketing earns?
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Launch your first RestoFlow Drop in under a week. No upfront fees.
            </p>
          </div>
          <Button href="#contact" size="lg" className="shrink-0 w-full md:w-auto">
            Request Info <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-[#6366F1]/30 bg-white">
                <Image 
                  src="/favicon.ico" 
                  alt="RestoFlow Logo" 
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Resto<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6366F1] to-[#06B6D4]">Flow</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Smarter campaigns for growing restaurants. Track every customer, every dollar, and every channel that works.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Website" className="text-slate-400 hover:text-white transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Careers" className="text-slate-400 hover:text-white transition-colors">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Photos" className="text-slate-400 hover:text-white transition-colors">
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#how" className="text-sm text-slate-400 hover:text-[#6366F1] transition-colors">How It Works</a></li>
              <li><a href="#results" className="text-sm text-slate-400 hover:text-[#6366F1] transition-colors">Results</a></li>
              <li><a href="#features" className="text-sm text-slate-400 hover:text-[#6366F1] transition-colors">Features</a></li>
              <li><a href="#marketplace" className="text-sm text-slate-400 hover:text-[#6366F1] transition-colors">Marketplace</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/login" className="text-sm text-slate-400 hover:text-[#6366F1] transition-colors">Login</Link></li>
              <li><a href="#contact" className="text-sm text-slate-400 hover:text-[#6366F1] transition-colors">Contact Sales</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-[#6366F1] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-[#6366F1] transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#6366F1] mt-0.5 shrink-0" />
                <a href="mailto:hello@restoflow.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  hello@restoflow.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#6366F1] mt-0.5 shrink-0" />
                <a href="tel:+15551234567" className="text-sm text-slate-400 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#6366F1] mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  123 Market Street<br />San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            {/* <-- 4. Use the state variable here */}
            © {year || "2026"} RestoFlow. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 text-center md:text-right">
            Illustrative demo data. Not verified business results.
          </p>
        </div>
      </div>
    </footer>
  );
}