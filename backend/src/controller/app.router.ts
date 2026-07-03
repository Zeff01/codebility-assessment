import type { Express } from "express";
import todoRouter from './todo.controller.js';


export const appController = (app: Express) => {
  app.use('/api/todos', todoRouter);
}
