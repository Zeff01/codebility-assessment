import { HttpStatus } from "@nestjs/common";
import { AppException } from "./app-exception";
import { ErrorCode } from "./error-code.enum";

export class AppForbiddenException extends AppException {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.FORBIDDEN,
    details?: any
  ) {
    super(message, HttpStatus.FORBIDDEN, code, details);
  }
}