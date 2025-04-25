"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample slide data - you can replace with your actual content
const slideData = [
  {
    id: 1,
    subtitle: "GIFTING MADE EASIER",
    title: "Buy A Gift Card,",
    description: "Get Cash Back Rewards",
    buttonText: "SHOP WEEKLY DEALS",
    buttonLink: "/deals",
    image: "",
  },
  {
    id: 2,
    subtitle: "SPECIAL OFFERS",
    title: "Save On Gift Cards,",
    description: "Limited Time Offers",
    buttonText: "EXPLORE NOW",
    buttonLink: "/offers",
    image: "",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    customPaging: (i: number) => (
      <div className="w-2 h-2 mx-1 bg-white rounded-full opacity-50 hover:opacity-100"></div>
    ),
  };

  return (
    <div className="relative w-full max-w-7xl px-8 xl:px-0 rounded-[2rem] mx-auto  mt-4">
      <Slider {...settings}>
        {slideData.map((slide) => (
          <div key={slide.id}>
            <div className="relative w-full h-full overflow-hidden rounded-[2rem] bg-[#7514e3]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 flex flex-col md:flex-row items-center">
                {/* Text Content */}
                <div className="w-full md:w-1/2 z-10 text-white mb-8 md:mb-0">
                  <h2 className="text-lg sm:text-xl font-medium mb-3">
                    {slide.subtitle}
                  </h2>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3">
                    {slide.title}
                  </h1>
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.buttonLink}
                    className="inline-block bg-[#c932f5] text-white py-4 px-8 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
                  >
                    {slide.buttonText}
                  </Link>
                </div>

                {/* Image */}
                {slide.image ? (
                  <Image
                    src={slide.image}
                    alt="Gift Cards"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white opacity-50"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom styling for slick dots */}
      <style jsx global>{`
        .custom-dots {
          position: absolute;
          bottom: 20px;
          display: flex !important;
          justify-content: center;
          width: 100%;
        }
        .custom-dots li {
          margin: 0 4px;
        }
        .custom-dots li.slick-active div {
          opacity: 1;
        }
      `}</style>

      {/* under carousel */}
      <div className="flex justify-between items-center mt-1 gap-10 flex-col md:flex-row">
        <section className="md:w-1/2 h-50 bg-red-700 rounded-3xl w-full  ">
          {/* Content */}
        </section>
        <section className="md:w-1/2 h-50 bg-red-700 rounded-3xl w-full ">
          {/* Content */}
        </section>
      </div>
    </div>
  );
};

export default Hero;
