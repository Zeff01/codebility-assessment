import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/sections/header';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import GiftCardBrands from '@/components/sections/gift-card-brands';
import VirtualGifting from '@/components/sections/virtual-gifting';
import Savings from '@/components/sections/savings';
import Testimonials from '@/components/sections/testimonials';
import InteractiveFeatures from '@/components/sections/interactive-features';
import Footer from '@/components/sections/footer';

export const metadata: Metadata = {
  title: 'Moola - Gift Cards with Cashback Rewards',
  description:
    'Save money on gift cards to your favorite brands. Get cashback rewards with every purchase. Send gifts instantly with the Moola app.',
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <GiftCardBrands />
      <VirtualGifting />
      <Savings />
      <InteractiveFeatures />
      <Testimonials />
      <Footer />
    </main>
  );
}
