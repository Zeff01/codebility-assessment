import express, { Express, Request, Response, NextFunction } from "express";
import todoRoutes from "./routes/todoRoutes";

const app: Express = express();
const PORT = process.env.PORT || 4000;

/**
 * Middleware: Parse JSON request bodies
 */
app.use(express.json());

/**
 * Middleware: Request logging
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

/**
 * Health check endpoint
 */
app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

/**
 * API routes
 */
app.use("/api/todos", todoRoutes);

/**
 * 404 handler for undefined routes
 */
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.path} not found`,
  });
});

/**
 * Error handling middleware
 */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(`Error: ${err.message}`);
  res.status(500).json({
    success: false,
    error: "Internal server error",
  });
});

/**
 * Start server
 */
app.listen(PORT, () => {
  console.log(`✓ Todo API is running on http://localhost:${PORT}`);
  console.log(`✓ Health check: http://localhost:${PORT}/health`);
  console.log(`✓ API Documentation: http://localhost:${PORT}/api/todos`);
});

export default app;
