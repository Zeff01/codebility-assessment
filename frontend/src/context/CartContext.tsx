"use client";

import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import type { Product } from "@/types/product";

const snackbarDurationMs = 3000;
const maxSnackbars = 5;

function StackedSnackbarItem({
  id,
  message,
  severity = "success",
  onRemove,
}: {
  id: number;
  message: string;
  severity?: "success" | "warning" | "info";
  onRemove: (id: number) => void;
}) {
  const removed = useRef(false);
  useEffect(() => {
    const t = setTimeout(() => {
      if (!removed.current) {
        removed.current = true;
        onRemove(id);
      }
    }, snackbarDurationMs);
    return () => clearTimeout(t);
  }, [id, onRemove]);

  return (
    <Alert
      severity={severity}
      variant="filled"
      sx={{
        width: "100%",
        maxWidth: { xs: "calc(100vw - 32px)", sm: 360 },
        flexShrink: 0,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "& .MuiAlert-message": { overflow: "hidden", textOverflow: "ellipsis" },
        "@keyframes snackbarFade": {
          "0%, 50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        animation: "snackbarFade 3s ease-out forwards",
      }}
    >
      {message}
    </Alert>
  );
}

export const maxQuantity = 999;

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getQuantity: (productId: number) => number;
  totalCount: number;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [snackbars, setSnackbars] = useState<
    { id: number; message: string; severity?: "success" | "warning" | "info" }[]
  >([]);
  const idRef = useRef(0);
  const itemsRef = useRef<CartItem[]>(items);
  itemsRef.current = items;

  const removeSnackbar = useCallback((id: number) => {
    setSnackbars((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const addToCart = useCallback((product: Product) => {
    const currentItems = itemsRef.current;
    const existing = currentItems.find((i) => i.product.id === product.id);
    if (existing && existing.quantity >= maxQuantity) {
      idRef.current += 1;
      setSnackbars((prev) =>
        [...prev, { id: idRef.current, message: "Can't add more of this product", severity: "warning" as const }].slice(-maxSnackbars)
      );
      return;
    }
    setItems((prev) => {
      const existingInPrev = prev.find((i) => i.product.id === product.id);
      if (existingInPrev) {
        const nextQty = Math.min(existingInPrev.quantity + 1, maxQuantity);
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: nextQty } : i
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    idRef.current += 1;
    setSnackbars((prev) =>
      [...prev, { id: idRef.current, message: "Added to cart", severity: "success" as const }].slice(-maxSnackbars)
    );
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity < 1) {
      setItems((prev) => prev.filter((i) => i.product.id !== productId));
      return;
    }
    const capped = Math.min(quantity, maxQuantity);
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId ? { ...i, quantity: capped } : i
      )
    );
  }, []);

  const getQuantity = useCallback(
    (productId: number) => items.find((i) => i.product.id === productId)?.quantity ?? 0,
    [items]
  );

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, getQuantity, totalCount }}>
      {children}
      <Box
        sx={{
          position: "fixed",
          bottom: { xs: 16, sm: 24 },
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column-reverse",
          alignItems: "center",
          gap: 1,
          zIndex: 1400,
          pointerEvents: "none",
          px: 2,
          maxWidth: "100%",
        }}
      >
        {snackbars.map((s) => (
          <StackedSnackbarItem
            key={s.id}
            id={s.id}
            message={s.message}
            severity={s.severity}
            onRemove={removeSnackbar}
          />
        ))}
      </Box>
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
