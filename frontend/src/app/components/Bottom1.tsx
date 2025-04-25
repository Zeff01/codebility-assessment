import React from "react";
import { giftCards } from "../data/data_bottom1";
import Image from "next/image";

const Bottom1 = () => {
  return (
    <div className="mt-8 md:mt-12 lg:mt-16 px-4 sm:px-6">
      {/* Info */}
      <div className="text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto">
        <h2 className="text-[#4c0d94] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Send A Gift Card and{" "}
          <span className="block mt-1"> Collect Rewards</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 max-w-prose mx-auto leading-relaxed">
          Moola provides unbeatable deals on the gift cards you love. Buy for a
          friend or better yet, for yourself and collect rewards. With Moola,
          giving the perfect gift and saving money on the brands you love has
          never been easier or more convenient. Shop over 250 brands across
          Canada.
        </p>
      </div>
      {/* Boxes */}
      <div className="flex flex-wrap md:justify-between justify-center gap-4 mt-8">
        {giftCards.map((card) => (
          <div
            key={card.id}
            className="w-[48%] sm:w-[230px]  xl:[18%] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            {/* Logo section with gray background */}
            <div className="bg-gray-100 p-4 flex items-center justify-center h-36 sm:h-40">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl flex items-center justify-center p-3 shadow-sm">
                <Image
                  src={card.logo}
                  alt={card.name}
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
            </div>
            {/* info boxes */}
            <div className="p-3 sm:p-4">
              {/* Brand name and text content */}
              <div className="pt-2">
                <h3 className="text-gray-700 font-medium text-base sm:text-lg">
                  {card.name}
                </h3>
                {card.buyText && (
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    {card.buyText}
                  </p>
                )}
              </div>

              {/* Green discount bar */}
              {card.discount && (
                <div className="w-full text-xs sm:text-sm bg-[#339933] text-white font-medium mt-2 px-3 sm:px-4 py-1 text-left rounded-r-full">
                  {card.discount}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bottom1;
