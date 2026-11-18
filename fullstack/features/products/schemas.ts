import { z } from "zod";

export const productCategorySchema = z.enum(["audio", "wearables", "accessories", "home"]);

export const productIdSchema = z.string().regex(/^prd_[a-z0-9]{1,32}$/i, "Invalid product id");

export const productSlugSchema = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid product slug")
  .max(100);

export const productQuerySchema = z.object({
  category: productCategorySchema.optional(),
  limit: z.coerce.number().int().min(1).max(50).optional(),
});

const productSchema = z.object({
  id: productIdSchema,
  slug: productSlugSchema,
  name: z.string().min(1),
  brand: z.string().min(1),
  category: productCategorySchema,
  shortDescription: z.string(),
  description: z.string(),
  price: z.number().positive(),
  compareAtPrice: z.number().positive().optional(),
  stock: z.number().int().min(0),
  rating: z.number().min(0).max(5),
  reviewCount: z.number().int().min(0),
  images: z.array(z.object({ src: z.url(), alt: z.string() })).min(1),
  features: z.array(z.string()),
});

export const catalogSchema = z.array(productSchema);
