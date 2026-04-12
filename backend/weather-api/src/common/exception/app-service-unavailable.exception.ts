import { HttpStatus } from "@nestjs/common";
import { AppException } from "./app-exception";
import { ErrorCode } from "./error-code.enum";

export class AppServiceUnavailableException extends AppException {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.SERVICE_UNAVAILABLE,
    details?: any
  ) {
    super (message, HttpStatus.SERVICE_UNAVAILABLE, code, details);
  }
}