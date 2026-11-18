import type { NextRequest } from "next/server";
import { ok, withErrorHandling } from "@/lib/api";
import { productQuerySchema } from "@/features/products/schemas";
import { getProducts } from "@/features/products/services/product.service";

export const GET = withErrorHandling(async (request: NextRequest) => {
  const params = Object.fromEntries(request.nextUrl.searchParams);
  const query = productQuerySchema.parse(params);
  const products = await getProducts(query);

  return ok(products, {
    headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" },
  });
});
