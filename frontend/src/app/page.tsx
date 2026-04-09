'use client';

import { Navigation, HeroSection, WhyChooseSection } from '@/features';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        badge="The Future of Gifting is Here"
        title="Gifting Made Easier"
        description="Access over 250+ premium brands with instant delivery and exclusive cash back rewards. The boutique experience for digital rewards."
        primaryButtonText="Shop Gift Cards"
        secondaryButtonText="View Brands"
        stats={{ label: 'EARNED TODAY', value: '$42.50' }}
      />

      {/* Why Choose Section */}
      <WhyChooseSection />
    </div>
  );
}
