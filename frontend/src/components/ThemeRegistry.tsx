"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CartProvider } from "@/context/CartContext";
import { CartFAB } from "@/components/CartFAB";
import theme from "@/theme";

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <CartProvider>
          {children}
          <CartFAB />
        </CartProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
