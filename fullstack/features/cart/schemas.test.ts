import { describe, expect, it } from "vitest";
import { MAX_CART_LINES, MAX_QUANTITY_PER_ITEM } from "./constants";
import { addItemSchema, cartIdSchema, productIdSchema, storedCartSchema, updateItemSchema } from "./schemas";

describe("productIdSchema", () => {
  it.each(["prd_001", "prd_ABC123"])("accepts %s", (id) => {
    expect(productIdSchema.safeParse(id).success).toBe(true);
  });

  it.each(["", "001", "prd_", "prd_../../etc", "prd_<script>", `prd_${"a".repeat(40)}`])(
    "rejects %s",
    (id) => {
      expect(productIdSchema.safeParse(id).success).toBe(false);
    },
  );
});

describe("addItemSchema", () => {
  it("defaults quantity to 1", () => {
    expect(addItemSchema.parse({ productId: "prd_001" })).toEqual({ productId: "prd_001", quantity: 1 });
  });

  it.each([0, -1, 1.5, MAX_QUANTITY_PER_ITEM + 1, "2"])("rejects quantity %s", (quantity) => {
    expect(addItemSchema.safeParse({ productId: "prd_001", quantity }).success).toBe(false);
  });

  it("rejects unknown keys", () => {
    const result = addItemSchema.safeParse({ productId: "prd_001", quantity: 1, price: 0 });
    expect(result.success).toBe(false);
  });
});

describe("updateItemSchema", () => {
  it("requires a quantity", () => {
    expect(updateItemSchema.safeParse({}).success).toBe(false);
    expect(updateItemSchema.parse({ quantity: 3 })).toEqual({ quantity: 3 });
  });
});

describe("storedCartSchema", () => {
  it("rejects carts with too many lines", () => {
    const items = Array.from({ length: MAX_CART_LINES + 1 }, (_, index) => ({
      productId: `prd_${index}`,
      quantity: 1,
    }));
    expect(storedCartSchema.safeParse(items).success).toBe(false);
  });
});

describe("cartIdSchema", () => {
  it("only accepts UUIDs", () => {
    expect(cartIdSchema.safeParse("3b241101-e2bb-4255-8caf-4136c566a962").success).toBe(true);
    expect(cartIdSchema.safeParse("../../carts").success).toBe(false);
    expect(cartIdSchema.safeParse("").success).toBe(false);
  });
});
