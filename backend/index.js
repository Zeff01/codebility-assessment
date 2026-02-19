require("dotenv").config();

const express = require("express");
const config = require("./src/config");
const logger = require("./src/utils/logger");
const authRoutes = require("./src/routes/authRoutes");
const weatherRoutes = require("./src/routes/weatherRoutes");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`, {
    ip: req.ip,
  });
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/weather", weatherRoutes);

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "API is running" });
});

app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});

app.use((err, req, res, next) => {
  logger.error(err.message, {
    statusCode: err.statusCode || 500,
    stack: err.stack,
    url: req.originalUrl,
    method: req.method,
  });

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status: "error",
    message: err.isOperational ? err.message : "An unexpected error occurred",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

app.listen(config.port, () => {
  logger.info(`Server running on http://localhost:${config.port}`);
  logger.info("Available endpoints:");
  logger.info("  POST /api/auth/register  - Register a new user");
  logger.info("  POST /api/auth/login     - Login");
  logger.info("  GET  /api/weather?city=  - Get weather (requires auth)");
});