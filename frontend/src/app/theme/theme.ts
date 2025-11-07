"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#8000FF" },
    secondary: { main: "#5F19C6" },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
});

export default theme;
