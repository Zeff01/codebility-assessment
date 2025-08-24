import { NextFunction, Request, Response } from "express";

export function notFound(req: Request, res: Response, next: NextFunction) {
  const error = new Error(`Not Found - ${req.method} - ${req.originalUrl}`);
  res.status(404);
  next(error);
}
