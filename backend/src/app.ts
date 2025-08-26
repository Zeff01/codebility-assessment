import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { TodoController } from "./controllers/todoController";

const app = express();

// Middleware
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("combined"));

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Routes
app.get("/api/todos", TodoController.getAllTodos);
app.get("/api/todos/:id", TodoController.getTodoById);
app.post("/api/todos", TodoController.createTodo);
app.put("/api/todos/:id", TodoController.updateTodo);
app.delete("/api/todos/:id", TodoController.deleteTodo);

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ error: "Route not found." });
});

// Error handling middleware
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong." });
  }
);

export default app;
