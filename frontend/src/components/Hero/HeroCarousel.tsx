"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "Limited Time Offer",
    subtitle: "Get up to 50% off on selected items!",
    image: "/slide1.jpg",
  },
  {
    title: "Winter Holiday Sale",
    subtitle: "Limited-time offers on winter essentials",
    image: "/slide2.jpg",
  },
  {
    title: "Refer & Earn",
    subtitle: "Get rewards for inviting your friends",
    image: "/slide3.jpg",
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-[450px] bg-center bg-cover flex items-center justify-center" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="bg-black bg-opacity-50 p-6 rounded text-center text-white max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg md:text-xl">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full ${currentSlide === idx ? "bg-white" : "bg-gray-400"} focus:outline-none`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
