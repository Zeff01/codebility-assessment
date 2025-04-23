import React from "react";
import Card from "./Card";


type CardProps = {
    image: string;
    title: string;
    subtitle?: string;
    badgeText?: string;
    };

const cardData:CardProps[] = [
  {
    image: "petsmart.png",
    title: "Petsmart",
    subtitle: "Buy Now And Get",
    badgeText: "6% More",
  },
  {
    image: "walmart.png",
    title: "Walmart Canada",
    subtitle: "Buy Now And Get",
    badgeText: "1% More",
  },
  {
    image: "starbucks.jpg",
    title: "Starbucks",

  },
  {
    image: "esso.png",
    title: "Esso™ and Mobil™",
    subtitle: "Buy Now And Get",
    badgeText: "1% More",
  },
  {
    image: "amazon.png",
    title: "Amazon.ca",
    badgeText: "3% More",
  },
];

const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:p-[10em] my-8 lg:mt-0">
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          subtitle={card.subtitle || ""}
          badgeText={card.badgeText || ""}
        />
      ))}
    </div>
  );
};

export default CardGrid;