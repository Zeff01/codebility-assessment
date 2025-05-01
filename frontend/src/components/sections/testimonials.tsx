'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { testimonialData } from '@/lib/testimonial-data';

// Star rating component for consistent rendering
const StarRating = () => (
  <div className="flex">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg
        key={star}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-yellow-500"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-purple-900 mb-6">
            What Customers Think About Moola
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join thousands of satisfied users who are saving money and earning
            rewards with Moola
          </p>
        </div>

        <div className="flex overflow-hidden py-8 relative">
          <div className="flex animate-carousel gap-6">
            {[...testimonialData, ...testimonialData].map(
              (testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="w-[350px] h-[250px] flex-shrink-0 bg-white rounded-xl shadow-lg p-6 border border-gray-100 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="h-12 w-12 rounded-full overflow-hidden relative">
                      <Image
                        src={testimonial.author.avatar}
                        alt={testimonial.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.author.handle}
                      </p>
                    </div>
                  </div>

                  {/* Star rating positioned directly below author info */}
                  <div className="mb-3">
                    <StarRating />
                  </div>

                  {/* Testimonial text with fixed height for alignment */}
                  <div className="flex-grow overflow-y-auto mb-2">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* Gradient fade effect on the sides */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
