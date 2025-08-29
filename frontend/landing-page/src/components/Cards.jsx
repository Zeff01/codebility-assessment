import React from "react";

const Cards = () => {
  const cards = [
    {
      id: 1,
      title: "Walmart Canada",
      description: "Buy $500 worth of items and get 1% Moola cash.",
      imgSrc: "/walmart.png",
    },
    {
      id: 2,
      title: "Esso™ and Mobil™",
      description: "Buy $100-$250 worth of items and get 1% Moola cash.",
      imgSrc: "/esso.png",
    },
    {
      id: 3,
      title: "Amazon.ca",
      description: "",
      imgSrc: "/amazon.jpg",
    },
    {
      id: 4,
      title: "Petsmart",
      description: "Buy $100-$250 worth of items and get 6% Moola cash.",
      imgSrc: "/petsmart.png",
    },
    {
      id: 5,
      title: "Starbucks",
      description: "",
      imgSrc: "/starbucks.png",
    },
    {
      id: 6,
      title: "Doordash",
      description: "Buy $100-$200 worth of items and get 1.5% Moola cash",
      imgSrc: "/doordash.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition h-full min-h-[320px]"
          >
            <img
              src={card.imgSrc}
              alt={card.title}
              className="h-28 md:h-32 w-auto mb-4 object-contain rounded-sm"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              {card.title}
            </h2>
            <div className="flex-1 flex flex-col w-full">
              <p
                className={`text-gray-600 mb-4 text-sm ${
                  card.description ? "" : "invisible"
                }`}
              >
                &nbsp;{card.description}
              </p>
            </div>
            <button className="bg-gradient-to-bl from-purple-600 to-fuchsia-500 text-white px-5 py-2 rounded-full font-normal text-sm hover:from-purple-500 hover:to-purple-700 transition mt-auto">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
