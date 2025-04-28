import React, { useState, useEffect } from "react";
import "./Hero.css";
import Header from "../header/Header";
import Card from "../card/Card";
import Giftcards from "../giftcards/Giftcards";
import Appfeatures from "../appfeatures/Appfeatures";
import Deals from "../deals/Deals";
import Customers from "../customers/Customers";
import Footer from "../footer/Footer";

const Hero = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const [progressHero, setProgressHero] = useState(0);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer;
    if (!isHovered) {
      if (progressHero < 100) {
        timer = setTimeout(() => {
          setProgressHero(progressHero + 1);
        }, 50);
      } else {
        setCurrentHero((prev) => (prev === 0 ? 1 : 0));
        setProgressHero(0);
      }
    }
    return () => clearTimeout(timer);
  }, [progressHero, isHovered]);

  const handleIndicatorClick = (index) => {
    setCurrentHero(index);
    setProgressHero(0);
  };

  return (
    <>
      <div className="container">
        <Header />

        {currentHero === 0 ? (
          <div className="container containerTitle d-flex justify-content-between align-items-center text-white">
            <div className="d-flex flex-column">
              <h2>GIFTING MADE EASIER</h2>
              <h1 className="bold-text">Buy A Gift Card,</h1>
              <h1 className="bold-text">Get Cash Back Rewards</h1>
              <div className="btnTitle mt-3">
                <button
                  className="btn btn-primary me-2 btn-animated"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  SHOP WEEKLY DEALS
                </button>
              </div>
            </div>
            <div className="handlogoContainer">
              <img src="img/cards.png" alt="Hand Logo" />
              <div>
                <img
                  className={`coins ${isHovered ? "animate" : ""}`}
                  src="img/coins.png"
                  alt="Coins"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="container containerTitle d-flex justify-content-between align-items-center text-white">
            <div className="d-flex flex-column">
              <h2>SPRING SAVINGS ARE HERE</h2>
              <h1 className="bold-text">One Month of</h1>
              <h1 className="bold-text">Super Gift Deals</h1>
              <div className="btnTitle mt-3">
                <button
                  className="btn btn-primary btn-animated"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  SHOP GIFT CARDS
                </button>
              </div>
            </div>
            <div className="handlogoContainer giftLogo">
              <img src="img/gifts.png" alt="Gifts Logo" />
              <div>
                <img
                  className={`sunflowers ${isHovered ? "animate" : ""}`}
                  src="img/sunflowers.png"
                  alt="Coins"
                />
              </div>
            </div>
          </div>
        )}

        <div className="container indicatorContainer">
          <div className="d-flex justify-content-center mt-4 gap-3">
            {[0, 1].map((index) => (
              <div
                key={index}
                className={`indicator ${currentHero === index ? "active" : ""}`}
                onClick={() => handleIndicatorClick(index)}
              >
                {currentHero === index && (
                  <div
                    className="fill"
                    style={{ width: `${progressHero}%` }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Card />
      <Giftcards />
      <Appfeatures />
      <Deals />
      <Customers />
      <Footer />
    </>
  );
};

export default Hero;
