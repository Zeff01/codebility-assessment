"use client";

import { use } from "react";
import { CartActionsContext, CartStateContext } from "../context/cart-provider";

export function useCartState() {
  const context = use(CartStateContext);
  if (!context) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return context;
}

export function useCartActions() {
  const context = use(CartActionsContext);
  if (!context) {
    throw new Error("useCartActions must be used within a CartProvider");
  }
  return context;
}

export function useCart() {
  return { ...useCartState(), ...useCartActions() };
}
