"use client";

import Image from "next/image";
import send from "../../../public/uil_message.png";
import share from "../../../public/share.png";
import cards from "../../../public/cards.png";
import arrow from "../../../public/arrow.png";

import { randomPeople } from "../client";

export default function Hero() {
  return (
    <section className="px-10 md:px-20 lg:px-60  max-sm:px-10 bg-gradient-to-b from-primary to-secondary  h-screen md:h-[90vh]  flex flex-col  sm:justify-center overflow-hidden ">
      <div className="md:flex items-center justify-between gap-20">
        {/* Left Part */}
        <div className="max-sm:py-10 flex flex-col max-sm:items-center max-sm:text-center gap-3 z-40 text-gray ">
          <h1 className="text-[1.8rem] md:text-[1.5rem] lg:text-[2.8rem] uppercase tracking-tight">
            Gifting Made Easier
          </h1>
          <h2 className="font-bold text-[2.5rem] md:text-[2.5rem] lg:text-[4rem]">
            Buy A Gift Card,{" "}
            <span className="block mt-2"> Get Cash Back Rewards</span>
          </h2>

          <div className="flex items-center justify-between max-w-[300px] ">
            <button className="h-12 hover:bg-blue-950 transition-all duration-500 hover:cursor-pointer shadow-blue-800 shadow-lg bg-dark_blue uppercase text-sm px-10 rounded-full">
              shop now
            </button>
            <span className="max-sm:hidden hover:cursor-pointer flex items-center justify-center gap-2 hover:scale-105 transition-all duration-500 ">
              Learn More <Image src={arrow} alt="arrow-icon" />{" "}
            </span>
          </div>

          {/* Bottom Left Part */}
          <div className="flex max-sm:hidden flex-col gap-5 text-sm absolute md:bottom-4 ">
            <div className="flex items-center gap-5">
              <div className="h-10 w-10 rounded-md bg-white/20 flex items-center justify-center">
                <Image src={send} alt="send icon" className="h-8 w-8" />
              </div>

              <p className="text-gray max-sm:text-xl">
                Send gift cards instantly through texts.
              </p>
            </div>

            <div className="flex items-center  gap-5">
              <div className="h-10 w-10 rounded-md bg-white/20 flex items-center justify-center">
                <Image src={share} alt="send icon" className="h-8 w-8" />
              </div>

              <p className="text-gray max-sm:text-xl">
                Invite a friend & get{" "}
                <span className="text-3xl font-semibold text-primary">1%</span>{" "}
                <span className="block">
                  {" "}
                  Moola cash back on all their purchases
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Right Part  */}
        <div className="  md:mt-10 md:h-[648px] py-3 md:flex-1 md:relative flex flex-col">
          <Image
            src={cards}
            alt=""
            className="md:absolute md:h-full md:w-auto md:max-w-none "
          />

          {/* Bottom Right Part */}
          <div className=" md:w-[25rem] lg:w-[35rem] flex max-sm:flex-col max-sm:py-5 gap-5 items-center justify-center md:absolute md:bottom-0">
            <div className="flex items-center justify-center -space-x-2">
              {randomPeople.map((user) => (
                <img
                  key={user.id}
                  src={user.imgSrc}
                  alt=""
                  className="h-10 w-10 rounded-full inline-block ring-2 ring-white"
                />
              ))}
              <p className="text-xl animate-bounce font-semibold ring-2 ring-gray text-white bg-primary h-12 w-12 rounded-full flex items-center justify-center">
                2M+{" "}
              </p>
            </div>

            <p className="text-gray">Downloaded more than 2M+ in a year </p>
          </div>
        </div>
      </div>
    </section>
  );
}
