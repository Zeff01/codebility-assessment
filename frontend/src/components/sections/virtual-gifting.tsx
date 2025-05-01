'use client';

import React from 'react';
import Image from 'next/image';
import { FaGift, FaRocket } from 'react-icons/fa';

const VirtualGifting = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 rounded-full blur-3xl opacity-30 translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-indigo-700">
            Virtual Gifting With A Personal Touch
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Choose the perfect digital gift for any occasion. Personalize your
            gift card with a custom message and schedule delivery at just the
            right moment—all from the Moola app.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-xl mr-5 shadow-md">
                  <FaGift className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Hassle-free gift giving
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Say goodbye to shipping delays and gift selection stress.
                Purchase and send thoughtful digital gift cards in less than a
                minute, no matter the distance.
              </p>
              <div className="mt-6 flex justify-end">
                <span className="text-sm font-medium text-purple-700 flex items-center cursor-pointer">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 relative">
            {/* GIF without phone mockup */}
            <div className="relative mx-auto w-[280px] h-[560px] z-10">
              <Image
                src="/mobile-gif.gif"
                alt="Moola app interface"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-purple-100">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-xl mr-5 shadow-md">
                  <FaRocket className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Real-time delivery tracking
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Know exactly when your gift is received and opened with our
                real-time tracking system. Experience the joy of giving as if
                you were there in person.
              </p>
              <div className="mt-6 flex justify-end">
                <span className="text-sm font-medium text-purple-700 flex items-center cursor-pointer">
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualGifting;
