import { CartItems } from "@/components/cart-items";

export default function CartPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">Your cart</h1>
        <p className="text-sm text-muted-foreground">
          Review items, adjust quantities, and checkout when ready.
        </p>
      </div>
      <CartItems />
    </div>
  );
}
