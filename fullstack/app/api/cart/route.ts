import { ok, withErrorHandling } from "@/lib/api";
import { clearCart, getCart } from "@/features/cart/server/cart.service";

const noStore = { headers: { "Cache-Control": "private, no-store" } };

export const GET = withErrorHandling(async () => {
  return ok(await getCart(), noStore);
});

export const DELETE = withErrorHandling(async () => {
  return ok(await clearCart(), noStore);
});
