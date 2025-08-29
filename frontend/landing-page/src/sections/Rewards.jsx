import React from "react";
import Cards from "../components/Cards";

const Rewards = () => {
  return (
    <>
      <div className="p-6 gap-4">
        <h1 className="text-3xl md:text-4xl font-semibold text-center text-purple-700">
          Send A Gift Card
          <br />
          and Collect Rewards
        </h1>
        <p className="text-gray-600 text-center mt-4 max-w-3xl text-sm mx-auto">
            Moola provides unbeatable deals on the gift cards you love. Buy for a friend or better yet, for yourself and collect rewards. With Moola, giving the perfect gift and saving money on the brands you love has never been easier or more convenient. Shop over 250 brands across Canada.
        </p>
        <Cards />
      </div>
    </>
  );
};

export default Rewards;
