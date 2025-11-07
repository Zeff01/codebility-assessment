"use client";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import "./style/globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
