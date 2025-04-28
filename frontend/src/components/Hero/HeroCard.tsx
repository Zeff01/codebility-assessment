import React from "react";

type HeroCardProps = {
  title: string;
  description: string;
  image: string;
};

const HeroCard: React.FC<HeroCardProps> = ({ title, description, image }) => {
  return (
    <div
      className="bg-cover bg-center h-64 md:h-56 rounded-lg flex items-center justify-center text-white"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="bg-black bg-opacity-40 p-6 rounded">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">{title}</h3>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default HeroCard;
