import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let errorMessage = err.message

    if (err instanceof ZodError) {
        statusCode = 400;
        errorMessage = fromZodError(err).message;
    }

    console.error(`Error: ${err.message}`)
    res.status(statusCode).json({ message: errorMessage })
}