import { Request, Response } from 'express';
import errorResponse from '../../lib/error';
import todoTable     from '../../db/TodosTable';
import { stringSanitizer } from '../../lib/validatorAndSanitizer';

/**
 * Add a new todo
 */
export default async function NewTodo (req: Request, res: Response): Promise<void> {
  try {
    if( !req.body.title )
      return errorResponse(res, "Title is required", 400 );

    const sanitizeBody = stringSanitizer( req.body.title );
    const newTodo      = todoTable.addTodo(sanitizeBody);

    res.json( newTodo );
  } catch (error) {
    errorResponse(res,  `${error}` );
  }
}

