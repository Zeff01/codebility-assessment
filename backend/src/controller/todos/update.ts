import { Request, Response } from 'express';
import errorResponse from '../../lib/error';
import todoTable     from '../../db/TodosTable';
import { isAValidNumber, stringSanitizer, booleanValidator } from '../../lib/validatorAndSanitizer';

/**
 * Add a todo and return the new todos (an array)
 */
export default async function UpdateTodo (req: Request, res: Response): Promise<void> {
  try {
    
  //validators. Make sure that it is a valid number, string, and boolean
    const id        = isAValidNumber( req.params.id );
    const title     = stringSanitizer( req.body.title );
    const completed = booleanValidator( req.body.completed );

    const newTodos  = todoTable.updateTodo(id, title, completed);
    res.json( newTodos );
  } catch (error) {
    errorResponse(res,  `${error}` );
  }
}

