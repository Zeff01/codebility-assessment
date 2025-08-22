/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Hero() {
  return (
    <div className="hero-component px-4 md:px-0">
      <div className="hero-container mx-auto my-4 max-w-[1216px] w-full">
        {/* Swiper Hero */}
        <div className="swiper-container">
          <Swiper
            id="myswiper"
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="rounded-[25px]"
          >

            <SwiperSlide>
              <div className="swiper-slide slide-a relative">
                {/* Background Image */}
                <img
                  src="/images/slide4.png"
                  alt="Gifting Made Easier"
                  className="w-full h-auto rounded-[25px]"
                />

                {/* Text Container */}
                <div className="absolute top-4 md:top-30 left-4 md:left-20 flex flex-col items-start max-w-[90%] md:max-w-md">
                  {/* Subtitle */}
                  <h3 className="text-white text-base md:text-3xl font-semibold leading-snug drop-shadow-lg mb-2">
                    GIFTING MADE EASIER
                  </h3>

                  {/* Title with line break */}
                  <h1 className="text-white text-xl sm:text-2xl md:text-5xl font-bold leading-snug drop-shadow-xl">
                    Buy A Gift Card,
                    <span className="block md:inline">Get Cash Back Rewards</span>
                  </h1>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide B */}
            <SwiperSlide>
              <div className="swiper-slide slide-b relative">
                <img
                  src="/images/spring.png"
                  alt="Spring Deals"
                  className="w-full h-auto rounded-[25px]"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>


        {/* Static Side Images */}
        <div className="static-image-container flex flex-col md:flex-row mt-4 gap-4">

          {/* Static Image A */}
          <div className="flex-1 relative rounded-3xl overflow-hidden h-64 md:h-72" >
            <img
              src="/images/static1.png"
              alt="Send gift card phone"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent p-4 md:p-6 flex flex-col justify-center rounded-3xl">
              <h1 className="text-white font-bold text-base sm:text-lg md:text-3xl leading-snug mb-2 md:mb-4 max-w-[70%]">
                Send gift cards <span className="block">instantly through</span>
                <span className="block">text.</span>
              </h1>
              <div className="flex gap-3 mt-3 flex-wrap">
                <img src="/images/app-store.svg" alt="App Store" className="h-10 md:h-12 w-auto" />
                <img src="/images/play-store.svg" alt="Google Play" className="h-10 md:h-12 w-auto" />
              </div>
            </div>
          </div>

          {/* Static Image B */}
          <div className="flex-1 relative rounded-3xl overflow-hidden h-64 md:h-72" >
            <img
              src="/images/static4.png"
              alt="Invite a friend phone"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent p-4 md:p-6 flex flex-col justify-start rounded-3xl">
              <h1 className="text-white font-bold text-lg md:text-2xl leading-snug max-w-[70%]">
                Invite a friend &amp;
                <span className="block">get 1% Moola cash</span>
                <span className="block">back on all their</span>
                <span className="block">purchases.</span>
              </h1>
            </div>
          </div>

        </div>
        {/* Centered Headline */}
        <div className="mt-8 md:mt-12 text-center px-4 md:px-0">
          <h2 className="text-violet-900 text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
            Send A Gift Card and <span className="block">Collect Rewards</span>
          </h2>
          <p className="text-black text-xs sm:text-sm md:text-sm leading-tight max-w-3xl mx-auto">
            Moola provides unbeatable deals on the gift cards you love. Buy for a friend or better yet, for yourself and collect rewards. With Moola, giving the perfect gift
            and saving money on the brands you love has never been easier or more convenient. Shop over 250 brands across Canada.
          </p>
        </div>


        {/* Cards */}
        <div className="mt-12 max-w-[1216px] mx-auto px-4 md:px-0">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">

            {/* Card 1 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-lg duration-300 flex flex-col text-center 
        hover:shadow-2xl hover:scale-110 transform transition-transform">

              {/* Image Section */}
              <div className="bg-gray-200 p-4 flex justify-center items-center">
                <img
                  src="https://api.moola.com/assets/images/192168207_49_-174967065.jpg"
                  alt="DoorDash"
                  className="w-20 h-20 object-cover rounded-xl"
                />
              </div>

              {/* Text Section */}
              <div className="bg-white p-4 flex flex-col items-stretch text-justify mt-2">
                <h5 className="font-semibold text-sm mb-1">DoorDash</h5>
                <span className="text-sm text-black">
                  Buy Now And Get
                </span>
                <div className="mt-1 bg-[#393] text-white text-[14px] font-extrabold leading-[125%] px-2 py-[3px] rounded-tr-[10px] rounded-br-[10px]">
                  1.5% More
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-lg duration-300 flex flex-col text-center 
        hover:shadow-2xl hover:scale-110 transform transition-transform">

              <div className="bg-gray-200 p-4 flex justify-center items-center">
                <img
                  src="https://api.moola.com/assets/images/192168207_49_-1478502323.jpg"
                  alt="Pestsmart"
                  className="w-20 h-20 object-cover rounded-xl"
                />
              </div>

              <div className="bg-white p-4 flex flex-col items-stretch text-justify mt-2">
                <h5 className="font-semibold text-sm mb-1">Pestsmart</h5>
                <span className="text-sm text-black">
                  Buy Now And Get
                </span>
                <div className="mt-1 bg-[#393] text-white text-[14px] font-extrabold leading-[125%] px-2 py-[3px] rounded-tr-[10px] rounded-br-[10px]">
                  6 % More
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-lg duration-300 flex flex-col text-center 
        hover:shadow-2xl hover:scale-110 transform transition-transform">

              <div className="bg-gray-200 p-4 flex justify-center items-center">
                <img
                  src="https://api.moola.com/assets/images/192168207_51_859781913.jpg"
                  alt="Esso™ and Mobil™ Gift Cards"
                  className="w-20 h-20 object-cover rounded-xl"
                />
              </div>

              <div className="bg-white p-4 flex flex-col items-stretch text-justify mt-2">
                <h5 className="font-semibold text-sm mb-1">Esso™ and Mobil™ Gift Cards</h5>
                <span className="text-sm text-black">
                  Buy Now And Get
                </span>
                <div className="mt-1 bg-[#393] text-white text-[14px] font-extrabold leading-[125%] px-2 py-[3px] rounded-tr-[10px] rounded-br-[10px]">
                  1% More
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-lg duration-300 flex flex-col text-center 
        hover:shadow-2xl hover:scale-110 transform transition-transform">

              <div className="bg-gray-200 p-4 flex justify-center items-center">
                <img
                  src="https://api.moola.com/assets/images/192168207_49_-347948234.png"
                  alt="Walmart Canada Gift Cards"
                  className="w-20 h-20 object-cover rounded-xl"
                />
              </div>

              <div className="bg-white p-4 flex flex-col items-stretch text-justify mt-2">
                <h5 className="font-semibold text-sm mb-1">Walmart Canada Gift Cards</h5>
                <span className="text-sm text-black">
                  Buy Now And Get
                </span>
                <div className="mt-1 bg-[#393] text-white text-[14px] font-extrabold leading-[125%] px-2 py-[3px] rounded-tr-[10px] rounded-br-[10px]">
                  1% More
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-lg duration-300 flex flex-col text-center 
        hover:shadow-2xl hover:scale-110 transform transition-transform">

              <div className="bg-gray-200 p-4 flex justify-center items-center">
                <img
                  src="https://api.moola.com/assets/images/192168207_56_-2024490794.png"
                  alt="Starbucks"
                  className="w-20 h-20 object-cover rounded-xl"
                />
              </div>

              <div className="bg-white p-4 flex flex-col items-stretch text-justify mt-2">
                <h5 className="font-semibold text-sm mb-1">Starbucks</h5>
              </div>
            </div>

            {/* Card 6 */}
            <div className="rounded-xl border border-gray-200 overflow-hidden shadow-lg duration-300 flex flex-col text-center 
             hover:shadow-2xl hover:scale-110 transform transition-transform">

              <div className="bg-gray-200 p-4 flex justify-center items-center">
                <img
                  src="https://api.moola.com/assets/images/d65c70c5-c7aa-4161-9e5b-118ad8b71740.jpg"
                  alt="Amazon.ca"
                  className="w-20 h-20 object-cover rounded-xl"
                />
              </div>

              <div className="bg-white p-4 flex flex-col items-stretch text-justify mt-2">
                <h5 className="font-semibold text-sm mb-1">Amazon.ca</h5>
              </div>
            </div>

          </div>
        </div>


        {/* Virtual Gifting With A Personal Touch */}
        <div className="mt-8 md:mt-12 px-4 md:px-0">
          <div className="bg-[#FBE6FF] rounded-[2rem] p-6 md:p-12 text-center
                  shadow-[0_8px_20px_rgba(1,1,1,0.25)]">


            <h2 className="text-violet-900 text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug mb-4">
              Virtual Gifting With A Personal Touch
            </h2>
            <p className="text-black text-xs sm:text-sm md:text-sm leading-tight max-w-3xl mx-auto mb-8">
              Moola provides unbeatable deals on the gift cards you love. Buy for a friend or better yet, for yourself and collect rewards. With Moola, giving the perfect gift
              and saving money on the brands you love has never been easier or more convenient. Shop over 250 brands across Canada.
            </p>


            <div className="flex flex-col md:flex-row items-center gap-6 mt-6">

              <div className="flex-1 rounded-3xl p-6 flex flex-col justify-center text-justify md:text-left ">
                <h3 className="text-violet-900 text-xl md:text-2xl font-bold mb-4">
                  Hassle-free
                  <span className="block">  long distance gift giving</span>
                </h3>
                <p className="text-black text-xs sm:text-sm md:text-sm leading-tight max-w-md">
                  Say goodbye to the stress of finding the perfect gift and having it arrive on-time. With Moola,
                  you can easily search, purchase and send digital gift cards in less than 1 minute.
                </p>
              </div>

              <div className="flex-none">
                <img
                  src="/images/attachment.gif"
                  alt="Hassle-free gifting"
                  className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-xl"
                />
              </div>


              <div className="flex-1 rounded-3xl p-6 flex flex-col justify-center text-justify md:text-left ">
                <h3 className="text-violet-900 text-xl md:text-2xl font-bold mb-4">
                  Monitor gift delivery as if <span className="block">  you&apos;re there</span>
                </h3>
                <p className="text-black text-xs sm:text-sm md:text-sm leading-tight max-w-md">
                  Stop questioning if a recipient has received your gift. Track gift card delivery and open rates on the Moola App.
                </p>
              </div>

            </div>

          </div>
        </div>


        {/* Moola Saves Money On Gifts & */}
        <div className="mt-8 md:mt-12 text-center px-4 md:px-0 ">
          <h2 className="text-violet-900 text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4">
            Moola Saves Money On Gifts & <span className="block">Everyday Essentials</span>
          </h2>
          <p className="text-black text-xs sm:text-sm md:text-sm leading-tight max-w-3xl mx-auto mb-5">
            When we think about saving money, we often think about cutting back on non-essentials. However, that&apos;s usually not possible for special occasions or everyday purchases - gifts and dinners add up. So, making some small tweaks + great deals can make a big impact on your wallet.
            Through Moola, you can easily buy gift cards to your favourite stores at a lower price. Why not shop smarter, score deals, and savour the savings!
          </p>
        </div>

      </div >
    </div >
  );
}
