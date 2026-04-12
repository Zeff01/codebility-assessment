import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  BadRequestException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { ApiError } from '../dto/api-error.dto';
import { ValidationErrorFormatter } from '../dto/validation-error.type';
import { ErrorCode } from './error-code.enum';
import { ValidationError } from 'class-validator';
import { AppException } from './app-exception';
import { ThrottlerException } from '@nestjs/throttler';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let code = ErrorCode.INTERNAL_ERROR;
    let details: any = undefined;

    // Handle custom application exceptions
    if (exception instanceof AppException) {
      const response = exception.getResponse() as any;

      status = exception.getStatus();
      message = response.message;
      code = response.code;
      details = response.details;
    } 
    // Handle throttler (rate limit) exceptions
    else if (exception instanceof ThrottlerException) {
      status = HttpStatus.TOO_MANY_REQUESTS;
      message = 'Too many requests. Please slow down and try again later.';
      code = ErrorCode.TOO_MANY_REQUESTS;
    }
    // Handle other HTTP exceptions
    else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const response = exception.getResponse();
      const resAny = response as any;

      // Validation error 
      if (exception instanceof BadRequestException) {
        if (Array.isArray(resAny.message)) {
          code = ErrorCode.VALIDATION_FAILED;
          message = 'Validation failed';

          details = ValidationErrorFormatter.format(
            (resAny.message as ValidationError[]),
          );
        } else {
          code = ErrorCode.BAD_REQUEST;
          message = resAny.message || message;
        }
      }
      // Generic HTTP error
      else {
        message =
          typeof response === 'string'
            ? response
            : resAny.message || message;

        code = ErrorCode.BAD_REQUEST;
      }
    } else {
      console.error('Unhandled error:', exception);
    }

    const apiError = new ApiError(
      status,
      message,
      code,
      req.url,
      new Date().toISOString(),
      details,
    );

    res.status(status).json(apiError);
  }
}