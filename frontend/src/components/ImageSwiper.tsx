"use client";
import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface SliderProps {
  images: { src: string | StaticImageData; alt: string }[];
}

export default function CustomSlider({ images }: SliderProps) {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);
  const endX = useRef(0);
  const isDragging = useRef(false);
  const isSwipable = images.length > 1;

  const handleSwipe = () => {
    if (!isSwipable) return; // 🔹 Prevent swipe when only one image
    const diff = startX.current - endX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else {
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isSwipable) return;
    startX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwipable) return;
    endX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => handleSwipe();

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isSwipable) return;
    isDragging.current = true;
    startX.current = e.clientX;
  };

  useEffect(() => {
    if (!isSwipable) return; // 🔹 No listeners if only 1 image
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging.current) endX.current = e.clientX;
    };
    const handleMouseUp = () => {
      if (isDragging.current) {
        isDragging.current = false;
        handleSwipe();
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isSwipable]);

  return (
    <div
      className={`relative w-full overflow-hidden rounded-3xl select-none ${
        isSwipable ? "cursor-grab active:cursor-grabbing" : "cursor-default"
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 flex items-center justify-center pointer-events-none"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={1600}
              height={800}
              className="object-cover w-full h-full select-none"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      {isSwipable && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === current ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
