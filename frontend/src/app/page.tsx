import ProductBrowser from "@/components/ProductBrowser";
import { getProducts } from "@/lib/api";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <div style={{ marginBottom: 12 }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>
          Products
        </h1>
        <p className="muted" style={{ marginTop: 6 }}>
          Browse products, search, filter, and click for details.
        </p>
      </div>

      <ProductBrowser products={products} />
    </>
  );
}
