"use client";

import React, { useState } from 'react';
import { Users, Gift, Apple, Play } from 'lucide-react';
import QRModal from './QRModal';

export default function FeatureCards() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {/* Left Card - Gift Cards via Text */}
        <div
          onClick={() => setIsQRModalOpen(true)}
          className="bg-gradient-to-br from-orange-300 to-pink-400 rounded-3xl p-6 relative overflow-hidden cursor-pointer group hover:scale-105 transition-transform duration-300 min-h-[280px]"
        >
          <div className="flex items-center justify-between h-full">
            <div className="flex-1 pr-4">
              <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight mb-4">
                Send gift cards instantly through text.
              </h3>

              <div className="flex flex-col gap-2 max-w-[280px]">
                <button className="bg-purple-800 text-white px-4 py-2 rounded-2xl text-sm font-semibold flex items-center justify-center hover:bg-purple-900 transition-colors">
                  <Apple className="w-4 h-4 mr-2" />
                  Download on the App Store
                </button>
                <button className="bg-purple-800 text-white px-4 py-2 rounded-2xl text-sm font-semibold flex items-center justify-center hover:bg-purple-900 transition-colors">
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  GET IT ON Google Play
                </button>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="hidden md:block relative">
              <div className="w-40 h-64 bg-white rounded-2xl shadow-xl p-3 relative">
                <div className="w-full h-full bg-gray-50 rounded-xl flex flex-col">
                  {/* Phone Header */}
                  <div className="flex items-center justify-center py-3 border-b border-gray-200">
                    <Gift className="w-6 h-6 text-purple-600 mr-2" />
                    <span className="text-gray-600 font-medium text-xs">Wrapping Your Gift...</span>
                  </div>

                  {/* Message Preview */}
                  <div className="flex-1 p-3 space-y-2">
                    <div className="text-xs text-gray-500 text-center leading-tight">
                      Just a little note from us to wish you the 🎁 best birthday yet!
                    </div>

                    {/* App Icons */}
                    <div className="flex justify-center space-x-2 mt-4">
                      <div className="w-8 h-8 bg-green-500 rounded-lg"></div>
                      <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                      <div className="w-8 h-8 bg-green-400 rounded-lg"></div>
                      <div className="w-8 h-8 bg-yellow-400 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card - Refer Friends */}
        <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl p-6 relative overflow-hidden min-h-[280px]">
          <div className="flex items-center justify-between h-full">
            <div className="flex-1 pr-4">
              <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight">
                Invite a friend & get 1% Moola cash back on all their purchases.
              </h3>
            </div>

            {/* Phone Mockups */}
            <div className="hidden md:flex items-center space-x-3">
              {/* First Phone */}
              <div className="w-32 h-52 bg-white rounded-2xl shadow-xl p-2 transform rotate-12">
                <div className="w-full h-full bg-gray-900 rounded-xl flex flex-col items-center justify-center">
                  <div className="grid grid-cols-2 gap-1 p-2">
                    <div className="w-8 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">W</span>
                    </div>
                    <div className="w-8 h-6 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">CP</span>
                    </div>
                    <div className="w-8 h-6 bg-blue-400 rounded flex items-center justify-center">
                      <Gift className="w-3 h-3 text-white" />
                    </div>
                    <div className="w-8 h-6 bg-white rounded flex items-center justify-center">
                      <span className="text-black text-xs font-bold">AP</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Phone */}
              <div className="w-32 h-52 bg-white rounded-2xl shadow-xl p-2 transform -rotate-6">
                <div className="w-full h-full bg-gray-50 rounded-xl flex flex-col">
                  <div className="p-3 flex-1 flex flex-col justify-center">
                    <div className="text-center mb-3">
                      <Users className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600 font-medium">Share Moola with a friend</div>
                    </div>
                    <div className="w-full h-6 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">INVITE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <QRModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
    </>
  );
}