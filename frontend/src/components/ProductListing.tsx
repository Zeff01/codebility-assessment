"use client";

import { useState, useMemo, useCallback, lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import type { Product } from "@/types/product";
import { ProductCard } from "@/components/ProductCard";

const ProductDetailModal = lazy(async () => {
  const m = await import("@/components/ProductDetailModal");
  return { default: m.ProductDetailModal };
});

const aboveFoldCount = 1;

function toTitleCase(s: string): string {
  return s
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

interface ProductListingProps {
  initialProducts: Product[];
  error?: string | null;
}

export function ProductListing({ initialProducts, error }: ProductListingProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = useMemo(() => {
    const set = new Set(initialProducts.map((p) => p.category));
    return Array.from(set).sort();
  }, [initialProducts]);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter((p) => {
      const matchesSearch =
        !searchQuery.trim() ||
        p.title.toLowerCase().includes(searchQuery.trim().toLowerCase());
      const matchesCategory = !categoryFilter || p.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [initialProducts, searchQuery, categoryFilter]);

  const handleCloseModal = useCallback(() => setSelectedProduct(null), []);
  const handleSelectProduct = useCallback((product: Product) => setSelectedProduct(product), []);

  if (error) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <Alert severity="error" sx={{ maxWidth: 400 }}>
          <Typography fontWeight="medium">Error loading products</Typography>
          <Typography variant="body2" sx={{ mt: 0.5 }}>
            {error}
          </Typography>
        </Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0a0a0a, #374151)",
      }}
    >
      <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Toolbar sx={{ flexWrap: "wrap", gap: 2, py: 2 }}>
          <Typography
            variant="h6"
            component="h1"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              minWidth: 0,
              fontFamily: 'var(--font-brand), var(--font-sans), serif',
              letterSpacing: "0.02em",
            }}
          >
            Bilan
          </Typography>
          <TextField
            size="small"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" color="action" />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ minWidth: 220, width: { xs: "100%", sm: "auto" }, flex: { xs: "1 1 100%", sm: "0 0 auto" } }}
            aria-label="Search products"
          />
          <FormControl size="small" sx={{ minWidth: 180, width: { xs: "100%", sm: "auto" }, flex: { xs: "1 1 100%", sm: "0 0 auto" } }}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              label="Category"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              onClose={() => (document.activeElement as HTMLElement)?.blur()}
            >
              <MenuItem value="">All categories</MenuItem>
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {toTitleCase(cat)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ maxWidth: 1200, mx: "auto", p: { xs: 2, sm: 3 } }}>
        {filteredProducts.length === 0 ? (
          <Typography color="text.secondary" textAlign="center" sx={{ py: 8 }}>
            No products match your filters.
          </Typography>
        ) : (
          <Grid
            container
            spacing={3}
            sx={{ alignItems: "stretch", contentVisibility: "auto" }}
          >
            {filteredProducts.map((product, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id} sx={{ display: "flex" }}>
                <ProductCard
                  product={product}
                  priority={index < aboveFoldCount}
                  onSelect={handleSelectProduct}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {selectedProduct !== null && (
        <Suspense fallback={null}>
          <ProductDetailModal
            product={selectedProduct}
            open
            onClose={handleCloseModal}
          />
        </Suspense>
      )}
    </Box>
  );
}
