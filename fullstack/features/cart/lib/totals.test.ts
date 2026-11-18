import { describe, expect, it } from "vitest";
import { makeProductSummary } from "@/test/factories";
import { FLAT_SHIPPING_RATE, FREE_SHIPPING_THRESHOLD } from "../constants";
import { buildCart, createCartLine, roundMoney, setLineQuantity } from "./totals";

describe("roundMoney", () => {
  it("rounds to two decimals", () => {
    expect(roundMoney(0.1 + 0.2)).toBe(0.3);
    expect(roundMoney(19.999)).toBe(20);
  });
});

describe("createCartLine", () => {
  it("computes the line total from price and quantity", () => {
    const line = createCartLine(makeProductSummary({ price: 19.99 }), 3);
    expect(line.lineTotal).toBe(59.97);
    expect(line.productId).toBe("prd_test");
  });
});

describe("setLineQuantity", () => {
  it("recalculates the line total", () => {
    const line = createCartLine(makeProductSummary({ price: 10 }), 1);
    expect(setLineQuantity(line, 4).lineTotal).toBe(40);
  });
});

describe("buildCart", () => {
  it("returns an empty cart with no shipping", () => {
    expect(buildCart([])).toEqual({ lines: [], itemCount: 0, subtotal: 0, shipping: 0, total: 0 });
  });

  it("charges flat shipping below the free shipping threshold", () => {
    const cart = buildCart([createCartLine(makeProductSummary({ price: 20 }), 2)]);

    expect(cart.itemCount).toBe(2);
    expect(cart.subtotal).toBe(40);
    expect(cart.shipping).toBe(FLAT_SHIPPING_RATE);
    expect(cart.total).toBe(roundMoney(40 + FLAT_SHIPPING_RATE));
  });

  it("gives free shipping at the threshold", () => {
    const cart = buildCart([
      createCartLine(makeProductSummary({ price: FREE_SHIPPING_THRESHOLD }), 1),
    ]);

    expect(cart.shipping).toBe(0);
    expect(cart.total).toBe(FREE_SHIPPING_THRESHOLD);
  });

  it("sums multiple lines", () => {
    const cart = buildCart([
      createCartLine(makeProductSummary({ id: "prd_a", price: 10.1 }), 2),
      createCartLine(makeProductSummary({ id: "prd_b", price: 5.05 }), 3),
    ]);

    expect(cart.itemCount).toBe(5);
    expect(cart.subtotal).toBe(35.35);
  });
});
