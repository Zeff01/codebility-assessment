"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <section className="max-w-[1216px] w-full mx-auto my-4 px-4 min-[1250px]:px-0">
      <div className="flex flex-col gap-4">
        <Swiper
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="w-full cursor-pointer"
        >
          <SwiperSlide className="relative w-full">
            <div className="relative w-full h-auto">
              <Image
                src="https://www.moola.com/assets/media/images/2024/slide4.png"
                alt="Gift cards"
                height={500}
                width={1216}
                className="object-cover w-full h-auto rounded-3xl"
              />
              <div className="absolute top-[21%] left-[8%] ">
                <h3 className="text-white text-sm min-[600px]:text-lg min-[750px]:text-xl min-[900px]:text-2xl min-[1150px]:text-4xl transition-all duration-300">
                  GIFTING MADE EASIER
                </h3>
                <h2 className="text-white max-[600px]:leading-6  max-[900px]:leading-10 text-[20px] min-[600px]:text-[27px] min-[750px]:text-[35px] min-[900px]:text-[41px] min-[1150px]:text-[53px] font-semibold  transition-all duration-300">
                  Buy a Gift Card, <br /> Get Cash Back Rewards
                </h2>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative w-full">
            <div className="relative w-full h-auto">
              <Image
                src="https://www.moola.com/assets/media/images/2025/spring.png"
                alt="Gift deals"
                height={500}
                width={1216}
                className="object-cover w-full h-auto rounded-3xl"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex flex-col min-[730px]:flex-row gap-4 min-[730px]:gap-8">
          <div className="relative w-full cursor-pointer">
            <Image
              src="https://www.moola.com/assets/media/images/static1.png"
              alt="Send gift cards through text"
              height={242}
              width={592}
              className="rounded-3xl w-full h-auto"
            />
            <div className="absolute left-[27px] top-[15px] min-[900px]:top-[27px] ">
              <h3 className="text-white text-base min-[450px]:text-xl min-[730px]:text-base min-[900px]:text-xl min-[1150px]:text-2xl font-semibold leading-7 min-[900px]:leading-9 max-w-[260px]">
                Send gift cards instantly through text.
              </h3>
              <div className="flex mt-[13px] min-[900px]:mt-[18px] min-[1150px]:mt-[25px] max-w-[286px]">
                <Image
                  src="https://www.moola.com/assets/media/icons/app-store.svg"
                  alt="App store button"
                  height={50}
                  width={140}
                />
                <Image
                  src="https://www.moola.com/assets/media/icons/play-store.svg"
                  alt="Google play button"
                  height={50}
                  width={140}
                />
              </div>
            </div>
          </div>
          <div className="relative w-full cursor-pointer">
            <Image
              src="https://www.moola.com/assets/media/images/static4.png"
              alt="Invite friends"
              height={242}
              width={592}
              className="rounded-3xl w-full h-auto"
            />
            <h3 className="absolute left-[27px] top-[15px] min-[900px]:top-[27px] max-w-[220.92px] text-white text-base min-[450px]:text-xl min-[730px]:text-base min-[900px]:text-xl min-[1150px]:text-2xl max-[1150px]:leading-7 font-semibold leading-9">
              Invite a friend & get 1% Moola cash back on all their purchases.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
