import React from "react";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
  const testimonialData = [
    {
      text: "The electric car exceeded my expectations with its performance and range. Charging is quick and convenient.",
      name: "Alice Johnson",
      position: "Tech Enthusiast",
    },
    {
      text: "I love the sleek design and advanced features of the midnight edition. It's a joy to drive every day.",
      name: "Michael Smith",
      position: "Designer",
    },
    {
      text: "The performance GT delivers an exhilarating driving experience. The handling and acceleration are top-notch.",
      name: "Emily Davis",
      position: "Car Enthusiast",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="text-center space-y-4">
        <p className=" text-highlight font-bold">TESTIMONIALS</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Client Success Stories
        </h1>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {testimonialData.map((testimonial, index) => {
          return <TestimonialCard key={index} testimonial={testimonial} />;
        })}
      </div>
    </div>
  );
};
