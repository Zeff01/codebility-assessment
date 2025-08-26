import React from "react";
import Image from "next/image";

const WhyChoose = () => {
  const features = [
    {
      img: "/images/secure.svg",
      label: "Your data is private and protected.",
    },
    {
      img: "/images/track.svg",
      label: "See where your money goes in real time.",
    },
    {
      img: "/images/goal.svg",
      label: "Set and achieve your financial goals.",
    },
  ];

  return (
    <div className="h-screen p-4 grid place-items-center">
      <div className="text-center">
        <div className="text-2xl lg:text-3xl font-semibold mt-8">
          Why Choose <span className="text-green-600"> FinTrack</span> ?
        </div>
        <div className="mt-4">
          <p className="text-gray-600 lg:w-1/2 mx-auto">
            FinTrack is the ultimate finance management tool that empowers you
            to take control of your financial future. With our intuitive
            interface and powerful features, you can easily track your spending,
            set budgets, and achieve your financial goals.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-10 lg:gap-20 mb-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center mt-4">
              <div className="relative w-48 h-48  lg:w-64 lg:h-64">
                <Image
                  src={feature.img}
                  alt={feature.label}
                  fill
                  className="object-contain mb-2"
                />
              </div>

              <span className="text-gray-700 text-lg text-center font-bold">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
