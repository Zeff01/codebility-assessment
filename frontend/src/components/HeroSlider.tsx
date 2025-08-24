"use client";

import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { slides } from '@/data/slidesData';
import SlideContent from './SlideContent';

export default function HeroSlider() {
  return (
    <div className="mt-0 relative">
      <div
        className="w-full rounded-3xl overflow-hidden shadow-2xl relative"
        style={{ height: "450px" }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <SlideContent slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}