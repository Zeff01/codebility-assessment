import Posts from "@/components/Posts";
import React from "react";
import TitleFront from "@/components/TitleFront";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-5">
      <TitleFront />
      <Posts />
    </div>
  );
};

export default Home;
