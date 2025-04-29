"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HeroSectionProps {
  isMenuOpen: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isMenuOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: "spring.png",
    },
    {
      id: 2,
      image: "slide4.png",
      subtitle: "GIFTING MADE EASIER",
      title: "Buy A Gift Card,",
      span: "Get Cash Back Rewards",
    },
  ];

  const miniBanners = [
    {
      id: 1,
      image: "static1.png",
      subtitle: "Send gift cards",
      title: "instantly through",
      span: "text.",
    },
    {
      id: 2,
      image: "static4.png",
      subtitle: "Invite a friend &",
      title: "get 1% Moola cash",
      span: "back on all their",
      span2: "purchases.",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -100) handleNext();
    if (info.offset.x > 100) handlePrev();
  };

  return (
    <section className="flex flex-col items-center w-full bg-[#f7f9fc] px-6 pt-2 md:px-16">
      <div className="relative w-full max-w-7xl overflow-hidden">

        {/* Big Slider Section */}
        <div className="relative w-full overflow-hidden rounded-3xl">
          {!isMenuOpen && (
            <>
              <div
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/40 text-gray-800 p-2 rounded-full cursor-pointer shadow-md z-20"
                onClick={handlePrev}
              >
                &#60;
              </div>
              <div
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/40 text-gray-800 p-2 rounded-full cursor-pointer shadow-md z-20"
                onClick={handleNext}
              >
                &#62;
              </div>
            </>
          )}

          {/* Main Slider */}
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[600px]">
            <AnimatePresence initial={false}>
              <motion.div
                key={slides[currentIndex].id}
                className="w-full h-full relative"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={handleDragEnd}
              >
                <img
                  src={`/assets/${slides[currentIndex].image}`}
                  alt="Slide"
                  className="w-full h-full object-cover object-center rounded-3xl"
                />

                {/* Text Overlay */}
                <div className="absolute inset-0 flex justify-start items-center text-left text-white p-4 sm:p-6 md:p-8">
                  <div>
                    {slides[currentIndex].subtitle && (
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                        {slides[currentIndex].subtitle}
                      </h3>
                    )}
                    {slides[currentIndex].title && (
                      <h1 className="text-lg sm:text-2xl md:text-4xl font-bold leading-tight">
                        {slides[currentIndex].title}
                        <br />
                        <span className="text-indigo-300">{slides[currentIndex].span}</span>
                      </h1>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mini Banners Directly Underneath the Slider */}
        <div className="flex flex-col md:flex-row gap-4 mt-6 w-full">
          {miniBanners.map((banner) => (
            <div
              key={banner.id}
              className="relative w-full md:w-1/2 h-[300px] overflow-hidden rounded-3xl"
            >
              <img
                src={`/assets/${banner.image}`}
                alt={`Mini Banner ${banner.id}`}
                className="absolute inset-0 w-full h-full object-cover object-center rounded-3xl"
              />

              {/* Mini Banner Text and Buttons */}
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-6">
                {banner.subtitle && (
                  <h3 className="text-sm md:text-base font-semibold mb-2">
                    {banner.subtitle}
                  </h3>
                )}
                {banner.title && (
                  <h2 className="text-lg md:text-2xl font-bold leading-tight">
                    {banner.title}
                    <br />
                    <span className="text-indigo-300">{banner.span}</span>
                    {banner.span2 && (
                      <span className="text-indigo-300"> {banner.span2}</span>
                    )}
                  </h2>
                )}

                {/* Special for Static 1 Download Buttons */}
                {banner.id === 1 && (
                  <div className="flex gap-4 mt-4">
                    {/* App Store Button */}
                    <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-full">
                      <i className="fab fa-apple text-lg"></i>
                      <span className="text-xs">Download on the App Store</span>
                    </button>

                    {/* Google Play Button */}
                    <button className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-full">
                      <i className="fab fa-google-play text-lg"></i>
                      <span className="text-xs">Get it on Google Play</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Centered Large Text After Mini Banners */}
        <div className="mt-10 text-center">
          <h1 className="font-poppins text-3xl md:text-5xl font-semibold leading-[98px] text-violet-600 w-full md:w-[717px] mx-auto mb-4">
            Send A Gift Card and Collect Rewards
          </h1>
          <p className="font-poppins text-[9px] md:text-[14px] text-gray-600 w-full md:w-[717px] mx-auto">
            Moola provides unbeatable deals on the gift cards you love. Buy for a friend or better yet, for yourself and collect rewards. With Moola, giving the perfect gift and saving money on the brands you love has never been easier or more convenient. Shop over 250 brands across Canada.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
