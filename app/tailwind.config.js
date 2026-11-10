// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["var(--font-jakarta)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        navy: "#10172A",
        electric: "#6366F1",
        violet: "#8B5CF6",
        cyan: "#06B6D4",
        teal: "#14B8A6",
      },
    },
  },
  plugins: [],
};