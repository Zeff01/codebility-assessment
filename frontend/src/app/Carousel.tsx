// components/Carousel.tsx
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselProps {
  slides: string[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function Carousel({
  slides,
  autoPlay = true,
  autoPlayInterval = 3000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [imageDimensions, setImageDimensions] = useState<
    { width: number; height: number }[]
  >([]);
  const [containerHeight, setContainerHeight] = useState<number>(400);

  // Kunin ang dimensions ng mga images
  useEffect(() => {
    const loadImageDimensions = async () => {
      const dimensions = await Promise.all(
        slides.map((src) => {
          return new Promise<{ width: number; height: number }>((resolve) => {
            const img = document.createElement("img");
            img.onload = () => {
              resolve({ width: img.width, height: img.height });
            };
            img.src = src;
          });
        }),
      );
      setImageDimensions(dimensions);
    };
    loadImageDimensions();
  }, [slides]);

  // I-adjust ang height base sa kasalukuyang image
  useEffect(() => {
    if (imageDimensions[currentIndex]) {
      const { width, height } = imageDimensions[currentIndex];
      // Compute aspect ratio at i-set ang height
      const containerWidth = window.innerWidth;
      const calculatedHeight =
        (height / width) * Math.min(containerWidth, 1200);
      setContainerHeight(calculatedHeight);
    }
  }, [currentIndex, imageDimensions]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (imageDimensions[currentIndex]) {
        const { width, height } = imageDimensions[currentIndex];
        const containerWidth = window.innerWidth;
        const calculatedHeight =
          (height / width) * Math.min(containerWidth, 1200);
        setContainerHeight(calculatedHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex, imageDimensions]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg">
      {/* Dynamic height container */}
      <div
        className="relative w-full transition-all duration-300"
        style={{ height: `${containerHeight}px` }}
      >
        {slides.map((slide: string, index: number) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-0 right-0 flex justify-center gap-1.5 sm:gap-2 md:gap-2.5 px-2">
        {slides.map((_: string, index: number) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ease-in-out
              ${
                index === currentIndex
                  ? "bg-blue-500 w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5"
                  : "bg-white/50 w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5"
              }
              hover:cursor-pointer
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
