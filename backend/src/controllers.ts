import { Request, Response } from "express";
import { TODO, TodoType } from "./data/todo";
import { validateBody } from "./utils";

export function RootController(req: Request, res: Response) {
  return res.send("Hello from API!");
}

export function getAllTodos(req: Request, res: Response) {
  return res.json({
    message: "List of all todos",
    todos: TODO,
  });
}

export function GetTodoById(req: Request, res: Response) {
  const { id } = req.params;

  if (!id) return res.status(400).json({ message: "ID is required" });

  const todo = TODO.find((t) => t.id === Number(id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  return res.json({ message: "Todo found", todo });
}

export function CreateTodo(req: Request, res: Response) {
  const { title } = req.body;

  const error = validateBody({ title, update: false });
  if (error) return res.status(400).json({ message: error });

  const newTodo: TodoType = {
    id: TODO.length + 1,
    title,
    completed: false,
    createdAt: new Date(),
  };

  TODO.push(newTodo);
  return res.status(201).json({ message: "Todo created", todo: newTodo });
}

export function UpdateTodo(req: Request, res: Response) {
  const { id } = req.params;
  const { completed } = req.body;

  const error = validateBody({ completed, update: true });
  if (error) return res.status(400).json({ message: error });

  const todo = TODO.find((t) => t.id === Number(id));
  if (!todo) return res.status(404).json({ message: "Todo not found" });

  const updatedTodo: TodoType = {
    ...todo,
    completed: completed !== undefined ? completed : todo.completed,
    updatedAt: new Date(),
  };

  TODO[TODO.indexOf(todo)] = updatedTodo;
  return res.json({ message: "Todo updated", todo: updatedTodo });
}

export function DeleteTodo(req: Request, res: Response) {
  const { id } = req.params;

  const todoIndex = TODO.findIndex((t) => t.id === Number(id));
  if (todoIndex === -1)
    return res.status(404).json({ message: "Todo not found" });

  TODO.splice(todoIndex, 1);
  return res.json({ message: "Todo deleted" });
}
