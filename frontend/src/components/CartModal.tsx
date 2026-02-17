"use client";

import { useState } from "react";
import Image from "next/image";
import Dialog from "@mui/material/Dialog";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart, maxQuantity } from "@/context/CartContext";
import type { Product } from "@/types/product";

const cartTitleMaxLength = 40;

function CartItemImage({ product }: { product: Product }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Avatar
      variant="rounded"
      sx={{
        width: 56,
        height: 56,
        bgcolor: "action.hover",
        position: "relative",
      }}
    >
      {!loaded && (
        <CircularProgress
          size={32}
          sx={{ position: "absolute", zIndex: 1 }}
        />
      )}
      <Box
        component="span"
        sx={{
          position: "absolute",
          inset: 0,
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.2s ease-in",
          "& img": { objectFit: "contain" },
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          width={56}
          height={56}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(true)}
        />
      </Box>
    </Avatar>
  );
}

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

export function CartModal({ open, onClose }: CartModalProps) {
  const { items, removeFromCart, updateQuantity } = useCart();
  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      TransitionComponent={Fade}
      transitionDuration={{ enter: 300, exit: 250 }}
      PaperProps={{
        sx: {
          borderRadius: "8.5px",
          maxHeight: "85vh",
          position: "fixed",
          top: { xs: "50%", sm: "auto" },
          left: { xs: "50%", sm: "50%" },
          right: { xs: "auto", sm: "auto" },
          bottom: { xs: "auto", sm: "auto" },
          margin: { xs: 0, sm: "2rem auto" },
          width: { xs: "calc(100% - 32px)", sm: "100%" },
          transform: { xs: "translate(-50%, -50%)", sm: "translateX(-50%)" },
          bgcolor: "background.paper",
        },
      }}
    >
      <Box sx={{ p: { xs: 1.5, sm: 2 } }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h6" fontWeight={700}>
            Your cart
          </Typography>
          <IconButton onClick={onClose} aria-label="Close" size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {items.length === 0 ? (
          <Typography color="text.secondary" sx={{ py: 4, textAlign: "center" }}>
            Your cart is empty
          </Typography>
        ) : (
          <>
            <List dense sx={{ overflow: "auto", maxHeight: "60vh", minWidth: 0 }}>
              {items.map(({ product, quantity }) => (
                <Box key={product.id} sx={{ width: "100%" }}>
                  <ListItem alignItems="flex-start" sx={{ px: 0, gap: 2 }}>
                    <ListItemAvatar sx={{ minWidth: 56, mr: 1 }}>
                      <CartItemImage product={product} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Tooltip title={product.title} enterDelay={300} enterNextDelay={100}>
                          <Typography
                            variant="body2"
                            fontWeight={500}
                            component="span"
                            display="block"
                            sx={{
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              minWidth: 0,
                            }}
                          >
                            {product.title.length > cartTitleMaxLength
                              ? `${product.title.slice(0, cartTitleMaxLength)}...`
                              : product.title}
                          </Typography>
                        </Tooltip>
                      }
                      sx={{ minWidth: 0 }}
                      secondary={
                        <>
                          <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                            <Box component="span" sx={{ width: 64, textAlign: "right" }}>
                              <Typography component="span" variant="body2" color="text.secondary">
                                ${product.price.toFixed(2)}
                              </Typography>
                            </Box>
                            <Box component="span" sx={{ width: 20, textAlign: "center" }}>
                              <Typography component="span" variant="body2" color="text.secondary">
                                ×
                              </Typography>
                            </Box>
                            <TextField
                              type="number"
                              value={quantity}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                const raw = e.target.value;
                                if (raw === "") {
                                  updateQuantity(product.id, 0);
                                  return;
                                }
                                const v = parseInt(raw, 10);
                                if (!Number.isNaN(v)) updateQuantity(product.id, Math.max(0, v));
                              }}
                              onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                                const raw = e.target.value;
                                if (raw === "") return;
                                const v = parseInt(raw, 10);
                                if (Number.isNaN(v) || v < 1) updateQuantity(product.id, 1);
                              }}
                              inputProps={{
                                min: 0,
                                max: maxQuantity,
                                step: 1,
                                "aria-label": `Quantity for ${product.title}`,
                              }}
                              size="small"
                              sx={{ width: 72, "& .MuiInputBase-input": { textAlign: "center", py: 0.5 } }}
                            />
                          </Box>
                          <Box
                            sx={{
                              display: { xs: "flex", sm: "none" },
                              alignItems: "center",
                              justifyContent: "space-between",
                              mt: 1,
                              flexWrap: "wrap",
                              gap: 0.5,
                            }}
                          >
                            <Typography variant="subtitle2" fontWeight={600} color="primary">
                              ${(product.price * quantity).toFixed(2)}
                            </Typography>
                            <Button
                              size="small"
                              color="error"
                              startIcon={<DeleteOutlineIcon fontSize="small" />}
                              onClick={() => removeFromCart(product.id)}
                              sx={{ minWidth: 0 }}
                            >
                              Remove
                            </Button>
                          </Box>
                        </>
                      }
                    />
                    <ListItemSecondaryAction sx={{ display: { xs: "none", sm: "block" } }}>
                      <Typography variant="subtitle2" fontWeight={600} color="primary">
                        ${(product.price * quantity).toFixed(2)}
                      </Typography>
                      <Button
                        size="small"
                        color="error"
                        startIcon={<DeleteOutlineIcon fontSize="small" />}
                        onClick={() => removeFromCart(product.id)}
                        sx={{ mt: 0.5, minWidth: 0 }}
                      >
                        Remove
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                  {quantity >= maxQuantity && (
                    <Typography
                      variant="caption"
                      color="error"
                      sx={{
                        display: "block",
                        width: "100%",
                        px: 2,
                        py: 0.5,
                        textAlign: "center",
                      }}
                    >
                      Sorry we can&apos;t add more
                    </Typography>
                  )}
                </Box>
              ))}
            </List>
            <Box sx={{ borderTop: 1, borderColor: "divider", pt: 2, mt: 2 }}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
                Total: ${total.toFixed(2)}
              </Typography>
            </Box>
          </>
        )}
      </Box>
    </Dialog>
  );
}
