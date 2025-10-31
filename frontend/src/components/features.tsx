"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "Smart Budgeting",
    desc: "Automatically categorize transactions, discover spending trends, and receive tailored insights that help you grow your savings effortlessly.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="url(#grad1)"
        className="w-14 h-14 mx-auto mb-4"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-green)" />
            <stop offset="100%" stopColor="var(--accent-blue)" />
          </linearGradient>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6 4a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Goal Tracking",
    desc: "Visualize your financial ambitions and monitor progress in real-time with beautiful, data-driven charts and milestones.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="url(#grad2)"
        className="w-14 h-14 mx-auto mb-4"
      >
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-green)" />
            <stop offset="100%" stopColor="var(--accent-blue)" />
          </linearGradient>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 21h8M12 17V3m0 0l-4 4m4-4l4 4"
        />
      </svg>
    ),
  },
  {
    title: "Real-Time Insights",
    desc: "Access a live financial dashboard that brings all your accounts together with intelligent analysis and personalized recommendations.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="url(#grad3)"
        className="w-14 h-14 mx-auto mb-4"
      >
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-green)" />
            <stop offset="100%" stopColor="var(--accent-blue)" />
          </linearGradient>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3v18h18M7 13l3 3 7-7"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#05080f] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle_at_center,rgba(57,255,20,0.08),transparent_70%)] blur-3xl -translate-x-1/2" />
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-blue)]"
        >
          Designed for Modern Money Management
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mb-20 max-w-2xl mx-auto text-lg"
        >
          Finfly transforms financial tracking into a visual, interactive experience. Precision meets design clarity.
        </motion.p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="group relative bg-gradient-to-b from-[#0e1525] to-[#121a2f] rounded-3xl border border-white/10 hover:border-[var(--accent-green)]/50 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(57,255,20,0.05)] hover:shadow-[0_0_50px_rgba(57,255,20,0.15)] transition duration-500"
            >
              <div className="relative w-fit mx-auto group-hover:scale-110 transition-transform duration-500">
                {f.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 mt-2">
                {f.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {f.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[var(--accent-green)]/10 to-[var(--accent-blue)]/10 blur-2xl -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
