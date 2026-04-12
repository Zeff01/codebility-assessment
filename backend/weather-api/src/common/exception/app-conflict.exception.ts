import { HttpStatus } from "@nestjs/common";
import { AppException } from "./app-exception";
import { ErrorCode } from "./error-code.enum";

export class AppConflictException extends AppException {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.CONFLICT,
    details?: any
  ) {
    super(message, HttpStatus.CONFLICT, code, details);
  }
}