import { Request, Response } from 'express';
import errorResponse from '../../lib/error';
import todoTable     from '../../db/TodosTable';

export default async function GetAll (_req: Request, res: Response): Promise<void> {
  try {
    const todos = todoTable.getTodos();
    res.json(todos);

  } catch (error) {
    errorResponse(res, `${error}` );
  }
}
