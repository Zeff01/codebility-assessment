import { describe, expect, it } from "vitest";
import { makeProductSummary } from "@/test/factories";
import { buildCart, createCartLine } from "../lib/totals";
import { cartReducer } from "./cart-reducer";

const headphones = makeProductSummary({ id: "prd_a", price: 100 });
const earbuds = makeProductSummary({ id: "prd_b", price: 40 });

describe("cartReducer", () => {
  it("adds a new line", () => {
    const cart = cartReducer(buildCart([]), { type: "add", product: headphones, quantity: 2 });

    expect(cart.lines).toHaveLength(1);
    expect(cart.itemCount).toBe(2);
    expect(cart.subtotal).toBe(200);
  });

  it("increments an existing line instead of duplicating it", () => {
    const initial = buildCart([createCartLine(headphones, 1)]);
    const cart = cartReducer(initial, { type: "add", product: headphones, quantity: 2 });

    expect(cart.lines).toHaveLength(1);
    expect(cart.lines[0].quantity).toBe(3);
  });

  it("updates the quantity of a line", () => {
    const initial = buildCart([createCartLine(headphones, 1), createCartLine(earbuds, 1)]);
    const cart = cartReducer(initial, { type: "update", productId: "prd_b", quantity: 5 });

    expect(cart.lines[1].quantity).toBe(5);
    expect(cart.subtotal).toBe(300);
  });

  it("keeps untouched lines referentially stable", () => {
    const initial = buildCart([createCartLine(headphones, 1), createCartLine(earbuds, 1)]);
    const cart = cartReducer(initial, { type: "update", productId: "prd_b", quantity: 2 });

    expect(cart.lines[0]).toBe(initial.lines[0]);
  });

  it("removes a line", () => {
    const initial = buildCart([createCartLine(headphones, 1), createCartLine(earbuds, 1)]);
    const cart = cartReducer(initial, { type: "remove", productId: "prd_a" });

    expect(cart.lines.map((line) => line.productId)).toEqual(["prd_b"]);
    expect(cart.subtotal).toBe(40);
  });
});
