import React from "react";
import { Box, Typography, Container, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{
      py: 2,
      px: 2,
      mt: 8,
      background: "linear-gradient(90deg, #8000FF 0%, #C800FF 100%)",
      color: "#fff",
      textAlign: "center",
    }}>
      <Container maxWidth="lg">
        <Typography variant="body2" fontWeight={500}>
          &copy; {new Date().getFullYear()} Moola. All rights reserved.
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Link href="#privacy" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
          <Link href="#terms" color="inherit" underline="hover" sx={{ mx: 1 }}>
            Terms of Service
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
