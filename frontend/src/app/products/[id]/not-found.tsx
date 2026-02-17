import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="text-center">
        <h1 className="text-xl font-semibold text-foreground">Product not found</h1>
        <Link
          href="/"
          className="mt-4 inline-block text-foreground/70 hover:text-foreground font-medium"
        >
          ← Back to products
        </Link>
      </div>
    </div>
  );
}
