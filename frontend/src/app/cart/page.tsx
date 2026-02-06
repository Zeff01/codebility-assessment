import CartClient from "@/components/CartClient";

export default function CartPage() {
  return (
    <>
      <h1 style={{ margin: "0 0 10px", fontSize: 22, fontWeight: 900 }}>Your Cart</h1>
      <p className="muted" style={{ marginTop: 0 }}>
        Review your items before checkout (demo store).
      </p>

      <CartClient />
    </>
  );
}
