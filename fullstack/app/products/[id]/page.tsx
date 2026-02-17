import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getProductById, products } from '@/data/products';
import ProductDetails from '@/components/ProductDetails';

interface Props {
  params: Promise<{ id: string }>;
}

// Generate static paths for all products (ISR optimization)
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | E-Commerce Store`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

// Server Component - Product Detail Page
export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <li>
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Products
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 dark:text-white font-medium truncate max-w-[200px]">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          {/* Category */}
          <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
            {product.category}
          </span>

          {/* Title */}
          <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="mt-4 flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-200 dark:text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {product.rating} ({product.reviews.toLocaleString()} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mt-6">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-sm font-medium text-gray-900 dark:text-white">Description</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Stock Status & Add to Cart - Client Component with Redux */}
          <ProductDetails productId={product.id} fallbackProduct={product} />

          {/* Product Features */}
          <div className="mt-8 border-t dark:border-gray-700 pt-8">
            <h2 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
              Product Features
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Free shipping on orders over $50
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                30-day return policy
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                2-year warranty included
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
