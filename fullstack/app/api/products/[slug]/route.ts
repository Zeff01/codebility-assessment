import type { NextRequest } from "next/server";
import { ApiError, ok, withErrorHandling } from "@/lib/api";
import { productSlugSchema } from "@/features/products/schemas";
import { getProductBySlug } from "@/features/products/services/product.service";

export const GET = withErrorHandling(
  async (_request: NextRequest, ctx: RouteContext<"/api/products/[slug]">) => {
    const slug = productSlugSchema.parse((await ctx.params).slug);
    const product = await getProductBySlug(slug);

    if (!product) {
      throw ApiError.notFound(`Product "${slug}" not found`);
    }

    return ok(product, {
      headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" },
    });
  },
);
