import { getProducts } from '@/lib/api';
import SearchBar from '@/components/SearchBar';

export default async function HomePage() {
  const products = await getProducts();

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Product Catalog</h1>
      
      <SearchBar initialProducts={products} />
    </div>
  );
}