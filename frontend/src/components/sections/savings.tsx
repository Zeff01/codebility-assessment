'use client';

import React from 'react';
import { FaRegCalendarAlt, FaTags, FaDownload } from 'react-icons/fa';

const Savings = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-medium text-sm uppercase tracking-wider">
            Save More
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
            Moola Saves Money On Gifts &
            <span className="text-purple-700"> Everyday Essentials</span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Where we find deals on everyday, whether we&apos;re talking about
            necessary purchases or occasional luxuries. Moola usually looks for
            opportunities to save money everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {/* Deals Each Week */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-pink-50 p-4 rounded-xl mr-5 text-pink-500 group-hover:bg-pink-100 transition-colors duration-300">
                  <FaRegCalendarAlt className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Deals Each Week
                </h3>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Each week, we feature new deals in the Moola marketplace where
                you can save up to 15% on your purchases compared to buying
                directly from retailers.
              </p>
            </div>
            <div className="px-8 pb-8">
              <button className="w-full py-3.5 bg-white border border-gray-300 rounded-lg text-gray-800 font-semibold hover:bg-gray-50 transition-colors flex justify-center items-center space-x-2 group-hover:border-pink-300 cursor-pointer">
                <span>SHOP DEALS</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Everyday Essentials */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-50 p-4 rounded-xl mr-5 text-purple-500 group-hover:bg-purple-100 transition-colors duration-300">
                  <FaTags className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Everyday Essentials
                </h3>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Moola has deals on all your everyday necessities such as
                groceries, fuel, dining, entertainment, and home essentials.
                Never pay full price again!
              </p>
            </div>
            <div className="px-8 pb-8">
              <button className="w-full py-3.5 bg-white border border-gray-300 rounded-lg text-gray-800 font-semibold hover:bg-gray-50 transition-colors flex justify-center items-center space-x-2 group-hover:border-purple-300 cursor-pointer">
                <span>SHOP ESSENTIALS</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Download App */}
          <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-50 p-4 rounded-xl mr-5 text-blue-500 group-hover:bg-blue-100 transition-colors duration-300">
                  <FaDownload className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Download App
                </h3>
              </div>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Download the Moola App and start collecting cash back and free
                gift vouchers. Never miss a deal or limited-time promotion.
              </p>
            </div>
            <div className="px-8 pb-8">
              <button className="w-full py-3.5 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-colors flex justify-center items-center space-x-2 cursor-pointer">
                <span>DOWNLOAD APP</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Savings;
