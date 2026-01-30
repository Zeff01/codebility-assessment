"use client";

import Image from "next/image";
import { Carousel } from "@/components/ui/carousel";

export function Hero() {
  return (
    <section className="w-full overflow-hidden px-4 py-4 md:px-20 md:py-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="w-full overflow-hidden rounded-3xl">
          <Carousel
            className="
              w-full
              aspect-[5/3]
              sm:h-[340px]
              md:h-[420px]
              lg:h-[500px]
              xl:h-[560px]
            "
          >
            {/* Slide 1 - With text overlay */}
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-neutral-900">
              <Image
                src="/corousel_img_1.png"
                alt="Gift cards hero"
                fill
                className="object-contain md:object-cover"
                priority
                sizes="100vw"
                unoptimized
              />

              {/* Text overlay */}
              <div className="absolute inset-0 z-10 flex items-start justify-start">
                <div className="px-4 pt-15 pb-10 sm:px-6 sm:pt-8 md:px-16 md:pt-12 md:pb-14 lg:px-20 lg:pt-14">
                  <div className="space-y-4 text-white sm:space-y-6">
                    <p className="text-xs font-semibold uppercase tracking-wider sm:text-sm md:text-base">
                      GIFTING MADE EASIER
                    </p>
                    <div className="space-y-1 sm:space-y-2">
                      <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        Buy A Gift Card,
                      </h1>
                      <h1 className="text-2xl font-bold leading-tight tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        Get Cash Back Rewards
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-neutral-900">
              <Image
                src="/carousel_img_2.png"
                alt="Spring savings hero"
                fill
                className="object-contain md:object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
