import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: "#fff8f1",
          100: "#ffe8d8",
          200: "#ffd0b5",
          300: "#ffb088",
          400: "#ff8c5f",
          500: "#ff6b35", // Primary
          600: "#ff4d12",
          700: "#e63c00",
          800: "#c63300",
          900: "#9c2a02",
        },
        teal: {
          50: "#f0fdfb",
          100: "#ccfbf6",
          200: "#99f6ed",
          300: "#5eebe0",
          400: "#2dd8cb",
          500: "#2ec4b6", // Secondary
          600: "#139287",
          700: "#117b70",
          800: "#12625a",
          900: "#13514b",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
