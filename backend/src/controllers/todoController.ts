import { Request, Response } from "express";
import { TodoService } from "../services/todoService";
import { CreateTodoRequest, UpdateTodoRequest } from "../types/todo";

export const TodoController = {
  // Get all todos
  getAllTodos: (req: Request, res: Response): void => {
    try {
      const todos = TodoService.getAllTodo();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: "Internal server error." });
    }
  },

  // Get a single todo by ID
  getTodoById: (req: Request, res: Response): void => {
    try {
      const { id } = req.params;
      const { todo, error } = TodoService.getTodoById(id);

      if (error) {
        res.status(404).json({ error });
        return;
      }

      res.json(todo);
    } catch (error) {
      res.status(500).json({ error: "Internal server error." });
    }
  },

  // Create a new todo
  createTodo: (req: Request, res: Response): void => {
    try {
      const todoData: CreateTodoRequest = req.body;
      const { todo, error } = TodoService.createTodo(todoData);

      if (error) {
        res.status(400).json({ error });
        return;
      }

      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json({ error: "Internal server error." });
    }
  },

  // Update an existing todo
  updateTodo: (req: Request, res: Response): void => {
    try {
      const { id } = req.params;
      const todoData: UpdateTodoRequest = req.body;
      const { todo, error } = TodoService.updateTodo(id, todoData);

      if (error) {
        const statusCode = error === "Todo not found." ? 404 : 400;
        res.status(statusCode).json({ error });
        return;
      }

      res.status(200).json({ message: "User updated successfully", todo });
    } catch (error) {
      res.status(500).json({ error: "Internal server error." });
    }
  },

  // Delete a todo
  deleteTodo: (req: Request, res: Response): void => {
    try {
      const { id } = req.params;
      const { success, error } = TodoService.deleteTodo(id);

      if (error) {
        res.status(404).json({ error });
        return;
      }

      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error." });
    }
  },
};
