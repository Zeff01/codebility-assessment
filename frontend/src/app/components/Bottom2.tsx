import React from "react";
import Image from "next/image";
import phone from "../../../public/images/phone.gif";

const Bottom2 = () => {
  return (
    <div className="mt-20 md:mt-24 lg:mt-28 px-4 sm:px-6 rounded-2xl bg-purple-50 shadow-xl ">
      <div className="md:py-16 lg:py-20  py-10 max-w-6xl mx-auto">
        {/* Heading and main description */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-purple-900 text-3xl sm:text-4xl lg:text-2xl font-bold mb-6">
            Virtual Gifting With A Personal Touch
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl mx-auto">
            You can't always be there in person for special celebrations, but
            you can always send your regards and congratulations through email
            or text.{" "}
            <span className="italic">It's the thought that counts!!</span>
            Through Moola, you can send gifts from big and niche brands to your
            loved ones instantly.
          </p>
        </div>

        {/* Three-column section with phone in middle */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 lg:gap-8">
          {/* Left column */}
          <div className="w-full md:w-1/3">
            <h3 className="text-purple-800 text-xl text-center md:text-left sm:text-2xl font-bold mb-4">
              Hassle-free <br />
              long distance gift giving
            </h3>
            <p className="text-gray-700 text-center md:text-left">
              Say goodbye to the stress of finding the perfect gift and having
              it arrive on-time. With Moola, you can easily search, purchase and
              send digital gift cards in less than 1 minute.
            </p>
          </div>

          {/* Middle column - Phone image */}
          <div className="w-full md:w-1/3 flex justify-center ">
            <div className="relative w-[280px] h-[280px]">
              <Image
                src={phone}
                alt="Moola gift card app interface"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/3">
            <h3 className="text-purple-800 text-xl text-center md:text-left sm:text-2xl font-bold mb-4">
              Monitor gift delivery as if you're there
            </h3>
            <p className="text-gray-700 text-center md:text-left">
              Stop questioning if a recipient has received your gift. Track gift
              card delivery and open rates on the Moola App.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom2;
