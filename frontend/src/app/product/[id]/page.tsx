import Link from "next/link";
import { getProductById } from "@/lib/api";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  return (
    <section className="panel">
      <div className="details">
        <div>
          <Link href="/" className="button" aria-label="Back to products">
            ← Back to shop
          </Link>
        </div>

        <div className="detailLayout">
          <div className="detailImgWrap">
            <Image className="detailImg" src={product.image} alt={product.title} width={400} height={400} />
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <div className="detailTitle">{product.title}</div>

            <div className="row" style={{ justifyContent: "flex-start" }}>
              <div className="price" style={{ fontSize: 18 }}>
                ${product.price.toFixed(2)}
              </div>
              <div className="category">{product.category}</div>
            </div>

            <p className="detailDesc">{product.description}</p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <AddToCartButton product={product} />
              <Link href="/cart" className="button">
                Go to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
