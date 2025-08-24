"use client";

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BackgroundPattern from '@/components/BackgroundPattern';
import FeatureCards from '@/components/FeatureCards';
import GiftCardBrands from '@/components/GiftCardBrands';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BackgroundPattern />
      <FeatureCards />
      <GiftCardBrands />
      <Footer />
    </div>
  );
}