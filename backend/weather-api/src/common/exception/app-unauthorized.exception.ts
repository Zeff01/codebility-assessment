import { HttpStatus } from "@nestjs/common";
import { AppException } from "./app-exception";
import { ErrorCode } from "./error-code.enum";

export class AppUnauthorizedException extends AppException {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.AUTH_INVALID_CREDENTIALS,
    details?: any
  ) {
    super(message, HttpStatus.UNAUTHORIZED, code, details);
  }
}