import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface StarRatingProps {
  rate: number;
  count?: number;
  size?: "small" | "medium";
}

const maxStars = 5;

export function StarRating({ rate, count, size = "medium" }: StarRatingProps) {
  const clampedRate = Math.min(maxStars, Math.max(0, rate));
  const fontSize = size === "small" ? "0.875rem" : "1.25rem";

  return (
    <Box sx={{ display: "inline-flex", alignItems: "center", gap: 0.25 }}>
      <Box component="span" sx={{ display: "inline-flex", fontSize }} aria-label={`Rating: ${clampedRate} out of ${maxStars} stars`}>
        {Array.from({ length: maxStars }, (_, i) => {
          const value = i + 1;
          if (clampedRate >= value) {
            return <Box component="span" key={i} sx={{ color: "warning.main" }}>★</Box>;
          }
          if (clampedRate >= value - 0.5) {
            return (
              <Box component="span" key={i} sx={{ position: "relative", display: "inline-block" }}>
                <Box component="span" sx={{ color: "action.disabled" }}>★</Box>
                <Box
                  component="span"
                  sx={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "50%",
                    overflow: "hidden",
                    color: "warning.main",
                  }}
                >
                  ★
                </Box>
              </Box>
            );
          }
          return <Box component="span" key={i} sx={{ color: "action.disabled" }}>☆</Box>;
        })}
      </Box>
      <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
        {clampedRate.toFixed(1)}
        {count != null && ` (${count} reviews)`}
      </Typography>
    </Box>
  );
}
