"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#0b0f19] to-[#090d14] overflow-hidden">
      {/* Soft floating gradient orbs for depth */}
      <div className="absolute top-[-4rem] left-[-4rem] w-64 h-64 bg-[var(--accent-green)]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-6rem] right-[-6rem] w-72 h-72 bg-[var(--accent-blue)]/10 blur-[140px] rounded-full"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.03)_0%,transparent_70%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex-1 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-blue)] drop-shadow-[0_0_20px_rgba(57,255,20,0.1)]">
            Smarter Finance for Modern Life
          </h1>
          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-xl mx-auto md:mx-0 leading-relaxed">
            Finfly empowers you to manage your money with confidence — track spending,
            set goals, and make data-driven financial decisions that shape your future.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#"
              className="px-8 py-3.5 rounded-lg bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-blue)] text-[#071018] font-semibold shadow-[0_0_25px_rgba(57,255,20,0.2)] hover:scale-105 hover:shadow-[0_0_40px_rgba(57,255,20,0.35)] transition-transform duration-300"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-8 py-3.5 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-[var(--accent-green)]/40 hover:bg-white/5 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Dashboard Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent-green)]/10 to-[var(--accent-blue)]/10 blur-2xl rounded-3xl"></div>
            <img
              src="/hero-image.png"
              alt="Finfly dashboard"
              className="relative w-full max-w-lg rounded-2xl shadow-[0_20px_80px_rgba(57,255,20,0.15)] border border-white/10"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm flex flex-col items-center gap-2"
      >
        <span className="animate-bounce">↓</span>
        <span className="text-xs tracking-widest">SCROLL</span>
      </motion.div>
    </section>
  );
}
