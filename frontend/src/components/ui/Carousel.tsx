"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { specialOffers } from "@/data/data";

export const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto slide every N seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % specialOffers.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Swipe handling
  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x < -50) {
      // swipe left → next
      setDirection(1);
      setIndex((prev) => (prev + 1) % specialOffers.length);
    } else if (info.offset.x > 50) {
      // swipe right → prev
      setDirection(-1);
      setIndex(
        (prev) => (prev - 1 + specialOffers.length) % specialOffers.length
      );
    }
  };

  return (
    <div
      className="relative my-3 mx-auto max-w-6xl w-full h-72 md:h-[500px] overflow-hidden border rounded-[36px]"
      style={{ touchAction: "pan-y" }}
    >
      <AnimatePresence mode="sync">
        <motion.div
          key={specialOffers[index].id}
          className="absolute inset-0 cursor-grab"
          initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
          transition={{ duration: 0.3 }}
          drag="x"
          onDragEnd={handleDragEnd}
        >
          <Image
            src={specialOffers[index].image}
            alt={specialOffers[index].title}
            fill
            className="w-full h-full object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {specialOffers.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
