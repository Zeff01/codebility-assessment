"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-darker)]/90 backdrop-blur-lg border-b border-white/10 shadow-[0_0_20px_rgba(57,255,20,0.05)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold tracking-tight text-[var(--accent-green)] hover:text-[var(--accent-blue)] transition-all duration-300"
        >
          Finfly
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-[var(--accent-green)] transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-[var(--accent-green)] transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="hover:text-[var(--accent-green)] transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-[var(--accent-green)] transition-colors">
            Contact
          </a>
          <a
            href="#"
            className="ml-4 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-blue)] text-[#071018] font-semibold hover:opacity-90 transition-all duration-300 shadow-[0_0_10px_rgba(57,255,20,0.3)]"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden text-[var(--accent-green)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-green)] rounded-md p-1 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="absolute top-16 right-6 bg-[#0f1522]/95 border border-white/10 rounded-2xl p-6 flex flex-col gap-5 text-gray-200 md:hidden backdrop-blur-xl shadow-lg"
            >
              {["Features", "Pricing", "Testimonials", "Contact"].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[var(--accent-green)] transition"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="#"
                className="px-5 py-2.5 text-center rounded-lg bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-blue)] text-[#071018] font-semibold shadow-[0_0_12px_rgba(57,255,20,0.25)] hover:opacity-90 transition"
                onClick={() => setOpen(false)}
              >
                Get Started
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
