import React from "react";

type CardProps = {
  image: string;
  title: string;
  subtitle: string;
  badgeText: string;
};

const Card: React.FC<CardProps> = ({ image, title, subtitle, badgeText }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <div className="h-24 flex items-center justify-center bg-gray-100">
        <img src={image} alt={title} className=" object-contain " style={{height:`min(5em) `}}/>
      </div>
      <div className="p-4">
        <h3 className="text-sm lg:text-lg text-nowrap font-semibold text-gray-800">{title}</h3>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p> || <><br/></>}
        <div className="mt-2">
          {badgeText && <span className="inline-block bg-green-500 text-white text-xs font-bold py-1 px-2 rounded-r-full w-full">{badgeText}</span>}
        </div>
      </div>
    </div>
  );
};
export default Card;