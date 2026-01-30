"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Carousel } from "@/components/ui/carousel";

const testimonials = [
  {
    text: "This is a great app that saves money. Saved over 200 dollars so far!",
    platform: "Apple Store",
    image: "/apple_icon.png",
  },
  {
    text: "Great way to save on the stuff you buy anyway. I always check Moola first when shopping online or in-store. It also helped me organize all my rewards cards in one place which stream-lined my wallet.",
    platform: "Google",
    image: "/google_icon.png",
  },
  {
    text: "It's very easy to use, has more than 200 brands, and also lots of discounts and bonuses. Once you've paid you can receive the gift cards within 1 minute.",
    platform: "Google Play",
    image: "/google_play_icon.png",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border bg-background px-6 py-16 md:px-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-[var(--moola-purple)] md:text-4xl">
          What Do Customers Think About Moola
        </h2>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-md">
          <Carousel
            className="min-h-[320px] sm:min-h-[320px]"
            autoPlay
            autoPlayInterval={6000}
            indicatorVariant="dark"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-6
                  p-6
                  text-center
                  sm:min-h-[280px]
                  md:flex-row
                  md:items-center
                  md:gap-10
                  md:p-10
                  md:text-left
                "
              >
                {/* Left: Image and ratings */}
                <div className="flex flex-col items-center gap-4 md:items-start md:gap-5">
                  <div className="relative h-14 w-32 md:h-16 md:w-36">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.platform}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 128px, 144px"
                      unoptimized
                    />
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {testimonial.platform}
                  </p>
                </div>

                {/* Right: Testimonial text */}
                <div className="flex flex-1 flex-col justify-center">
                  <p className="text-base leading-relaxed text-foreground md:text-lg">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
