import { AppException } from "./app-exception";
import { ErrorCode } from "./error-code.enum";
import { HttpStatus } from '@nestjs/common';

export class AppValidationException extends AppException {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.VALIDATION_FAILED,
    details?: any
  ) {
    super(message, HttpStatus.BAD_REQUEST, code, details);
  }
}