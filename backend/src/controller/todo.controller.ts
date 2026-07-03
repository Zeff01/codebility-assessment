import { Router } from "express";
import type { Request, Response, NextFunction } from 'express';
import { InMemoryTodoRepository } from "../repository/todo.repository.js";
import { TodoUsecase } from "../usecase/todo.usecase.js";


const router = Router();

const repo = new InMemoryTodoRepository(); //changing this into adding a param if we r going to use a db
const uc = new TodoUsecase(repo);

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(uc.getAllTodos());
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;

    res.status(200).json(uc.getTodoById(id));
  } catch (error) {
    next(error);
  }
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(201).json(uc.createTodo(req.body));
  } catch (error) {
    next(error);
  }
});

router.put('/:id', (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;

    res.status(200).json(uc.updateTodo(id, req.body));
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id as string;
    uc.deleteTodo(id);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
});


export default router;
