const express = require("express");
const morgan = require("morgan");
const authRoutes = require("./routes/auth.routes");
const weatherRoutes = require("./routes/weather.routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/weather", weatherRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message || "Internal Server Error" });
});

module.exports = app;
