import { AnimatePresence, motion } from "framer-motion";
import { useCampaignSimulation } from "../hooks/useCampaignSimulation";
import { Check, TrendingUp } from "lucide-react";

const HeroPreviewCard = () => {
  const {
    metrics,
    timeLeft,
    isClaimed,
    userPhone,
    setUserPhone,
    userEmail,
    setUserEmail,
    handleClaimGift,
    toastMessage,
  } = useCampaignSimulation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-lg bg-[#121216]/95 backdrop-blur-2xl rounded-[28px] sm:rounded-4xl p-5 sm:p-7 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)] border border-zinc-700/60 text-left overflow-hidden mx-auto"
    >
      <div className="absolute -top-28 -right-28 w-56 h-56 bg-purple-600/25 rounded-full blur-3xl pointer-events-none" />
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-4 left-4 right-4 z-30 bg-purple-600 text-white text-xs font-semibold py-2.5 px-3.5 rounded-xl shadow-xl flex items-center justify-between"
          >
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#181822]/90 backdrop-blur-md border border-zinc-700/80 rounded-2xl px-3 py-1.5 sm:px-3.5 sm:py-2 flex flex-col items-end shadow-xl z-20"
      >
        <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-wider text-purple-400 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </span>
        <span className="text-base sm:text-xl font-black text-white tracking-tight">
          {metrics.roas}
        </span>
      </motion.div>
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-5 sm:mb-6">
        <div className="relative rounded-2xl overflow-hidden aspect-4/3 bg-zinc-800 border border-zinc-700 shadow-inner">
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-2">
            <span className="text-white font-black text-[9px] sm:text-[10px] tracking-wider uppercase bg-black/70 backdrop-blur-md px-1.5 sm:px-2 py-0.5 rounded-md border border-white/10">
              HELLO NORI
            </span>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden aspect-4/3 bg-zinc-800/70 border border-zinc-700/50 opacity-80" />
        <div className="rounded-2xl overflow-hidden aspect-4/3 bg-zinc-800/40 border border-zinc-700/30 opacity-50" />
      </div>
      <div className="mb-4 sm:mb-5">
        <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
          Free $10 Gift Card
        </h3>
        <p className="text-xs text-zinc-400 mt-0.5">
          For dine-in at any Hello Nori location
        </p>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 sm:mb-6 bg-zinc-900/80 p-3 rounded-2xl border border-zinc-800">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-ping" />
          <span className="text-xs font-bold text-purple-300">
            {metrics.totalClaimed.toLocaleString()} already claimed
          </span>
        </div>
        <div className="flex items-center gap-1 self-start sm:self-auto">
          {[
            { label: "D", val: timeLeft.days },
            { label: "H", val: timeLeft.hours },
            { label: "M", val: timeLeft.minutes },
            { label: "S", val: timeLeft.seconds },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center">
              <div className="bg-purple-600/90 backdrop-blur-sm text-white rounded-lg px-1.5 sm:px-2 py-1 text-xs font-mono font-bold flex flex-col items-center min-w-6.5 sm:min-w-7 shadow-sm">
                <span>{String(item.val).padStart(2, "0")}</span>
                <span className="text-[7px] text-purple-200 uppercase">
                  {item.label}
                </span>
              </div>
              {idx < 3 && (
                <span className="text-zinc-600 text-xs font-bold mx-0.5">
                  :
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
        <input
          type="tel"
          placeholder="Enter your mobile number..."
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
          className="w-full h-10 sm:h-11 bg-zinc-900/90 rounded-xl border border-zinc-800 px-4 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
        />
        <input
          type="email"
          placeholder="Enter your email address..."
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          className="w-full h-10 sm:h-11 bg-zinc-900/90 rounded-xl border border-zinc-800 px-4 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="bg-[#181822]/90 backdrop-blur-md border border-zinc-700/80 rounded-2xl px-3.5 py-2.5 flex flex-row sm:flex-col justify-between sm:justify-center items-center sm:items-start shadow-xl">
          <span className="text-[9px] uppercase font-bold text-zinc-400 tracking-wider">
            TODAY'S REVENUE
          </span>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-black text-white">
              {metrics.todayRevenue.toLocaleString()}
            </span>
            <span className="text-[10px] font-extrabold text-emerald-400 flex items-center">
              <TrendingUp size={10} className="mr-0.5" />
              +24%
            </span>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleClaimGift}
          disabled={isClaimed}
          className={`flex-1 font-bold py-3.5 px-4 rounded-2xl shadow-xl text-xs sm:text-sm transition-all flex items-center justify-center gap-2 ${isClaimed ? "bg-emerald-600 text-white cursor-default" : "bg-linear-to-r from-purple-600 via-purple-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-500/25"}`}
        >
          {isClaimed ? (
            <>
              <Check size={16} /> Gift Claimed!
            </>
          ) : (
            "Claim my gift"
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroPreviewCard;
