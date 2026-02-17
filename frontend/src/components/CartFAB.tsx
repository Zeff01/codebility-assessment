"use client";

import { useState, lazy, Suspense } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "@/context/CartContext";

const CartModal = lazy(async () => {
  const m = await import("@/components/CartModal");
  return { default: m.CartModal };
});

export function CartFAB() {
  const [open, setOpen] = useState(false);
  const { totalCount } = useCart();

  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        aria-label="Open cart"
        sx={{
          position: "fixed",
          bottom: { xs: 16, sm: 24 },
          right: { xs: 16, sm: 24 },
          zIndex: 1300,
          width: 56,
          height: 56,
          borderRadius: "50%",
          bgcolor: "success.main",
          color: "success.contrastText",
          boxShadow: 3,
          "&:hover": {
            bgcolor: "success.dark",
            boxShadow: 6,
          },
        }}
      >
        <Badge badgeContent={totalCount} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      {open && (
        <Suspense fallback={null}>
          <CartModal open={open} onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </>
  );
}
