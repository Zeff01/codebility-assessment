"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily R., Freelancer",
    role: "Independent Consultant",
    quote:
      "Finfly transformed how I track and save money — the real-time dashboard helped me save 30% more this quarter than ever before.",
  },
  {
    name: "Carlos M., Startup Founder",
    role: "CEO & Co-Founder - TechStart",
    quote:
      "We switched to Finfly and our team uses it daily. The transparency and insights gave us clarity and control we never had.",
  },
  {
    name: "Priya S., Creative Director",
    role: "Agency Lead - BrightIdeas",
    quote:
      "As a busy creative professional, I needed finance tools that are simple yet powerful. Finfly delivers elegant design and serious impact.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0b0f19] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-green)] to-[var(--accent-blue)]"
        >
          What customers are saying
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mt-4"
        >
          Real stories from people using Finfly to take control of their finances.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            className="group relative bg-gradient-to-b from-[#0f1522] to-[#131c2d] rounded-3xl p-8 border border-white/10 shadow-[0_0_30px_rgba(57,255,20,0.05)] hover:shadow-[0_0_40px_rgba(57,255,20,0.1)] transition"
          >
            <div className="mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-[var(--accent-green)] mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V8m0-4a4 4 0 014 4h6m0 8v-8m0 4a4 4 0 01-4 4H7" />
              </svg>
            </div>
            <blockquote className="text-gray-300 italic mb-6">
              “{t.quote}”
            </blockquote>
            <p className="text-white font-semibold">{t.name}</p>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
