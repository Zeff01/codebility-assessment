'use client';

import React from 'react';
import { HoverEffect } from '@/components/ui/hover-effect';
import { getHoverEffectItems } from '@/lib/brands-data';

const GiftCardBrands = () => {
  const hoverEffectItems = getHoverEffectItems();

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Send A Gift Card and
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {' '}
              Collect Rewards
            </span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Moola provides unbeatable deals on the gift cards you love. Buy for
            a friend or relative and collect cashback rewards on every purchase.
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-6 shadow-sm">
          <HoverEffect items={hoverEffectItems} className="gap-6 md:gap-8" />
        </div>
      </div>
    </section>
  );
};

export default GiftCardBrands;
