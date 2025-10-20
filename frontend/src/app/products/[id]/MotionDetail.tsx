"use client";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/motion";

export function Title({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible" className="text-xl font-semibold">
      {children}
    </motion.div>
  );
}

export function ImageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible" className="relative aspect-square w-full">
      {children}
    </motion.div>
  );
}

export function Content({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={slideUp} initial="hidden" animate="visible" className="space-y-4">
      {children}
    </motion.div>
  );
}


