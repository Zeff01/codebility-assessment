import React from 'react';

export default function FloatingElements() {
  return (
    <>
      <div className="absolute top-20 left-10 opacity-20 animate-pulse">
        <div className="w-16 h-16 bg-white/30 rounded-full"></div>
      </div>
      <div className="absolute top-32 right-20 opacity-30 animate-bounce">
        <div className="w-8 h-8 bg-pink-300/50 rounded-full"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 opacity-25">
        <div className="w-12 h-12 bg-yellow-300/40 rounded-full animate-pulse"></div>
      </div>
    </>
  );
}