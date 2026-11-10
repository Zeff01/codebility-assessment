import { motion } from "framer-motion";
import { INFRASTRUCTURE_FEATURES } from "../data/mockData";
import { ChevronRight } from "lucide-react";

const InfrastructureSection = () => {
  return (
    <section id="features" className="py-20 sm:py-28 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-inner">
            Infrastructure
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-[1.15]">
            Marketing infrastructure, <br />
            not a marketing campaign.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INFRASTRUCTURE_FEATURES.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#121216]/90 backdrop-blur-md border border-zinc-800/90 rounded-[28px] p-6 sm:p-8 hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden shadow-xl"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-linear-to-tr from-purple-950/80 to-zinc-900 border border-purple-800/50 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:bg-purple-900/40 transition-all shadow-inner">
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 sm:pt-6 sm:mt-6 border-t border-zinc-800/60 flex items-center justify-between text-xs font-bold text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ChevronRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;
