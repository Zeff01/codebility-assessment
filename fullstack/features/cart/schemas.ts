import { z } from "zod";
import { productIdSchema } from "@/features/products/schemas";
import { MAX_CART_LINES, MAX_QUANTITY_PER_ITEM } from "./constants";

export { productIdSchema };

export const cartIdSchema = z.uuid();

const quantity = z.number().int().min(1).max(MAX_QUANTITY_PER_ITEM);

export const addItemSchema = z.strictObject({
  productId: productIdSchema,
  quantity: quantity.default(1),
});

export const updateItemSchema = z.strictObject({
  quantity,
});

export const storedCartSchema = z
  .array(
    z.object({
      productId: productIdSchema,
      quantity: z.number().int().positive(),
    }),
  )
  .max(MAX_CART_LINES);

export const cartTableSchema = z.record(
  cartIdSchema,
  z.object({
    items: storedCartSchema,
    updatedAt: z.iso.datetime(),
  }),
);

export type AddItemInput = z.infer<typeof addItemSchema>;
export type UpdateItemInput = z.infer<typeof updateItemSchema>;
