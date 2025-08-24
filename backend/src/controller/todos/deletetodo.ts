import { Request, Response } from 'express';
import errorResponse from '../../lib/error';
import todoTable     from '../../db/TodosTable';
import { isAValidNumber } from '../../lib/validatorAndSanitizer';

/**
 * delete a todo and return the new todos (an array)
 */
export default async function DeleteTodo (req: Request, res: Response): Promise<void> {
  try {
    const id        = isAValidNumber( req.params.id );
    const newTodos  = todoTable.deleteTodo(id);
    
    res.json( newTodos );
  } catch (error) {
    errorResponse(res,  `${error}` );
  }
}

