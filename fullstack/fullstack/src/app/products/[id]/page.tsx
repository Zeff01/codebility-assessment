import { AddToCartButton } from "@/components/product/AddToCartButton";
import { ProductImage } from "@/components/product/ProductImage";
import { getProductById } from "@/lib/products";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

function formatMoney(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <Link
        href="/"
        className="mb-6 inline-flex text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        ← Back to catalog
      </Link>
      <article className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <ProductImage
          src={product.imageUrl}
          alt={product.name}
          priority
        />
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-zinc-500">
              {product.category}
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-2xl font-semibold">
              {formatMoney(product.price, product.currency)}
            </p>
          </div>
          <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
            {product.description}
          </p>
          <p className="text-sm text-zinc-500">
            {product.stock > 0
              ? `${product.stock} in stock`
              : "Currently unavailable"}
          </p>
          <AddToCartButton productId={product.id} stock={product.stock} />
        </div>
      </article>
    </main>
  );
}
