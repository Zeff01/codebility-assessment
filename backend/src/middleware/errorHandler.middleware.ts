import { NextFunction, Request, Response } from "express";
import AppError from "../utils/appError.util";
import { ZodError } from "zod";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err);
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            error: err.error
        });
    }

    if (err instanceof ZodError) {
        return res.status(400).json({
            success: false,
            error: "VALIDATION FAILED",
            message: {
                field: err.errors[0].path[0],
                message: err.errors[0].message
            }
        });
    }

    return res.status(500).json({
        success: false,
        error: "INTERNAL SERVER ERROR"
    });
};