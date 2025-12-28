import React from "react";
import Card1 from "../components/Card1";
import Slider1 from "../components/Slider1";
import Carousel from "../components/Carousel";
import Cards2 from "../components/Cards2";

function Home() {
  return (
    <>
      <Carousel/>
      <Card1 />
      <Slider1 />
      <Cards2/>
    </>
  );
}

export default Home;