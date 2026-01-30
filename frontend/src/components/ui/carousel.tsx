"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  /** "light" = white dots (e.g. on dark hero), "dark" = black/dark dots (e.g. on light testimonials) */
  indicatorVariant?: "light" | "dark";
}

export function Carousel({
  children,
  className,
  autoPlay = false,
  autoPlayInterval = 5000,
  indicatorVariant = "light",
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState<number | null>(null);
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragStart, setDragStart] = React.useState<number | null>(null);
  const [dragOffset, setDragOffset] = React.useState(0);

  // Convert children to array safely
  const slides = React.useMemo(() => {
    return React.Children.toArray(children);
  }, [children]);

  const totalSlides = slides.length;

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1,
    );
  }, [totalSlides]);

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1,
    );
  }, [totalSlides]);

  // Touch handlers for swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    // Reset touch state
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse drag handlers for desktop
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || dragStart === null) return;
      const offset = e.clientX - dragStart;
      setDragOffset(offset);
    };

    const handleMouseUp = () => {
      if (!isDragging || dragStart === null) return;

      const distance = Math.abs(dragOffset);
      if (distance > minSwipeDistance) {
        if (dragOffset > 0) {
          goToPrevious();
        } else {
          goToNext();
        }
      }

      setIsDragging(false);
      setDragStart(null);
      setDragOffset(0);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging, dragStart, dragOffset, goToNext, goToPrevious]);

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, goToNext]);

  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Carousel container */}
      <div
        className="flex h-full select-none transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(calc(-${currentIndex * (100 / totalSlides)}% + ${isDragging ? dragOffset : 0}px))`,
          width: `${totalSlides * 100}%`,
          willChange: "transform",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="h-full flex-shrink-0"
            style={{ width: `${100 / totalSlides}%` }}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            type="button"
            className={cn(
              "h-2 rounded-full transition-all",
              indicatorVariant === "dark"
                ? currentIndex === index
                  ? "w-8 bg-neutral-800"
                  : "w-2 bg-neutral-400 hover:bg-neutral-600"
                : currentIndex === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
