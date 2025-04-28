import React from "react";
import "./Customers.css";

const Customers = () => {
  const cardsCustomer = [
    {
      id: 1,
      description:
        "Great way to save on the stuff you buy anyway. I always check Moola first when shopping online or in-store. It also helped me organize all my rewards cards in one place which stream-lined my wallet.",
      img: "/img/googlecard.png",
    },
    {
      id: 2,
      description:
        "It's very easy to use, has more than 200 brands, and also lots of discounts and bonuses. Once you've paid you can receive the gift cards within 1 minute.",
      img: "/img/gplaycard.png",
    },
    {
      id: 3,
      description:
        "This is a great app that saves money. Saved over 200 dollars so far!",
      img: "/img/applecard.png",
    },
  ];
  return (
    <>
      <div
        className="container  text-center mb-5"
        style={{ marginTop: "8rem", marginBottom: "2rem" }}
      >
        <h1 className="customersTitle bold-text">
          What Do Customers Think About Moola
        </h1>
      </div>
      <div className="container">
        <div className="row">
          {cardsCustomer.map((card) => (
            <div key={card.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div
                className="customersCard"
                style={{
                  backgroundImage: `url('${card.img}')`,
                }}
              >
                <div>
                  <h5 className="bold-text ">{card.title}</h5>
                  <p className="regular-text mt-3 ">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Customers;
