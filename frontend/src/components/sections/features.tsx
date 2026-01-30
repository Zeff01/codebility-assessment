"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

export function Features() {
  return (
    <section className="px-6 py-4 md:px-20 md:py-6">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        {/* LEFT FEATURE */}
        <Card className="relative h-[280px] w-full overflow-hidden rounded-3xl border-0 p-0 shadow-lg md:h-[320px]">
          <div className="relative h-full w-full overflow-hidden rounded-3xl">
            <Image
              src="/feature_img_1.png"
              alt="Send gift cards instantly through text"
              fill
              className="rounded-3xl object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>

          {/* Text overlay */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="px-6 py-8 md:px-8 md:py-10">
              <div className="max-w-md space-y-4 md:space-y-5">
                <h2 className="text-xl font-semibold leading-snug text-white md:text-2xl lg:text-3xl">
                  Send gift cards
                  <br />
                  instantly through
                  <br />
                  text.
                </h2>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  <Button
                    variant="secondary"
                    className="bg-[var(--moola-purple)] text-white hover:bg-[var(--moola-purple)]/90"
                    asChild
                  >
                    <a className="flex items-center gap-2">
                      <Apple className="h-4 w-4" />
                      <span className="text-[11px] leading-tight">
                        Download on the
                        <br />
                        App Store
                      </span>
                    </a>
                  </Button>

                  <Button
                    variant="secondary"
                    className="bg-[var(--moola-purple)] text-white hover:bg-[var(--moola-purple)]/90"
                    asChild
                  >
                    <a className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      <span className="text-[11px] leading-tight">
                        GET IT ON
                        <br />
                        Google Play
                      </span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* RIGHT FEATURE */}
        <Card className="relative h-[280px] w-full overflow-hidden rounded-3xl border-0 p-0 shadow-lg md:h-[320px]">
          <div className="relative h-full w-full overflow-hidden rounded-3xl">
            <Image
              src="/feature_img_2.png"
              alt="Invite a friend and earn Moola cash back"
              fill
              className="rounded-3xl object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>

          {/* Text overlay */}
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="px-6 py-8 md:px-8 md:py-10">
              <div className="max-w-md">
                <h2 className="text-xl font-semibold leading-snug text-white md:text-2xl lg:text-3xl">
                  Invite a friend &
                  <br />
                  get 1% Moola cash
                  <br />
                  back on all their
                  <br />
                  purchases.
                </h2>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
