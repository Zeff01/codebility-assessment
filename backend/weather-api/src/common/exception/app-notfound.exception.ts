import { HttpStatus } from "@nestjs/common";
import { AppException } from "./app-exception";
import { ErrorCode } from "./error-code.enum";

export class AppNotFoundException extends AppException {
  constructor(
    message: string,
    code: ErrorCode = ErrorCode.CONFLICT,
    details?: any
  ) {
    super (message, HttpStatus.NOT_FOUND, code, details);
  }
}