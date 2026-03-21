import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import type { Metadata } from 'next';
import ProductContent from './ProductContent';
import ProductImageSkeleton from '@/components/skeletons/ProductImageSkeleton';
import { Product } from '@/lib/types/types';
import { ProductDetailsSkeleton } from '@/components/skeletons';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

async function getProduct(id: string): Promise<Product> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/api/products/${id}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    notFound();
  }
  const { data } = await res.json();
  return data as Product;
}

async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'}/api/products`, {
    cache: 'no-store',
  });
  if (!res.ok) return [];
  const { data } = await res.json();
  return data as Product[];
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;

  try {
    const product = await getProduct(id);
    return {
      title: `${product.name} | Shop`,
      description: product.description,
      openGraph: {
        title: product.name,
        description: product.description,
        type: 'website',
        url: `https://example.com/products/${id}`,
        images: [
          {
            url: product.image,
            width: 500,
            height: 500,
            alt: product.name,
          },
        ],
      },
    };
  } catch (error) {
    return {
      title: 'Product Not Found | Shop',
      description: 'The product you are looking for does not exist.',
    };
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);
  const allProducts = await getAllProducts();

  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8">
          <ol className="flex gap-2 text-sm text-gray-600">
            <li><a href="/" className="hover:text-gray-900">Home</a></li>
            <li>/</li>
            <li><a href="/products" className="hover:text-gray-900">Products</a></li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image Section */}
          <Suspense fallback={<ProductImageSkeleton />}>
            <div className="flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                priority
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Suspense>

          {/* Product Details */}
          <Suspense fallback={<ProductDetailsSkeleton />}>
            <ProductContent product={product} />
          </Suspense>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16 border-t pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You might also like</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map(p => (
                <a key={p.id} href={`/products/${p.id}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                    <div className="aspect-square bg-gray-200 overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-500">{p.category}</p>
                      <h3 className="font-semibold text-gray-900 line-clamp-2">{p.name}</h3>
                      <p className="text-lg font-bold text-gray-900 mt-2">${p.price.toFixed(2)}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-yellow-400">★</span>
                        <p className="text-sm text-gray-500">{p.rating} ({p.reviews})</p>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}