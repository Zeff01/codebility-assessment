import { ResilientProductImage } from "@/components/product/ResilientProductImage";

type ProductImageProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function ProductImage({ src, alt, priority }: ProductImageProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900">
      <ResilientProductImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
