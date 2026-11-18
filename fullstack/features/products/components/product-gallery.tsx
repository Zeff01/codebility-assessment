"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/cn";
import type { ProductImage } from "../types";

export function ProductGallery({ images }: { images: ProductImage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-surface-muted ring-1 ring-border">
        <Image
          key={active.src}
          src={active.src}
          alt={active.alt}
          fill
          preload={activeIndex === 0}
          loading="eager"
          quality={90}
          sizes="(min-width: 1200px) 520px, (min-width: 1024px) 45vw, calc(100vw - 32px)"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3" role="tablist" aria-label="Product images">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show image ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "relative aspect-square overflow-hidden rounded-2xl bg-surface-muted transition",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
                index === activeIndex
                  ? "ring-2 ring-indigo-500 ring-offset-2 ring-offset-background"
                  : "opacity-60 ring-1 ring-border hover:opacity-100",
              )}
            >
              <Image src={image.src} alt="" fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
