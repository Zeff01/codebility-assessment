import { z } from "zod";

const cartSchema = z.object({
  productId: z.number().int(),
  quantity: z.number().int(),
});

export default cartSchema;
