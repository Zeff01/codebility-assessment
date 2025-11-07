"use client";

import React from "react";
import feature1_bg from '../assets/feature1_bg.jpg';
import feature2_bg from '../assets/feature2_bg.jpg';
import feature3_bg from '../assets/feature3_bg.jpg';
import feature4_bg from '../assets/feature4_bg.jpg';
import { Box, Typography, Paper, Container, Grid } from "@mui/material";

// MUI Grid expects 'item' as a boolean prop, not as an attribute. The import is correct.
const features = [
  {
    title: "Simple",
    desc: "Easy to use with one-tap saving options.",
    image: feature1_bg
  },
  {
    title: "Secure",
    desc: "Your money and data are protected with bank-grade security.",
    image: feature2_bg
  },
  {
    title: "Smart",
    desc: "Personalized insights help you save more effortlessly.",
    image: feature3_bg
  },
  {
    title: "Support",
    desc: "24/7 customer support to help you anytime.",
    image: feature4_bg
  },
];

export default function Features() {
  return (
    <Box sx={{ pt: { xs: 6, md: 8 }, px: 4, textAlign: "center" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          fontWeight={700}
          mb={6}
          color="#5F19C6"
        >
          Why Choose Moola
        </Typography>

        <Grid container spacing={3} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' } }}>
          {features.map((feature, index) => (
            <Grid key={index} display="flex" justifyContent="center">
              <Paper
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 4,
                  width: { xs: '100%', md: 620 },
                  minHeight: 220,
                  borderRadius: 3,
                  transition: "0.3s",
                  justifyContent: "end",
                  backgroundImage: `url(${feature.image.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  "&:hover": { transform: "translateY(-5px)" },
                  "&::before": {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    background: "rgba(86, 2, 169, 0.5)",
                    zIndex: 1,
                  },
                  "& > *": {
                    position: 'relative',
                    zIndex: 2,
                  },
                }}
              >
                <Typography variant="h4" fontWeight={600} mb={1} color='white'>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="white">
                  {feature.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
