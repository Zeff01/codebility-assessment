import express, { Application } from "express";
import { logger } from "./middleware/logger.js";
import { notFound } from "./middleware/not-found.js";
import { xss } from "express-xss-sanitizer";
import cors from "cors";
import helmet from "helmet";
import todoRouter from "./routes/todo-routes.js";

// Express Config
const app: Application = express();

// Middlewares
app.use(logger);
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/todos", todoRouter);

// Not Found
app.use(notFound);

export default app;
