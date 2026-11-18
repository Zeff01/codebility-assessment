import type { NextRequest } from "next/server";
import { ok, readJson, withErrorHandling } from "@/lib/api";
import { productIdSchema, updateItemSchema } from "@/features/cart/schemas";
import { removeItem, updateItem } from "@/features/cart/server/cart.service";

type Context = RouteContext<"/api/cart/items/[productId]">;

async function parseProductId(ctx: Context) {
  const { productId } = await ctx.params;
  return productIdSchema.parse(productId);
}

export const PATCH = withErrorHandling(async (request: NextRequest, ctx: Context) => {
  const productId = await parseProductId(ctx);
  const { quantity } = updateItemSchema.parse(await readJson(request));

  return ok(await updateItem(productId, quantity));
});

export const DELETE = withErrorHandling(async (_request: NextRequest, ctx: Context) => {
  const productId = await parseProductId(ctx);

  return ok(await removeItem(productId));
});
