import Image from "next/image";
import React from "react";

function Showcase() {
  return (
    <div className="h-screen flex justify-center items-center md:p-10">
      <div className="flex flex-col lg:flex-row items-center gap-8 p-4">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            height={200}
            width={200}
            className="mb-10 mx-auto lg:mx-0"
          />
          <div className="text-4xl lg:text-5xl font-semibold">
            Take control of your money
          </div>
          <div className="text-lg lg:text-xl text-gray-600 lg:w-96 mt-4">
            Track spending, save smarter, and achieve your financial goals with
            ease.
          </div>
          <button className="mt-6 bg-green-600 px-6 py-2 rounded-2xl cursor-pointer text-white font-medium hover:bg-green-400 transition">
            Get Started
          </button>
        </div>
        {/* Image */}
        <div className="flex-1">
          <Image
            src="/images/finance-showcase.svg"
            alt="showcase-img"
            width={600}
            height={600}
            priority
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
