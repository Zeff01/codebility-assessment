"use client";

import React, { useRef, useState } from 'react';

const heroSlides = [
  { id: 1, subtitle: "GIFTING MADE EASIER", title: "Buy A Gift Card,\nGet Cash Back Rewards", buttonText: "SHOP WEEKLY DEALS", bgColor: "bg-[#8b31ff]", buttonColor: "bg-gradient-to-r from-[#e312c9] to-[#710fc4] hover:from-[#c20fa9] hover:to-[#5a0ca1]", icon: "💳" },
  { id: 2, subtitle: "TREAT YOURSELF", title: "Earn Bonus Value\nOn Everyday Brands", buttonText: "BROWSE BRANDS", bgColor: "bg-[#d926a9]", buttonColor: "bg-gradient-to-r from-[#8b31ff] to-[#4a00b0] hover:from-[#7828e0] hover:to-[#380088]", icon: "🛍️" },
  { id: 3, subtitle: "SEND INSTANTLY", title: "The Perfect Gift,\nDelivered In Seconds", buttonText: "SEND A GIFT", bgColor: "bg-indigo-500", buttonColor: "bg-gradient-to-r from-[#f43f5e] to-[#be123c] hover:from-[#e11d48] hover:to-[#9f1239]", icon: "🎁" }
];

export default function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragEndX, setDragEndX] = useState<number | null>(null);

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
    }
  };

  const handleNext = () => scrollToSlide(currentSlide === heroSlides.length - 1 ? 0 : currentSlide + 1);
  const handlePrev = () => scrollToSlide(currentSlide === 0 ? heroSlides.length - 1 : currentSlide - 1);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const newSlide = Math.round(carouselRef.current.scrollLeft / carouselRef.current.clientWidth);
    if (newSlide !== currentSlide) setCurrentSlide(newSlide);
  };

  const onPointerDown = (e: React.PointerEvent) => { setDragStartX(e.clientX); setDragEndX(null); };
  const onPointerMove = (e: React.PointerEvent) => { if (dragStartX !== null) setDragEndX(e.clientX); };
  const onPointerUp = () => {
    if (dragStartX !== null && dragEndX !== null) {
      const distance = dragStartX - dragEndX;
      if (distance > 50) handleNext();
      else if (distance < -50) handlePrev();
    }
    setDragStartX(null);
    setDragEndX(null);
  };

  return (
    <div
      className="relative group rounded-[1.5rem] overflow-hidden cursor-grab active:cursor-grabbing select-none"
      onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onPointerLeave={onPointerUp}
    >
      <button onClick={(e) => { e.stopPropagation(); handlePrev(); }} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full items-center justify-center text-white z-30 transition cursor-pointer backdrop-blur-sm">&#10094;</button>

      <div ref={carouselRef} onScroll={handleScroll} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pointer-events-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {heroSlides.map((slide) => (
          <div key={slide.id} className={`flex-none w-full snap-center ${slide.bgColor} p-6 md:p-10 flex flex-col md:flex-row items-center justify-between text-white min-h-[410px]`}>
            <div className="w-full md:w-1/2 z-10 relative h-full flex flex-col justify-center items-center text-center md:items-start md:text-left md:pl-8">
              <h2 className="text-sm md:text-xl font-bold mb-2 tracking-wide text-white/80 uppercase">{slide.subtitle}</h2>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6 md:mb-8 whitespace-pre-line">{slide.title}</h1>
              <div className="pointer-events-auto">
                <button onClick={(e) => e.stopPropagation()} className={`${slide.buttonColor} text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg transition shadow-lg cursor-pointer`}>{slide.buttonText}</button>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center relative z-10">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-white/20 rounded-full blur-3xl absolute opacity-50"></div>
              <div className="text-7xl md:text-9xl relative z-20 transform rotate-12 drop-shadow-2xl">{slide.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={(e) => { e.stopPropagation(); handleNext(); }} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full items-center justify-center text-white z-30 transition cursor-pointer backdrop-blur-sm">&#10095;</button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20 pointer-events-auto">
        {heroSlides.map((_, index) => (
          <button key={index} onClick={(e) => { e.stopPropagation(); scrollToSlide(index); }} className={`w-3 h-3 rounded-full transition-all cursor-pointer ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'}`} />
        ))}
      </div>
    </div>
  );
}