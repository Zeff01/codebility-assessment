import React from "react";
import { FeaturedCard } from "./FeaturedCard";
import {
  electricCar,
  midnightEditionCar,
  performanceGT,
} from "@/assets/images";

export const Featured = () => {
  const featuredCars = [
    {
      tag: "Best Seller",
      name: "Midnight Edition",
      price: "$89,990",
      image: midnightEditionCar,
    },
    {
      tag: "New Arrival",
      name: "Performance GT",
      price: "$42,895",
      image: performanceGT,
    },
    {
      tag: "Eco Friendly",
      name: "Electric Velocity",
      price: "$103,800",
      image: electricCar,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 space-y-6">
      <div className="text-center space-y-4">
        <p className=" text-highlight font-bold">FEATURED COLLECTION</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Our Most Wanted Vehicles
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {featuredCars.map((car, index) => {
          return <FeaturedCard key={index} car={car} />;
        })}
      </div>
    </div>
  );
};
