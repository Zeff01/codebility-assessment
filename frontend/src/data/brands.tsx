import { Coffee } from "lucide-react";
import React from "react";

export const brands = [
  {
    id: 1,
    name: "Esso™ and Mobil...",
    description: "Buy Now And Get",
    reward: "1% More",
    textColor: "text-blue-800",
    isPartial: false,
    logo: (
      <div className="flex items-center">
        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-2">
          <span className="text-white font-bold text-lg">E</span>
        </div>
        <div className="text-blue-800 font-bold text-xl">Mobil</div>
      </div>
    ),
  },
  {
    id: 2,
    name: "Petsmart",
    description: "Buy Now And Get",
    reward: "6% More",
    textColor: "text-pink-600",
    isPartial: false,
    logo: (
      <div className="text-center">
        <div className="text-blue-600 font-bold text-2xl">PET</div>
        <div className="text-pink-500 font-bold text-2xl">SMART</div>
      </div>
    ),
  },
  {
    id: 3,
    name: "Walmart Canada",
    description: "Buy Now And Get",
    reward: "1% More",
    textColor: "text-black",
    isPartial: false,
    logo: (
      <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center">
        <span className="text-white font-bold text-2xl">W</span>
      </div>
    ),
  },
  {
    id: 4,
    name: "DoorDash",
    description: "Buy Now And Get",
    reward: "1.5% More",
    textColor: "text-black",
    isPartial: false,
    logo: (
      <div className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center">
        <span className="text-white font-bold text-xl">DD</span>
      </div>
    ),
  },
  {
    id: 5,
    name: "Starbucks",
    description: "",
    reward: "",
    textColor: "text-black",
    isPartial: false,
    logo: (
      <div className="w-20 h-20 bg-green-700 rounded-full flex items-center justify-center">
        <Coffee className="w-10 h-10 text-white" />
      </div>
    ),
  },
  {
    id: 6,
    name: "Amazon.ca",
    description: "",
    reward: "",
    textColor: "text-black",
    isPartial: true,
    logo: (
      <div className="w-20 h-16 bg-gray-800 rounded-xl flex items-center justify-center">
        <span className="text-white font-bold text-sm">amazon.ca</span>
      </div>
    ),
  },
];
