import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#09090b]/90 backdrop-blur-xl border-b border-zinc-800/80 shadow-2xl shadow-purple-950/20" : "bg-transparent border-b border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 6 }}
            className="w-9 h-9 rounded-2xl bg-linear-to-tr from-purple-600 via-indigo-600 to-fuschia-500 flex items-center justify-center text-white font-black shadow-lg shadow-purple-500/30"
          >
            ♥
          </motion.div>
          <span className="text-xl sm:text-2xl font-black tracking-tighter text-white font-sans">
            moola
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a
            href="#how-it-works"
            className="hover:text-purple-400 transition-colors"
          >
            How it works
          </a>
          <a
            href="#results"
            className="hover:text-purple-400 transition-colors"
          >
            Results
          </a>
          <a
            href="#features"
            className="hover:text-purple-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#marketplace"
            className="hover:text-purple-400 transition-colors"
          >
            Marketplace
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-5">
          <a
            href="#login"
            className="text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            Login
          </a>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-linear-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-purple-500/30 border border-purple-400/20"
          >
            Request info
          </motion.button>
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-zinc-300 hover:text-white p-2 rounded-xl bg-zinc-900 border border-zinc-800"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090b]/95 backdrop-blur-2xl border border-b border-zinc-800 px-6 py-6 flex flex-col gap-4"
          >
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 font-medium py-1.5 flex items-center justify-between"
            >
              How it works <ChevronRight size={16} className="text-zinc-600" />
            </a>
            <a
              href="#results"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 font-medium py-1.5 flex items-center justify-between"
            >
              Results <ChevronRight size={16} className="text-zinc-600" />
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 font-medium py-1.5 flex items-center justify-between"
            >
              Features <ChevronRight size={16} className="text-zinc-600" />
            </a>
            <a
              href="#marketplace"
              onClick={() => setMobileMenuOpen(false)}
              className="text-zinc-300 font-medium py-1.5 flex items-center justify-between"
            >
              Marketplace <ChevronRight size={16} className="text-zinc-600" />
            </a>
            <div className="flex flex-col gap-3 pt-4 border-t border-zinc-800">
              <a
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 font-medium text-center py-1"
              >
                Login
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-full shadow-lg"
              >
                Request info
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
