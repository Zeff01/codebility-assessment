"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [
  {
    image: "/banner1.png",
    text1: "GIFTING MADE EASIER",
    text2: "Buy A Gift Card,  Get Cash Back Rewards",
    btn: "Get Started",
  },
  {
    image: "/banner2.png",
    text1: "Instant Delivery",
    text2: "Receive gift cards instantly through your phone or email.",
    btn: "Explore Deals",
  },
];

export default function Hero() {
  return (
    <section className="bg-gray-50 container mx-auto max-w-[1216px] lg:mt-5 mt-0">
      <Swiper
        spaceBetween={30}
        centeredSlides
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col justify-center h-[500px] sm:bg-cover  bg-[position:-490px_0] bg-auto bg-no-repeat sm:bg-center sm:px-16 px-10 lg:rounded-lg rounded-none"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <p className="mt-4 sm:text-3xl text-lg text-stone-50 ">
                {slide.text1}
              </p>
              <h1 className="sm:text-5xl text-3xl font-extrabold text-stone-50 w-7/12">
                {slide.text2}
              </h1>

              <div className="mt-14">
                <Link
                  href="/signup"
                  className="rounded-full py-3.5 px-12 uppercase text-white bg-blue-700 border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {slide.btn}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
