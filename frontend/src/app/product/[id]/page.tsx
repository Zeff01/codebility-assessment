import Link from "next/link";

async function getProduct(id: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${id}`
  );
  return res.json();
}

export default async function ProductPage({
  params,
}: any) {
  const product = await getProduct(params.id);

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">

        <Link
          href="/"
          className="text-red-600 font-medium"
        >
          ← Back
        </Link>

        <div className="grid md:grid-cols-2 gap-10 mt-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm flex justify-center">
            <img
              src={product.image}
              className="h-72 object-contain"
            />
          </div>

          <div>
            <h1 className="text-3xl font-bold">
              {product.title}
            </h1>

            <p className="text-2xl font-bold text-red-600 mt-4">
              ${product.price}
            </p>

            <p className="text-gray-600 mt-6">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* FLOATING CART BUTTON */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-red-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition">
          Add to Cart
        </button>
      </div>
    </main>
  );
}
