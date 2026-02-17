"use client";

import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import { StarRating } from "@/components/StarRating";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}

export function ProductDetailModal({ product, open, onClose }: ProductDetailModalProps) {
  const { addToCart } = useCart();
  if (!product) return null;

  const handleAddToCart = () => addToCart(product);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      TransitionComponent={Fade}
      transitionDuration={{ enter: 300, exit: 250 }}
      PaperProps={{
        sx: {
          borderRadius: 3,
          overflow: "hidden",
          maxHeight: "90vh",
        },
      }}
      slotProps={{
        backdrop: { sx: { backdropFilter: "blur(4px)" } },
      }}
    >
      <Box sx={{ position: "relative", p: { xs: 2, sm: 4 } }}>
        <IconButton
          onClick={onClose}
          aria-label="Close"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 40,
            height: 40,
            borderRadius: "50%",
            bgcolor: "action.hover",
            "&:hover": { bgcolor: "action.selected" },
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <CloseIcon />
        </IconButton>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          alignItems={{ sm: "flex-start" }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 320,
              aspectRatio: "1",
              flexShrink: 0,
              borderRadius: 2,
              overflow: "hidden",
              bgcolor: "action.hover",
            }}
          >
            <Image
              src={product.image}
              alt={product.title}
              fill
              style={{ objectFit: "contain", padding: 24 }}
              sizes="(max-width: 600px) 100vw, 320px"
            />
            <Button
              variant="contained"
              startIcon={<AddShoppingCartIcon />}
              onClick={handleAddToCart}
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                borderRadius: 2,
                textTransform: "none",
                boxShadow: 2,
              }}
            >
              Add to cart
            </Button>
          </Box>
          <Box sx={{ flex: 1, minWidth: 0, pr: 5 }}>
            <Chip
              label={product.category}
              size="small"
              sx={{ textTransform: "capitalize", mb: 1 }}
            />
            <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h6" color="primary" fontWeight={600} sx={{ mt: 1 }}>
              ${product.price.toFixed(2)}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <StarRating rate={product.rating.rate} count={product.rating.count} />
            </Box>
            <Typography variant="body1" sx={{ mt: 3, lineHeight: 1.7 }}>
              {product.description}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Dialog>
  );
}
