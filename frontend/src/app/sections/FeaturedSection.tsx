'use client'
import Card from "../components/Card";
import indigo from "../../../public/IndiGo-Logo.png";
import amazon from "../../../public/amazon@logotyp.us.png";
import wallmart from "../../../public/walmart-seeklogo.png";
import card_skeleton from "../../../public/card-skeleton.png";

import Image from "next/image";
export default function FeaturedSection() {
  return (
    <div className="h-screen w-full flex items-center justify-center max-sm:px-10 md:px-20">
      <div className=" w-full flex flex-col items-center justify-center max-sm:text-center rounded-xl">
        <h1 className=" text-3xl md:text-5xl text-secondary font-bold max-sm:px-5 md:px-22 py-5">
          FEATURED GIFT CARDS
        </h1>

        <h2 className="text-dark mb-10">
          Explore exclusive offers and cashback rewards from featured brands.
        </h2>
        

        <div className="grid max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Card imgSrc={indigo} giftPercent="1%" bgColor="bg-indigo-800" />
          <Card
            imgSrc={amazon}
            giftPercent="6%"
            bgColor="bg-gradient-to-r from-red-800 to-orange-600"
          />
          <Card
            imgSrc={wallmart}
            giftPercent="3%"
            bgColor="bg-gradient-to-r from-blue-700 to-blue-900"
          />

          <Card
            imgSrc={amazon}
            giftPercent="4%"
            bgColor="bg-gradient-to-r from-red-800 to-orange-600"
          />

          <button className="relative  hover:cursor-pointer hover:scale-105 transition-all duration-500">
            <Image
              src={card_skeleton}
              alt="card-skeleton"
              className="max-sm:h-[150px]"
            />
            <p className="text-gray-800 text-xl md:text-2xl absolute max-sm:top-10 max-sm:left-3 md:top-20  md:left-20 font-semibold">
              See More Offers
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
