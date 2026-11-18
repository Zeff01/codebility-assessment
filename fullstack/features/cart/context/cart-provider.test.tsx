import { act, renderHook, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";
import { startTransition } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { makeProductSummary } from "@/test/factories";
import { cartClient, CartRequestError } from "../api/cart-client";
import { useCart } from "../hooks/use-cart";
import { buildCart, createCartLine, emptyCart } from "../lib/totals";
import type { Cart } from "../types";
import { CartProvider } from "./cart-provider";

vi.mock("../api/cart-client", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../api/cart-client")>();
  return {
    ...actual,
    cartClient: { get: vi.fn(), add: vi.fn(), update: vi.fn(), remove: vi.fn(), clear: vi.fn() },
  };
});

const client = vi.mocked(cartClient);
const wrapper = ({ children }: { children: ReactNode }) => <CartProvider>{children}</CartProvider>;

const productA = makeProductSummary({ id: "prd_a", price: 10 });
const productB = makeProductSummary({ id: "prd_b", price: 20 });

function deferred<T>() {
  let resolve!: (value: T) => void;
  const promise = new Promise<T>((res) => {
    resolve = res;
  });
  return { promise, resolve };
}

async function renderCart() {
  const hook = renderHook(() => useCart(), { wrapper });
  await waitFor(() => expect(hook.result.current.isLoaded).toBe(true));
  return hook;
}

beforeEach(() => {
  client.get.mockResolvedValue(emptyCart);
});

describe("CartProvider", () => {
  it("loads the cart on mount", async () => {
    client.get.mockResolvedValue(buildCart([createCartLine(productA, 2)]));
    const { result } = await renderCart();

    expect(result.current.cart.itemCount).toBe(2);
    expect(result.current.loadError).toBeNull();
  });

  it("exposes load errors", async () => {
    client.get.mockRejectedValue(new CartRequestError("Service unavailable", 503));
    const { result } = await renderCart();

    expect(result.current.loadError).toBe("Service unavailable");
  });

  it("shows the optimistic cart while a request is in flight", async () => {
    const pending = deferred<Cart>();
    client.add.mockReturnValue(pending.promise);
    const { result } = await renderCart();

    act(() => {
      startTransition(async () => {
        await result.current.addItem(productA, 3);
      });
    });

    expect(result.current.cart.itemCount).toBe(3);

    await act(async () => pending.resolve(buildCart([createCartLine(productA, 3)])));
    expect(result.current.cart.itemCount).toBe(3);
  });

  it("rolls back the optimistic update when the request fails", async () => {
    client.add.mockRejectedValue(new CartRequestError("Out of stock", 409));
    const { result } = await renderCart();

    let outcome: Awaited<ReturnType<typeof result.current.addItem>> | undefined;
    await act(async () => {
      startTransition(async () => {
        outcome = await result.current.addItem(productA, 1);
      });
    });

    expect(outcome).toEqual({ ok: false, error: "Out of stock" });
    expect(result.current.cart.itemCount).toBe(0);
  });

  it("sends cart mutations one at a time", async () => {
    client.get.mockResolvedValue(buildCart([createCartLine(productA, 1), createCartLine(productB, 1)]));
    const first = deferred<Cart>();
    client.update.mockReturnValue(first.promise);
    client.remove.mockResolvedValue(buildCart([createCartLine(productA, 2)]));

    const { result } = await renderCart();

    act(() => {
      startTransition(async () => {
        await result.current.updateQuantity("prd_a", 2);
      });
      startTransition(async () => {
        await result.current.removeItem("prd_b");
      });
    });

    await Promise.resolve();
    expect(client.update).toHaveBeenCalledTimes(1);
    expect(client.remove).not.toHaveBeenCalled();

    await act(async () =>
      first.resolve(buildCart([createCartLine(productA, 2), createCartLine(productB, 1)])),
    );

    await waitFor(() => expect(client.remove).toHaveBeenCalledWith("prd_b"));
    await waitFor(() => expect(result.current.cart.lines).toHaveLength(1));
  });
});
