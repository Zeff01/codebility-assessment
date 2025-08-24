"use client";

import React from "react";
import clsx from "clsx";
import { brands } from "@/data/brands";

export default function GiftCardBrands() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-4">
            Send A Gift Card and
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold text-purple-600 mb-6">
            Collect Rewards
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-lg leading-relaxed">
            Moola provides unbeatable deals on the gift cards you love. Buy for
            a friend or better yet, for yourself and collect rewards. With
            Moola, giving the perfect gift and saving money on the brands you
            love has never been easier or more convenient. Shop over 250 brands
            across Canada.
          </p>
        </div>

        {/* Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className={clsx(
                "bg-white rounded-2xl shadow-xl hover:shadow-2xl shadow-gray-300 overflow-hidden transform transition-transform duration-300 hover:scale-105",
                brand.isPartial && "opacity-60"
              )}
            >

              {/* Logo Section */}
              <div className="bg-gray-100 p-8 flex items-center justify-center h-48">
                {brand.logo}
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3
                  className={clsx("font-semibold text-lg mb-2", brand.textColor)}
                >
                  {brand.name}
                </h3>

                {brand.description && (
                  <p className="text-gray-600 text-sm mb-3">
                    {brand.description}
                  </p>
                )}

                {brand.reward && (
                  <div className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {brand.reward}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
