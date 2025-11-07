"use client";

import React from "react";
import hero_bg from '../assets/hero_bg.jpg';
import { Box, Typography, Button, Container } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        position: "relative",
        color: "white",
        textAlign: "center",
        py: { xs: 10, md: 16 },
        px: 2,
        backgroundImage: `url(${hero_bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(86, 2, 169, 0.7)", // adjust opacity here
          zIndex: 0,
        },
        "& > *": {
          position: "relative",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          component="h1"
          fontWeight={700}
          gutterBottom
          sx={{ fontSize: { xs: "2rem", sm: "3rem", md: "4rem" } }}
        >
          Save Smarter with Moola
        </Typography>
        <Typography
          variant="h6"
          component="p"
          color="rgba(255,255,255,0.9)"
          mb={4}
        >
          Turn your everyday spending into effortless savings.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#5F19C6",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "#5F19C6",
              color: "white",
            },
          }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
}
