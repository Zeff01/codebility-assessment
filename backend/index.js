const app = require("./src/app"); // Import app.js
const PORT = process.env.PORT || 4000;

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
