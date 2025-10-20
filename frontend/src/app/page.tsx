"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn, slideUp } from "@/lib/motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative mx-auto max-w-7xl w-full px-6 pt-24 pb-24 md:pt-32 md:pb-32 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.75),rgba(0,0,0,0.6))] text-white rounded-3xl mt-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Discover Our Store
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/80">
            Browse our curated collection of contemporary pieces crafted for the discerning individual.
          </p>
          <motion.div variants={slideUp} initial="hidden" animate="visible" className="mt-8 flex justify-center">
            <Link href="/products" className="cursor-pointer">
              <Button size="lg">View All Products</Button>
            </Link>
          </motion.div>
        </motion.div>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(255,255,255,.08),transparent)]" />
      </section>

      <section className="mx-auto max-w-7xl w-full px-6 mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <div className="text-lg font-semibold mb-2">Curated Quality</div>
          <p className="text-foreground/70">Every piece is handpicked for craftsmanship and timeless appeal.</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <div className="text-lg font-semibold mb-2">Modern Aesthetics</div>
          <p className="text-foreground/70">Clean lines and neutral tones designed for a refined look.</p>
        </div>
        <div className="rounded-xl border border-black/10 dark:border-white/10 p-6">
          <div className="text-lg font-semibold mb-2">Fast Shipping</div>
          <p className="text-foreground/70">Reliable delivery so you can enjoy your purchase sooner.</p>
        </div>
      </section>
    </div>
  );
}
