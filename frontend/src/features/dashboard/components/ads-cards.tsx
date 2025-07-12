"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

/**
 * AdsCards component
 *
 * A responsive reusable ads cards component that can be used to create a ads cards.
 *
 * @returns AdsCards component
 *
 * @example
 * <AdsCards slides={slides} />
 */

interface Slide {
  id: number;
  bgImage: string;
  title: string;
}

function AdsCards() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slides: Slide[] = [
    {
      id: 1,
      bgImage: "/deals.png",
      title: "",
    },
    {
      id: 2,
      bgImage: "https://www.moola.com/spring.png",
      title: "",
    },
  ];

  const scrollToSlide = (index: number) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.scrollWidth / slides.length;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: "smooth",
      });
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    scrollToSlide(index);
  };

  // Update current slide based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const slideWidth = carouselRef.current.scrollWidth / slides.length;
        const newIndex = Math.round(scrollLeft / slideWidth);
        setCurrentSlide(newIndex);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, [slides.length]);

  return (
    <main className='w-full h-full max-h-[80vh] grid grid-cols-1 md:grid-cols-2 grid-rows-3 gap-4 py-4'>
      <section className='h-full row-span-2 md:col-span-2 rounded-3xl overflow-hidden relative'>
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className='flex items-center gap-4 h-full overflow-x-auto scrollbar-hide scroll-smooth'>
          {slides.map((slide) => (
            <section
              key={slide.id}
              className='rounded-3xl p-6 w-full h-full bg-cover bg-center flex items-center flex-shrink-0 min-w-[20rem]'
              style={{ backgroundImage: `url(${slide.bgImage})` }}>
              <div className='max-w-40 sm:max-w-52 md:max-w-1/2 break-words flex flex-col gap-4'>
                <p className='font-bold text-xs sm:text-base text-white md:text-2xl'>
                  {slide.title}
                </p>
              </div>
            </section>
          ))}
        </div>

        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2'>
          <div className='flex items-center gap-2'>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='rounded-3xl p-6 w-full h-full bg-[url("https://www.moola.com/static1.png")] bg-cover bg-center flex items-center'>
        <div className='max-w-28 sm:max-w-32 md:max-w-40 lg:max-w-52 xl:max-w-60 break-words flex flex-col gap-4'>
          <p className='font-bold text-xs sm:text-base text-white md:text-xl lg:text-2xl'>
            Send gift cards instantly through text.{" "}
          </p>
          <div className='flex items-center gap-2'>
            <Image
              src='https://www.moola.com/assets/media/icons/app-store.svg'
              alt='app-store'
              width={100}
              height={100}
            />
            <Image
              src='https://www.moola.com/assets/media/icons/play-store.svg'
              alt='play-store'
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
      <section className='rounded-3xl p-6 w-full h-full bg-[url("https://www.moola.com/static4.png")] bg-cover bg-center flex items-center'>
        <div className='max-w-28 sm:max-w-32 md:max-w-40 lg:max-w-52 xl:max-w-60 break-words flex flex-col gap-4'>
          <p className='font-bold text-xs sm:text-base text-white md:text-xl lg:text-2xl'>
            Invite a friend & get 1% Moola cash back on all their purchases.
          </p>
        </div>
      </section>
    </main>
  );
}

export default AdsCards;
