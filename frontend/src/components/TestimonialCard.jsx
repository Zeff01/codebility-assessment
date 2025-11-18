import { Star } from "lucide-react";
import React from "react";

export const TestimonialCard = ({ testimonial, index }) => {
  return (
    <div className="testimonial-card rounded-2xl p-6 shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="text-[#8c1007]" fill="#8c1007" />
          ))}
        </div>

        <blockquote className="theme-text-secondary leading-relaxed italic text-base">
          "{testimonial.text}"
        </blockquote>
      </div>

      <div className="mt-6 pt-4 border-t theme-border">
        <p className="theme-text font-semibold text-lg">{testimonial.name}</p>
        <p className="text-[#8c1007] text-sm font-medium mt-1">
          {testimonial.position}
        </p>
      </div>
    </div>
  );
};
