import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="container" style={{ marginTop: "10%" }}>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div
            className="containerCard"
            style={{
              backgroundImage: 'url("/img/c1phone.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "30px",
              overflow: "hidden",
              minHeight: "300px",
              color: "white",
              padding: "20px",
            }}
          >
            <div className="pt-4 ">
              {/* <h1 className="cardText">Send gift cards</h1> */}
              <h1 className="cardText1">
                Send gift cards instantly through text.
              </h1>
            </div>
            <div className="ps-3">
              <button className="btnStore ">
                <img src="img/app-store.svg" alt="" />
              </button>
              <button className="btnStore">
                <img src="img/play-store.svg" alt="" />
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div
            className="containerCard"
            style={{
              backgroundImage: 'url("/img/c2phone.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "30px",
              overflow: "hidden",
              minHeight: "300px",
              color: "white",
              padding: "20px",
            }}
          >
            <div className="pt-4 ">
              <h1 className="cardText2">
                Invite a friend & get 1% Moola cash back on all their purchases.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
