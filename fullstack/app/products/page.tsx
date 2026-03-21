import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/mock/products';

export const metadata = {
  title: 'Products | Shop',
  description: 'Browse our collection of premium electronics and accessories',
};

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Decorative background element */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Page Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-4 animate-fade-in">
            New Arrivals
          </h2>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter">
            Our Collection
          </h1>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 text-xl leading-relaxed font-medium">
            Discover our curated selection of premium electronics and accessories,
            where cutting-edge technology meets impeccable design.
          </p>
        </div>

        {/* Products Grid */}
        {products.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="text-6xl mb-6">📦</div>
            <p className="text-slate-400 text-2xl font-semibold italic">No products currently available.</p>
            <p className="text-slate-400 mt-2">Check back soon for our latest arrivals.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}