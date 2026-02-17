import { products } from '@/data/products';
import ProductsFilter from '@/components/ProductsFilter';

export default function HomePage() {
  // Get unique categories
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div id="home-page" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section id="hero-section" className="mb-12 text-center">
        <h1 id="hero-title" className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
          Welcome to Our Store
        </h1>
        <p id="hero-description" className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover our curated collection of premium products. Quality meets
          style in every item we offer.
        </p>
      </section>

      {/* Categories and Products with filtering */}
      <ProductsFilter categories={categories} />

      {/* Stats Section */}
      <section id="stats-section" className="mt-16 py-12 border-t dark:border-gray-800">
        <div id="stats-grid" className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div id="stat-products">
            <div id="stat-products-value" className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              {products.length}
            </div>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">Products</div>
          </div>
          <div id="stat-categories">
            <div id="stat-categories-value" className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
              {categories.length}
            </div>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">Categories</div>
          </div>
          <div id="stat-shipping">
            <div id="stat-shipping-value" className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Free</div>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">Shipping</div>
          </div>
          <div id="stat-support">
            <div id="stat-support-value" className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">24/7</div>
            <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">Support</div>
          </div>
        </div>
      </section>
    </div>
  );
}
