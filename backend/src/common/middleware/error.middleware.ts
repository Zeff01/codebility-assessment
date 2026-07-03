import type { Request, Response, NextFunction } from 'express';
import { DomainError } from '../error/domain.error.js';

export const errorHandler = (error: unknown, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof DomainError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  if (error instanceof SyntaxError && 'status' in error && error.status === 400) {
    return res.status(400).json({ message: 'Invalid JSON payload' });
  }
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
}

