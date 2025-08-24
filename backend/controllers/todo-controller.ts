import { Request, Response } from "express";
import { TodoService } from "../services/todo-service.js";

export class TodoController {
  // Dependency injection
  constructor(private todoService: TodoService) {}

  /**
   *
   * @param req
   * @param res
   * @returns An object with a message and the created todo
   */
  create = (req: Request, res: Response) => {
    try {
      const { title } = req.body;

      if (typeof title !== "string" || !title.trim()) {
        return res
          .status(400)
          .json({ message: "Title is required and must be a string" });
      }

      const newTodo = this.todoService.createTodo({ title });
      return res
        .status(201)
        .json({ message: "Todo created successfully", todo: newTodo });
    } catch (error) {
      console.error("Error creating todo:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  /**
   *
   * @param req
   * @param res
   * @returns An array of todos
   */
  getAll = (req: Request, res: Response) => {
    try {
      const todos = this.todoService.getAllTodos();
      return res.status(200).json(todos);
    } catch (error) {
      console.error("Error getting todos:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  /**
   *
   * @param req
   * @param res
   * @returns An object with a message and the todo
   */
  getById = (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid todo ID" });
      }

      const todo = this.todoService.getTodoById(id);
      if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      return res.status(200).json(todo);
    } catch (error) {
      console.error("Error getting todo:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  /**
   *
   * @param req
   * @param res
   * @returns An object with a message and the updated todo
   */
  update = (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid todo ID" });
      }

      const { title, completed } = req.body;

      if (title !== undefined && typeof title !== "string") {
        return res.status(400).json({ message: "Title must be a string" });
      }
      if (completed !== undefined && typeof completed !== "boolean") {
        return res.status(400).json({ message: "Completed must be a boolean" });
      }

      const updatedTodo = this.todoService.updateTodo(id, { title, completed });
      if (!updatedTodo) {
        return res.status(404).json({ message: "Todo not found" });
      }

      return res
        .status(200)
        .json({ message: "Todo updated successfully", todo: updatedTodo });
    } catch (error) {
      console.error("Error updating todo:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };

  /**
   *
   * @param req
   * @param res
   * @returns An object with a message
   */
  delete = (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid todo ID" });
      }

      const deleted = this.todoService.deleteTodo(id);
      if (!deleted) {
        return res.status(404).json({ message: "Todo not found" });
      }

      return res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
      console.error("Error deleting todo:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}
