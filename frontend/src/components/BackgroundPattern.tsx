import React from 'react';

export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/10 to-transparent rounded-full transform rotate-45"></div>
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-indigo-500/10 to-transparent rounded-full transform -rotate-45"></div>
    </div>
  );
}