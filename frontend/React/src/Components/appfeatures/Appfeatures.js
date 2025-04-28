import React from "react";
import "./Appfeatures.css";

const Appfeatures = () => {
  const cardsData = [
    {
      id: 1,
      img: "img/mobilecard.png",
      title: "Hassle-free long distance gift giving",
      description:
        "Say goodbye to the stress of finding the perfect gift and having it arrive on-time. With Moola, you can easily search, purchase and send digital gift cards in less than 1 minute.",
    },
    {
      id: 2,
      img: "img/mobilecard.png",
      title: "Virtual Gifting with a Personal Touch",
      description:
        "You can't always be there in person for special celebrations, but you can always send your regards and congratulations through email or text. It's the thought that counts!! Through Moola, you can send gifts from big and niche brands to your loved ones instantly.",
    },
    {
      id: 3,
      img: "img/mobilecard.png",
      title: "Monitor gift delivery as if you're there",
      description:
        "Stop questioning if a recipient has received your gift. Track gift card delivery and open rates on the Moola App.",
    },
  ];

  return (
    <div className="waveBackground">
      <div className="container mt-5">
        <div className="row iconsContainer">
          <div className="col-lg-5 col-md-6 col-sm-12 mb-2 d-flex ">
            {/* <img src="img/g1.png" alt="attachment" className="giftIcon" /> */}
            <img
              src="img/attachment.gif"
              alt="attachment"
              className="attachmentGif "
            />
            {/* <img src="img/d1.png" alt="attachment" className="deliverIcon" /> */}
          </div>
        </div>
        <div className="row">
          {cardsData.map((card) => (
            <div key={card.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="featureCard">
                <div className="gifContainer"></div>
                <div>
                  <h5 className="bold-text cardTitle">{card.title}</h5>
                  <p className="regular-text mt-3 cardDescription">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appfeatures;
