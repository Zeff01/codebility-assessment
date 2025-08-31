/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        moola: {
          bg: "rgb(255, 255, 255)", // Primary background
          accent: "rgb(118, 20, 227)", // Accent color
          button: "#4c0c94", // Button color
          text: "rgb(118, 20, 227)", // Main text color
        },
      },
    },
  },
  plugins: [],
};
