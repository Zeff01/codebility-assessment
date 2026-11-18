import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ReactNode } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { makeProductSummary } from "@/test/factories";
import { cartClient, CartRequestError } from "../api/cart-client";
import { CartProvider } from "../context/cart-provider";
import { buildCart, createCartLine, emptyCart } from "../lib/totals";
import { AddToCartForm } from "./add-to-cart-form";

vi.mock("next/link", () => ({
  default: ({ href, children }: { href: string; children: ReactNode }) => <a href={href}>{children}</a>,
}));

vi.mock("../api/cart-client", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../api/cart-client")>();
  return {
    ...actual,
    cartClient: { get: vi.fn(), add: vi.fn(), update: vi.fn(), remove: vi.fn(), clear: vi.fn() },
  };
});

const client = vi.mocked(cartClient);
const product = makeProductSummary({ id: "prd_001", stock: 3 });

function renderForm(overrides = product) {
  return render(
    <CartProvider>
      <AddToCartForm product={overrides} />
    </CartProvider>,
  );
}

beforeEach(() => {
  client.get.mockResolvedValue(emptyCart);
});

describe("AddToCartForm", () => {
  it("adds the selected quantity to the cart", async () => {
    client.add.mockResolvedValue(buildCart([createCartLine(product, 2)]));
    renderForm();

    await userEvent.click(screen.getByRole("button", { name: "Increase quantity" }));
    await userEvent.click(screen.getByRole("button", { name: "Add to cart" }));

    expect(client.add).toHaveBeenCalledWith("prd_001", 2);
    expect(await screen.findByText(/Added to cart/)).toBeInTheDocument();
  });

  it("shows the server error when adding fails", async () => {
    client.add.mockRejectedValue(new CartRequestError("Only 1 of Test Product can be added", 409));
    renderForm();

    await userEvent.click(screen.getByRole("button", { name: "Add to cart" }));

    expect(await screen.findByText("Only 1 of Test Product can be added")).toBeInTheDocument();
  });

  it("is disabled when the product is out of stock", () => {
    renderForm(makeProductSummary({ stock: 0 }));
    expect(screen.getByRole("button", { name: "Out of stock" })).toBeDisabled();
  });

  it("caps the selector at what is left after the current cart quantity", async () => {
    client.get.mockResolvedValue(buildCart([createCartLine(product, 2)]));
    renderForm();

    await waitFor(() => expect(client.get).toHaveBeenCalled());
    await userEvent.click(screen.getByRole("button", { name: "Increase quantity" }));

    expect(screen.getByRole("button", { name: "Increase quantity" })).toBeDisabled();
  });
});
