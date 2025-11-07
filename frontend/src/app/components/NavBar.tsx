import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import moola_logo from '../assets/logo_desktop_purple.svg';
import canadian_flag from '../assets/canadian_flag.svg';
import { AppBar, Toolbar, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, useMediaQuery, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function NavBar() {
  const isMobile = useMediaQuery('(max-width:1000px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navLinks = [
    { label: "Shop", href: "#shop" },
    { label: "Winter Holiday Sale", href: "#winter-holiday-sale" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Refer & Earn", href: "#refer-earn" },
    { label: "Merchant Solutions", href: "#merchant-solutions" },
  ];

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
            {/* Logo */}
            <Box sx={{ height: 36, width: 100, display: "flex", alignItems: "center" }}>
              <Image src={moola_logo} alt="Moola Logo" width={100} height={32} priority />
            </Box>
            {/* Desktop Nav */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 3 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    component={Link}
                    href={link.href}
                    sx={{
                      color: "#5f5f5fff",
                      fontWeight: 'bold',
                      fontSize: '0.8rem',
                      textTransform: "none",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#eef6ff",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}
            {/* Download Button always visible */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(-135deg, #8000FF, #C800FF)",
                  color: "#eef6ff",
                  px: 3,
                  py: 1,
                  fontSize: '0.65rem',
                  borderRadius: 6,
                  ml: { xs: 1, md: 2 },
                  "&:hover": {
                    background: "#8000FF",
                    color: "#eef6ff",
                  },
                }}
              >
                Download Now
              </Button>
              {!isMobile && (
                <Box sx={{ height: 16, display: "flex", alignItems: "center" }}>
                  <Image src={canadian_flag} alt="Moola Logo" height={16} priority />
                  <Typography variant="caption" sx={{ ml: 0.5, fontWeight: 700 }}>CAD</Typography>
                </Box>
              )}
            </Box>
          </Box>
          {/* Mobile Nav: Hamburger */}
            {isMobile && (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
            )}
        </Toolbar>
      </Container>
      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 220 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton component={Link} href={link.href}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
