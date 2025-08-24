import React from 'react';

interface SlideVisualsProps {
  image: string;
}

export default function SlideVisuals({ image }: SlideVisualsProps) {
  return (
    <div className="hidden md:flex flex-1 justify-end items-center relative">
      {image === "gift-cards" && (
        <div className="relative z-10">
          <div className="w-64 h-40 bg-blue-600 rounded-2xl rotate-12 shadow-2xl flex items-center justify-center text-white font-bold text-lg">
            Indigo
          </div>
          <div className="w-64 h-40 bg-blue-500 rounded-2xl -rotate-6 -mt-20 ml-16 shadow-2xl flex items-center justify-center text-white font-bold text-lg">
            Walmart
          </div>
          <div className="w-64 h-40 bg-gray-800 rounded-2xl rotate-3 -mt-24 ml-8 shadow-2xl flex items-center justify-center text-white font-bold text-lg">
            Amazon
          </div>
          <div className="w-64 h-40 bg-black rounded-2xl -rotate-12 -mt-20 ml-24 shadow-2xl flex items-center justify-center text-white font-bold text-lg">
            Saks
          </div>
          <div className="w-64 h-40 bg-red-500 rounded-2xl rotate-6 -mt-24 ml-4 shadow-2xl flex items-center justify-center text-white font-bold text-lg">
            Target
          </div>
        </div>
      )}

      {image === "spring-gifts" && (
        <div className="flex space-x-8">
          <div className="w-40 h-40 bg-pink-200 rounded-2xl shadow-2xl rotate-3"></div>
          <div className="w-48 h-48 bg-yellow-100 rounded-2xl shadow-2xl -rotate-2"></div>
          <div className="w-32 h-64 bg-yellow-400 rounded-t-2xl shadow-2xl flex flex-col justify-between p-4">
            <div className="w-full h-8 bg-yellow-500 rounded"></div>
            <div className="w-16 h-16 bg-white rounded-full mx-auto"></div>
          </div>
        </div>
      )}
    </div>
  );
}
