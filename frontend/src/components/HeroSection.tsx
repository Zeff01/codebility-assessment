"use client";

import React from 'react';
import SearchBar from './SearchBar';
import HeroSlider from './HeroSlider';
import FloatingElements from './FloatingElements';

export default function HeroSection() {
  return (
    <div className="relative pb-6">
      <div className="w-full bg-purple-800">
        <div className="max-w-7xl mx-auto">
          <SearchBar />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="w-full text-center">
          <HeroSlider />
          <FloatingElements />
        </div>
      </div>
    </div>
  );
}