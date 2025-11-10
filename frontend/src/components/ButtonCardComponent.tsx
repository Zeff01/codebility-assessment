// components/ButtonCardComponent.tsx
import Image from "next/image";
import React from "react";

interface ButtonCardProps {
  title: string;
  description: string;
  buttonText: string;
}

const ButtonCardComponent: React.FC<ButtonCardProps> = ({
  title,
  description,
  buttonText,
}) => {
  return (
    <div className="flex flex-col justify-between bg-[#ececec] rounded-xl shadow-md border border-gray-200 px-8 py-11 w-full md:w-83 text-start">
      <div>
        <div className="flex items-center mb-4">
          <Image
            alt="Logo"
            width={35}
            height={35}
            src="info-card-tag.svg"/>
          <h2 className="text-[18px] font-semibold text-[#4c0d94] ">{title}</h2>
        </div>
        
        <p className="text-xs text-gray-600 mb-4">{description}</p>
      </div>
      <button className="text-sm bg-[#4c0d94] text-white py-4 w-full sm:w-47 rounded-full hover:bg-purple-700 transition">
        {buttonText}
      </button>
    </div>
  );
};

export default ButtonCardComponent;