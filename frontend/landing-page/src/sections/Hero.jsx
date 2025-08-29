import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 gap-6 p-6 items-stretch w-full max-w-7xl min-h-[420px] md:min-h-[520px] lg:min-h-[600px] xl:min-h-[680px] md:grid-cols-4 md:grid-rows-8">
      {/* Card 1 - Main promotional card with title and image */}
      <div className="md:col-span-4 md:row-span-5 bg-purple-600 rounded-3xl flex flex-col md:flex-row justify-center items-center min-h-[180px] gap-6 overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-12 xl:p-16">
          <h1 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-bold text-white leading-tight mb-3">
            Save More on Every Purchase with Moola
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl xl:text-2xl font-medium mb-6 opacity-90">
            Discover exclusive deals, instant gift cards, and rewards every time
            you shop.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-400 hover:bg-indigo-600 text-white font-semibold rounded-full px-7 py-3 text-base md:text-lg shadow-lg transition-all"
          >
            Get Started
          </a>
        </div>
        <div className="w-full md:w-1/2 flex items-end">
          {/* Image */}
          <img
            src="/cards.png"
            alt="Hero cards"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="md:col-span-2 md:row-span-3 bg-red-400 rounded-3xl p-6 xl:p-8 flex flex-col sm:flex-row md:flex-col justify-center items-start min-h-[120px] relative overflow-hidden">
        <div className="relative z-10 flex flex-col justify-center">
          <p className="text-white text-sm sm:text-xl xl:text-2xl font-semibold mb-4 break-words">
            Send gift <br />
            cards instantly <br /> through text.
          </p>
          <div className="flex flex-row flex-wrap gap-2 w-full justify-start md:justify-start items-center z-10">
            {/* App Store */}
            <a
              href="#"
              className="text-white px-3 py-2 sm:px-5 sm:py-3 xl:px-6 xl:py-4 min-w-[110px] xl:min-w-[130px] flex items-center justify-center rounded-full font-semibold bg-indigo-800 transition-all hover:bg-indigo-900 text-[10px] sm:text-xs xl:text-sm"
            >
              <Icon icon="mdi:apple" className="w-5 h-5 xl:w-6 xl:h-6 mr-2" />
              <div className="flex flex-col text-left">
                <span className="text-[8px] sm:text-[9px] xl:text-[10px]">
                  Download on the
                </span>
                <span className="text-[9px] sm:text-xs xl:text-sm">
                  APP STORE
                </span>
              </div>
            </a>
            {/* Google Play */}
            <a
              href="#"
              className="text-white px-3 py-2 sm:px-5 sm:py-3 xl:px-6 xl:py-4 min-w-[110px] xl:min-w-[130px] flex items-center justify-center rounded-full font-semibold bg-indigo-800 transition-all hover:bg-indigo-900 text-[10px] sm:text-xs xl:text-sm"
            >
              <Icon
                icon="mdi:google-play"
                className="w-5 h-5 xl:w-6 xl:h-6 mr-2"
              />
              <div className="flex flex-col text-left">
                <span className="text-[8px] sm:text-[9px] xl:text-[10px]">
                  Get it on
                </span>
                <span className="text-[9px] sm:text-xs xl:text-sm">
                  GOOGLE PLAY
                </span>
              </div>
            </a>
          </div>
        </div>
        {/* Image */}
        <img
          src="/phone2.png"
          alt="Mobile phone with gift cards"
          className="absolute top-1 -right-0 h-full w-auto md:w-56 object-contain z-0"
        />
      </div>

      {/* Card 3 */}
      <div className="md:col-span-2 md:row-span-3 bg-gradient-to-bl from-purple-600 to-fuchsia-500 rounded-3xl flex items-center p-6 xl:p-8 min-h-[120px] relative overflow-hidden">
        <div className="text-white text-left w-56 z-10">
          <h2 className="text-xl sm:text-2xl xl:text-3xl font-semibold mb-2">
            Invite a friend & get 1% Moola cash back on all their purchases.
          </h2>
        </div>
        {/* Hand with phone asset, adjust src as needed */}
        <img
          src="/phone.png"
          alt="Hand holding phone"
          className="absolute right-4 -bottom-14 sm:-bottom-20 md:-bottom-24 h-56 sm:h-66 md:h-72 lg:h-96 w-auto object-cover z-0"
        />
      </div>
    </div>
  );
};

export default Hero;
