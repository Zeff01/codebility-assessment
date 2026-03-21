import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/mock/products";

export const metadata = {
  title: "Shop. | Premium Electronics & Accessories",
  description: "Discover our curated collection of high-quality electronics and professional accessories. Expertly crafted for the modern professional.",
};

export default async function Home() {
  const allProducts = await getProducts();
  const featuredProducts = allProducts.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80"
            alt="Hero Background"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight animate-fade-in">
            Elevate Your <span className="text-blue-500">Digital</span> Experience
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Curated premium electronics and professional accessories designed
            to empower your workflow and inspire your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
            >
              Shop Collection
            </Link>
            <Link
              href="#featured"
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/30 px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:-translate-y-1"
            >
              View Featured
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-3">
                Selected for you
              </h2>
              <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                Featured Innovation
              </h3>
            </div>
            <Link
              href="/products"
              className="text-gray-900 font-bold hover:text-blue-600 transition-colors flex items-center gap-2 group"
            >
              See all products
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-gray-900">
          <div className="space-y-4">
            <div className="text-4xl">🚀</div>
            <h4 className="text-xl font-bold">Priority Shipping</h4>
            <p className="text-gray-500">Free express delivery on all orders exceeding $100.</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl">🛡️</div>
            <h4 className="text-xl font-bold">Premium Warranty</h4>
            <p className="text-gray-500">Comprehensive 2-year coverage on every electronic purchase.</p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl">💎</div>
            <h4 className="text-xl font-bold">Expert Curation</h4>
            <p className="text-gray-500">Every product is hand-tested for quality and performance.</p>
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to upgrade your gear?</h2>
          <p className="text-gray-400 mb-10 text-lg">
            Join thousands of professionals who trust our selection for their daily workflow.
          </p>
          <Link
            href="/products"
            className="inline-block bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
