import React, { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Buy A Gift Card,",
      subtitle: "Get Cash Back Rewards",
      label: "Gifting Made Easier",
      buttonText: "Shop Weekly Deals",
      color: "bg-[#a329f5]"
    },
    {
      title: "Send Gift Cards",
      subtitle: "Instantly Through Text",
      label: "Fast & Convenient",
      buttonText: "Send a Gift",
      color: "bg-[#f57c5f]" // Example: orange-ish slide
    },
    {
      title: "Invite a Friend",
      subtitle: "Earn 1% Cash Back",
      label: "Referral Bonus",
      buttonText: "Invite Now",
      color: "bg-[#4a90e2]" // Example: blue-ish slide
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full bg-white py-6 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Main Window */}
        <div className="relative overflow-hidden rounded-[30px] shadow-xl min-h-[340px] sm:min-h-[450px]">
          
          {/* Inner Slider: This moves left/right based on currentSlide */}
          <div 
            className="flex transition-transform duration-700 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`min-w-full flex items-center justify-between px-8 sm:px-16 ${slide.color} text-white`}
              >
                {/* Text Content */}
                <div className="max-w-xl py-10 md:py-0 text-center md:text-left">
                  <span className="uppercase tracking-widest font-bold text-xs sm:text-sm opacity-90 mb-4 block">
                    {slide.label}
                  </span>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">
                    {slide.title}
                  </h1>
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight mb-8">
                    {slide.subtitle}
                  </h2>
                  <button className="bg-white text-purple-700 px-10 py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-lg active:scale-95 uppercase">
                    {slide.buttonText}
                  </button>
                </div>

                {/* Decorative Side (Hidden on mobile) */}
                <div className="hidden md:block w-1/3 text-center text-8xl opacity-20 select-none">
                  🎁
                </div>
              </div>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === i ? "bg-white w-8" : "bg-white/40 w-2.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;