import React from "react";
import HeroCard from "./HeroCard";

const HeroGrid: React.FC = () => {
  return (
    <section className="px-4 py-8 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <HeroCard
          title="Buy Now"
          description="Explore the latest styles"
          image="/slide4.jpg"
        />
        <HeroCard
          title="Buy Now"
          description="Don't miss out this season"
          image="/slide5.jpg"
        />
      </div>
    </section>
  );
};

export default HeroGrid;
