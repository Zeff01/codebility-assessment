import React from "react";
import giftcardsData from "./../json/giftcards.json"; // <- import the JSON
import "./Giftcards.css";

const Giftcards = () => {
  return (
    <>
      <div className="container mt-5 text-center">
        <h1 className="giftcardTitle bold-text">
          Send A Gift Card & Collect Rewards
        </h1>
        <p className="giftcardText regular-text mx-auto">
          Moola provides unbeatable deals on the gift cards you love. Buy for a
          friend or better yet, for yourself and collect rewards. With Moola,
          giving the perfect gift and saving money on the brands you love has
          never been easier or more convenient. Shop over 250 brands across
          Canada.
        </p>
      </div>

      <div className="container mt-5">
        <div className="row">
          {giftcardsData.map((card) => (
            <div key={card.id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
              <div
                className="giftcard"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  minHeight: "300px",
                  color: "white",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="containerGiftcard text-center">
                  <img
                    style={{ width: "auto", height: "100px" }}
                    src={card.logo}
                    alt={card.brand}
                  />
                  <p className="mt-3 bold-text cardText">{card.brand}</p>

                  <div className="d-flex justify-content-center align-items-center mt-4 gap-3  bold-text">
                    <button className="btn btn-light ">Buy Now</button>
                    <p className="mb-0 ">
                      Get <span className="cardText">{card.reward}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Giftcards;
