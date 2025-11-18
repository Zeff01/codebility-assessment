import { heroCar } from "@/assets/images";
import React from "react";
import { Button } from "./ui/button";

export const Hero = () => {
  const scrollToFeatured = () => {
    const element = document.getElementById("featured");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        <div className="flex flex-col justify-center space-y-6 w-full lg:max-w-xl text-center lg:text-left">
          <div>
            <p className="badge-card inline-block">
              Premium Automotive Experience
            </p>
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Drive <span className="text-highlight">Excellence</span>
            </h1>
            <p className="theme-text-secondary text-base sm:text-lg max-w-2xl mx-auto lg:mx-0">
              Discover our curated collection of luxury vehicles. Experience
              performance, innovation, and elegance on every journey.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-center lg:justify-start">
            <Button variant="dark" size="lg" onClick={scrollToFeatured}>
              Explore Collection
            </Button>
            <Button variant="white" size="lg" onClick={scrollToContact}>
              Contact US
            </Button>
          </div>
        </div>

        <div className="hidden lg:block img-card relative lg:w-1/2">
          <img
            src={heroCar}
            alt="a black car with black background"
            className="relative rounded-2xl w-full h-auto shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
