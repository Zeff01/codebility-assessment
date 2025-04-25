import React from "react";
import { featureCards } from "../data/data_bottom3";
import Image from "next/image";

const Bottom3 = () => {
  return (
    <div>
      <div className="mt-8 md:mt-12 lg:mt-16 px-4 sm:px-6">
        {/* Info */}
        <div className="text-center w-full lg:w-[70%]  mx-auto">
          <h2 className="text-[#4c0d94] text-3xl sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 leading-tight">
            Moola Saves Money On Gifts &
            <span className="block mt-1">Everyday Essentials</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6  mx-auto leading-relaxed">
            When we think about saving money, we often think about cutting back
            on non-essentials. However, that's usually not possible for special
            occasions or everyday purchases - gifts and dinners add up. So,
            making some small tweaks + great deals can make a big impact on your
            wallet. Through Moola, you can easily buy gift cards to your
            favourite stores at a lower price. Why not shop smarter, score
            deals, and savour the savings!
          </p>
        </div>
      </div>
      {/* Boxes */}
      <div className="flex flex-wrap justify-center gap-8 mt-10 place-items-center">
        {featureCards.map((card) => {
          return (
            <div
              key={card.id}
              className=" relative w-[300px] h-[280px] bg-[#ececec] py-10 rounded-2xl  px-10 pb-25"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={card.icon}
                  alt="tag"
                  width={30}
                  height={30}
                  className="object-contain"
                />
                <h3 className="text-[#4c0d94] text-lg font-bold">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm mt-4">{card.description}</p>
              <button className="absolute bottom-8 py-4  bg-[#4c0d94] text-white font-medium  px-10 rounded-full text-sm uppercase tracking-wide hover:bg-[#7514e3] transition-all duration-300">
                {card.buttonText}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bottom3;
