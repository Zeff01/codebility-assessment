"use client";

import { DEFAULT_PRODUCT_IMAGE } from "@/lib/product-images";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type ResilientProductImageProps = Omit<ImageProps, "src" | "onError" | "alt"> & {
  src: string;
  alt: string;
};

function ResilientProductImageInner({
  src,
  alt,
  ...imageProps
}: ResilientProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...imageProps}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== DEFAULT_PRODUCT_IMAGE) {
          setCurrentSrc(DEFAULT_PRODUCT_IMAGE);
        }
      }}
    />
  );
}

export function ResilientProductImage(props: ResilientProductImageProps) {
  return <ResilientProductImageInner key={props.src} {...props} />;
}
