"use client";

import { FaStar, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface Review {
  name: string;
  source: "google" | "apple" | "other";
  comment: string;
}

const reviews: Review[] = [
  {
    name: "Alice M.",
    source: "google",
    comment: "Moola makes sending gifts super easy and fast! Love it!",
  },
  {
    name: "John D.",
    source: "apple",
    comment: "I can track my gift cards effortlessly. Amazing app!",
  },
  {
    name: "Sara K.",
    source: "google",
    comment: "Perfect solution for long-distance gifting. Highly recommend!",
  },
];

const sourceLogos = {
  google: "/logos/googleplay.png",
  apple: "/logos/appleblack.png",
  other: "/logos/other.png",
};

export default function Rates() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.3 },
    }),
  };

  return (
    <section className="relative w-full">
      {/* Background: half violet, half white */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-violet-200"></div>
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-white"></div>

      <div ref={containerRef} className="relative z-10 max-w-6xl mx-auto py-16 md:py-20 px-4 md:px-6">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-bold text-violet-900 text-center mb-10 md:mb-12">
          What Our Customer says About Moola
        </h2>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              animate={controls}
              variants={cardVariant}
              className="relative bg-white rounded-2xl shadow-lg p-4 md:p-8 flex flex-col items-center text-center max-w-xs md:max-w-xs mx-auto"
            >
              {/* Quotation icon top-right */}
              <div className="absolute top-2 md:top-4 right-2 md:right-4 text-white opacity-20 text-3xl md:text-4xl">
                &ldquo;
              </div>

              {/* Source Logo top-left */}
              <div className="absolute top-2 md:top-4 left-2 md:left-4 w-6 h-6 md:w-8 md:h-8">
                <Image
                  src={sourceLogos[review.source]}
                  alt={review.source}
                  width={24}
                  height={24}
                  className="opacity-70 md:w-8 md:h-8"
                />
              </div>

              {/* Avatar Icon */}
              <FaUserCircle className="text-violet-400 mb-2 md:mb-4" size={48} />

              {/* Name */}
              <h3 className="font-semibold text-violet-900 text-sm md:text-lg mb-1">{review.name}</h3>

              {/* Source text */}
              <p className="text-[10px] md:text-xs text-gray-500 mb-2 capitalize">{review.source}</p>

              {/* Comment */}
              <p className="text-gray-700 text-[10px] md:text-sm mb-3 md:mb-4">{review.comment}</p>

              {/* 5 Stars */}
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xs md:text-sm" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
