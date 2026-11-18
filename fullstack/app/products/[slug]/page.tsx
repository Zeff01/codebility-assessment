import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProductGallery } from "@/features/products/components/product-gallery";
import { ProductInfo } from "@/features/products/components/product-info";
import { ProductGridSkeleton } from "@/features/products/components/product-skeletons";
import { RelatedProducts } from "@/features/products/components/related-products";
import { getProductBySlug, getProductSlugs } from "@/features/products/services/product.service";

export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return { title: "Product not found" };

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.images[0].src, alt: product.images[0].alt }],
    },
  };
}

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="space-y-20">
      <div className="space-y-6">
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted">
            <li>
              <Link href="/" className="transition hover:text-foreground">
                Products
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="capitalize">{product.category}</li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="truncate font-medium text-foreground">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
        </div>
      </div>

      <Suspense fallback={<ProductGridSkeleton />}>
        <RelatedProducts product={product} />
      </Suspense>
    </div>
  );
}
