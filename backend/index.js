import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import weatherRoutes from "./routes/weather.route.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());

// parsing URL-encoded data
app.use(cors());

// security headers
app.use(helmet());

// logging HTTP requests
app.use(morgan("dev"));

// Middleware for parsing cookies
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Import routes
app.use("/api/auth", authRoutes);
app.use("/api/weather", weatherRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
