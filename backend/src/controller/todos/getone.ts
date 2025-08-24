import { Request, Response } from 'express';
import errorResponse from '../../lib/error';
import todoTable     from '../../db/TodosTable';
import { isAValidNumber } from '../../lib/validatorAndSanitizer';

/**
 * Return a single todo
 */
export default async function GetOne (req: Request, res: Response): Promise<void> {
  try {

//check if the id is a valid number
    const id = isAValidNumber( req.params.id );

//find and return a todo
    const todo = todoTable.getTodoById(id);
    res.json(todo);

  } catch (error) {
    errorResponse(res,  `${error}` );
  }
}
