import type { ApiErrorBody, ApiSuccessBody } from "@/lib/api";
import type { Cart } from "../types";

export class CartRequestError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = "CartRequestError";
  }
}

async function request(path: string, init?: RequestInit): Promise<Cart> {
  const res = await fetch(path, {
    ...init,
    headers: { "Content-Type": "application/json", ...init?.headers },
    cache: "no-store",
  });

  const body = (await res.json().catch(() => null)) as ApiSuccessBody<Cart> | ApiErrorBody | null;

  if (!res.ok || !body || "error" in body) {
    const message = body && "error" in body ? body.error.message : "Unable to update your cart";
    throw new CartRequestError(message, res.status);
  }

  return body.data;
}

export const cartClient = {
  get: () => request("/api/cart"),

  add: (productId: string, quantity: number) =>
    request("/api/cart/items", {
      method: "POST",
      body: JSON.stringify({ productId, quantity }),
    }),

  update: (productId: string, quantity: number) =>
    request(`/api/cart/items/${encodeURIComponent(productId)}`, {
      method: "PATCH",
      body: JSON.stringify({ quantity }),
    }),

  remove: (productId: string) =>
    request(`/api/cart/items/${encodeURIComponent(productId)}`, { method: "DELETE" }),

  clear: () => request("/api/cart", { method: "DELETE" }),
};
