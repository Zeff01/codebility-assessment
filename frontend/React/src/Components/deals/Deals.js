import React from "react";
import "./Deals.css";

const Deals = () => {
  const cardsDeals = [
    {
      id: 1,
      title: "Deals each week",
      description:
        "Each week, we feature new deals in the Moola Marketplace where you can save up to 15% on popular brands. Check out this week's feature deal.",
      button: "SHOP DEALS",
      img: "/img/deals1.png",
    },
    {
      id: 2,
      title: "Everyday Essentials",
      description:
        "Moola has deals on all your everyday essentials such as grocery, fuel, pharmacy, food delivery, and more. It all adds up to great savings!",
      button: "SHOP ESSENTIALS",
      img: "/img/deals2.png",
    },
    {
      id: 3,
      title: "Download App",
      description:
        "Download the Moola App and start collecting cash back and bonus gift vouchers.",
      button: "DOWNLOAD APP",
      img: "/img/deals3.png",
    },
  ];
  return (
    <>
      <div
        className="container  text-center mb-5"
        style={{ marginTop: "8rem", marginBottom: "2rem" }}
      >
        <h1 className="giftcardTitle bold-text">
          Moola Saves Money On Gifts & Everyday Essentials
        </h1>
        <p className="giftcardText regular-text mx-auto">
          When we think about saving money, we often think about cutting back on
          non-essentials. However, that's usually not possible for special
          occasions or everyday purchases - gifts and dinners add up. So, making
          some small tweaks + great deals can make a big impact on your wallet.
          Through Moola, you can easily buy gift cards to your favourite stores
          at a lower price. Why not shop smarter, score deals, and savour the
          savings!
        </p>
      </div>

      <div className="container">
        <div className="row">
          {cardsDeals.map((card) => (
            <div key={card.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div
                className="dealsCard"
                style={{
                  backgroundImage: `url('${card.img}')`,
                }}
              >
                <div>
                  <h5 className="bold-text cardTitle">{card.title}</h5>
                  <p className="regular-text mt-3 cardDescription">
                    {card.description}
                  </p>
                </div>
                <div className="dealsButton">
                  <button className="btn">{card.button}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Deals;
