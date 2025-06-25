import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 4000;

interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
}

const todos: Todo[] = [];

app.use(bodyParser.json());

// Global error handler middleware
app.use((err: Error, req: Request, res: Response, next: any) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Basic route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express");
});

// GET /api/todos - List all todos
app.get("/api/todos", (req: Request, res: Response) => {
  try {
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve todos" });
  }
});

// GET /api/todos/:id - Get a single todo
app.get("/api/todos/:id", (req: Request, res: Response) => {
  try {
    const idParams = req.params.id;
    const todo = todos.find((item) => item.id === idParams);
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve todo" });
  }
});

// POST /api/todos - Create a new todo
app.post("/api/todos", (req: Request, res: Response) => {
  try {
    const { title, completed } = req.body;
    
    // Enhanced validation
    if (!title || typeof title !== "string" || title.trim() === "") {
      return res.status(400).json({ error: "Title is required and must be a non-empty string" });
    }
    
    if (typeof completed !== "boolean") {
      return res.status(400).json({ error: "Completed must be a boolean" });
    }

    const newTodo: Todo = {
      id: uuidv4(),
      title: title.trim(),
      completed,
      createdAt: new Date().toISOString(),
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
});

// PUT /api/todos/:id - Update a todo
app.put("/api/todos/:id", (req: Request, res: Response) => {
  try {
    const idParams = req.params.id;
    const todo = todos.find((item) => item.id === idParams);
    
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    const { title, completed } = req.body;
    if (title !== undefined && (typeof title !== "string" || title.trim() === "")) {
      return res.status(400).json({ error: "Title must be a non-empty string" });
    }
    if (completed !== undefined && typeof completed !== "boolean") {
      return res.status(400).json({ error: "Completed must be a boolean" });
    }

    // Update only provided fields
    if (title !== undefined) todo.title = title.trim();
    if (completed !== undefined) todo.completed = completed;
    
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
});

// DELETE /api/todos/:id - Delete a todo
app.delete("/api/todos/:id", (req: Request, res: Response) => {
  try {
    const idParams = req.params.id;
    const index = todos.findIndex((t) => t.id === idParams);
    
    if (index === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }

    todos.splice(index, 1);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
});

// Handle 404 for unknown routes
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});