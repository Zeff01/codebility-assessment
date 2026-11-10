import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import HeroPreviewCard from "./HeroPreviewCard";

const HeroSection = () => {
  return (
    <section className="relative pt-10 pb-20 sm:pt-12 sm:pb-28 overflow-hidden bg-linear-to-b from-[#09090b] via-[#0d0d12] to-[#09090b]">
      <div className="absolute top-1/4 left-10 w-75 h-75 sm:w-137.5 sm:h-137.5 bg-purple-900/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-62.5 h-62.5 sm:w-112.5 sm:h-112.5 bg-indigo-900/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-800/60 text-purple-300 text-xs font-semibold shadow-inner">
              <Sparkles size={14} className="text-purple-400 shrink-0" />
              <span className="truncate">
                Closed-Loop Marketing Attribution
              </span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              Stop guessing. <br />
              Know exactly <br />
              what your marketing <br />
              <span className="bg-linear-to-r from-purple-400 via-fuchsia-400 to-indigo-300 bg-clip-text text-transparent">
                earns.
              </span>
            </h1>

            <p className="text-zinc-400 text-base sm:text-xl max-w-xl font-nomral leading-relaxed">
              Attach a Moola Drop to any campaign. Track every customer who
              walks in, every dollar spend, every channel that worked. Pay only
              on redemption.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-linear-to-r form-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold px-8 py-4 rounded-full shadow-xl shadow-purple-500/30 transition-all flex items-center justify-center gap-3 group border border-purple-400/20 "
              >
                <span>Request info</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1.5 transition-transform"
                />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-zinc-800/80 font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center shadow-lg"
              >
                See live results
              </motion.button>
            </div>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2 sm:pt-4 text-xs font-bold text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-purple-950/80 border border-purple-800 flex items-center justify-center text-purple-400">
                  <Check size={12} />
                </div>
                <span>Avg. 500%+ ROAS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-purple-950/80 border border-purple-800 flex items-center justify-center text-purple-400">
                  <Check size={12} />
                </div>
                <span>Pay only on redemption</span>
              </div>
            </div>
          </motion.div>
          <div className="lg:col-span-5 flex justify-center w-full">
            <HeroPreviewCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
