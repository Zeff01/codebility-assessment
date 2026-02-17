import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { StarRating } from "@/components/StarRating";
import { fetchProduct } from "@/lib/api";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = params;
  let product = null;
  try {
    product = await fetchProduct(id);
  } catch {
    notFound();
  }
  if (!product) notFound();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Box
        component="header"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          bgcolor: "background.paper",
        }}
      >
        <Box sx={{ maxWidth: 900, mx: "auto", px: { xs: 2, sm: 3 }, py: 2 }}>
          <Typography
            component={Link}
            href="/"
            sx={{ color: "text.secondary", textDecoration: "none", "&:hover": { textDecoration: "underline" }, display: "inline-flex", alignItems: "center", gap: 0.5 }}
          >
            ← Back to products
          </Typography>
        </Box>
      </Box>

      <Box
        component="main"
        sx={{ maxWidth: 900, mx: "auto", px: { xs: 2, sm: 3 }, py: 4 }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems={{ md: "flex-start" }}
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
              priority
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Chip
              label={product.category}
              size="small"
              sx={{ textTransform: "capitalize", mb: 1 }}
            />
            <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h5" color="primary" fontWeight={600} sx={{ mt: 1 }}>
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
    </Box>
  );
}
