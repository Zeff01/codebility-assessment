import React from "react";
import { Button } from "./ui/button";

export const FeaturedCard = ({ index, car }) => {
  return (
    <div className="featured-card rounded-2xl overflow-hidden">
      <div className="relative overflow-hidden">
        <p className="absolute z-10 py-2 px-4 text-xs bg-[#8c1007] text-white rounded-full font-bold top-3 left-3 shadow-lg">
          {car.tag}
        </p>
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-auto object-cover rounded-t-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>

      <div className="p-4 space-y-2">
        <h1 className="theme-text font-bold text-xl">{car.name}</h1>
        <p className="text-highlight font-semibold">{car.price}</p>
      </div>
      <Button variant="gray" className="w-full rounded-2xl text-[Roboto]">
        View Details
      </Button>
    </div>
  );
};
