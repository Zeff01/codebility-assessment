import { ok, readJson, withErrorHandling } from "@/lib/api";
import { addItemSchema } from "@/features/cart/schemas";
import { addItem } from "@/features/cart/server/cart.service";

export const POST = withErrorHandling(async (request: Request) => {
  const input = addItemSchema.parse(await readJson(request));
  const cart = await addItem(input);

  return ok(cart, { status: 201 });
});
