import { Router } from "express";
import type { Request, Response } from "express";
import type { TodosType } from "../data/data.js";
import { todos } from "../data/data.js";

interface bodyData {
  title: string;
  completed?: boolean;
}

export const todosRouter: Router = Router();

todosRouter.get("/api/todos", (request: Request, response: Response) => {
  response.json({
    status: 200,
    message: "Heres your todo.",
    data: todos,
  });
});

todosRouter.post("/api/todos", (request: Request, response: Response) => {
  const { title, completed = false }: bodyData = request.body;

  if (!title)
    return response.status(404).json({
      error: "You either have a missing field.",
    });

  const newPost: TodosType = {
    id: todos.length + 1,
    title,
    completed,
    createdAt: new Date(),
  };

  todos.push(newPost);

  response.json({
    status: 200,
    message: "Sucessfully added to our database.",
    data: newPost,
  });
});

todosRouter.get("/api/todos/:id", (request: Request, response: Response) => {
  console.log(todos);
  const id: number = Number(request.params.id);

  const findTodo = todos.find((item) => item.id === id);

  if (!findTodo)
    return response.status(404).json({
      message: "We cant find that id",
    });

  return response.json({
    status: 200,
    message: "Heres your note for that id",
    data: findTodo,
  });
});

todosRouter.put("/api/todos/:id", (request: Request, response: Response) => {
  const id: number = Number(request.params.id);

  const { title, completed = false }: bodyData = request.body;

  // Find index of the item of the same id
  const findIndex = todos.findIndex((item) => item.id === id);

  if (findIndex === -1)
    return response.status(404).json({
      message: "We cant find that id",
    });

  todos[findIndex] = {
    id: todos[findIndex]?.id,
    title,
    completed,
    createdAt: new Date(),
  };

  response.json({
    status: 200,
    message: "heres your data",
    data: todos[findIndex],
  });
});

todosRouter.delete("/api/todos/:id", (request: Request, response: Response) => {
  const id = Number(request.params.id);

  // Find index of the item to delete
  const index = todos.findIndex((item) => item.id === id);
  if (index !== -1) {
    todos.splice(index, 1); // removes the item in-place
  }

  response.send("Sucessfully Deleted");
});
