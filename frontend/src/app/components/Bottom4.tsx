import React from "react";
import { testimonials, renderStars } from "../data/data_bottom4";
import Image from "next/image";

const Bottom4 = () => {
  return (
    <div className="mt-12">
      {/* info */}
      <div className="text-center mb-12">
        <h2 className="text-[#4c0d94] text-3xl sm:text-xl lg:text-3xl font-bold mb-4">
          What Do Customers Think About Moola?
        </h2>
      </div>

      {/* boxes */}
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto px-4 sm:px-6">
        {testimonials.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className="bg-white w-[350px] rounded-3xl shadow-md p-8 flex flex-col items-center"
            >
              {/* Testimonial text */}
              <p className="text-gray-700 text-center mb-6">
                {testimonial.text}
              </p>

              {/* Star rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={i < testimonial.rating ? "#FFD700" : "#fff"}
                    className="w-6 h-6 mx-0.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>

              {/* Source logo */}
              <div className="h-8 w-36 relative">
                <Image
                  src={testimonial.logoSrc}
                  width={144}
                  height={32}
                  alt={testimonial.source}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Bottom4;
