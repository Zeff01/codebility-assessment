import React from "react";

interface LogoProps {
  color?: string; // default color of the text
  boxColor?: string; // optional background box color
}

export default function Logo({ color = "text-purple-900", boxColor = "bg-purple-400" }: LogoProps) {
  return (
    <div className="flex items-center">
      <div className={`w-8 h-8 ${boxColor} rounded-lg mr-3 flex items-center justify-center`}>
        <span className="text-white font-black text-lg">M</span>
      </div>
      <span className={`${color} text-2xl font-bold`}>moola</span>
    </div>
  );
}
