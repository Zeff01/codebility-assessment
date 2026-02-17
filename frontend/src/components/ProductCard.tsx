"use client";

import { useState, memo } from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { StarRating } from "@/components/StarRating";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
  onSelect?: (product: Product) => void;
}

function ProductCardInner({ product, priority = false, onSelect }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card
      component="div"
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onClick={() => onSelect?.(product)}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (onSelect && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onSelect(product);
        }
      }}
      sx={{
        width: "100%",
        minHeight: 0,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        cursor: onSelect ? "pointer" : "default",
        border: "none",
        p: 0,
        m: 0,
        color: "rgba(255, 255, 255, 0.95)",
        backgroundColor: "rgba(255, 255, 255, 0.12)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 4,
          backgroundColor: "rgba(255, 255, 255, 0.18)",
        },
      }}
    >
      <CardMedia sx={{ position: "relative", aspectRatio: "1", flexShrink: 0, bgcolor: "rgba(255, 255, 255, 0.05)" }}>
        <IconButton
          onClick={handleAddToCart}
          aria-label="Add to cart"
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 2,
            bgcolor: "rgba(255, 255, 255, 0.2)",
            color: "inherit",
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
          }}
        >
          <AddShoppingCartIcon fontSize="small" />
        </IconButton>
        {!imageLoaded && (
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <CircularProgress size={40} />
          </Box>
        )}
        <Image
          src={product.image}
          alt={product.title}
          fill
          priority={priority}
          placeholder="blur"
          blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Cfilter id='b'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='%234a4a4a' filter='url(%23b)'/%3E%3C/svg%3E"
          onLoad={() => setImageLoaded(true)}
          style={{
            objectFit: "contain",
            padding: 16,
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.2s ease-in",
          }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </CardMedia>
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          sx={{
            flex: 1,
            lineHeight: 1.3,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.title}
        </Typography>
        <Box sx={{ mt: 0.5, flexShrink: 0, "& .MuiTypography-root": { color: "rgba(255, 255, 255, 0.75)" } }}>
          <StarRating rate={product.rating.rate} count={product.rating.count} size="small" />
        </Box>
        <Typography variant="h6" sx={{ mt: 1, flexShrink: 0, color: "rgba(255, 255, 255, 0.9)" }}>
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
}

export const ProductCard = memo(ProductCardInner);
