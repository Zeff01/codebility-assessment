require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 4000;

const apiRoutes = require("./routes/index");

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});
app.use("/api", apiRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
