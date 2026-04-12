import { HttpException, HttpStatus } from "@nestjs/common";
import { ErrorCode } from "./error-code.enum";

export class AppException extends HttpException {
  public readonly code: string;
  public readonly details?: any;

  constructor(
    message: string,
    status: HttpStatus,
    code: string,
    details?: any
  ) {
    super(
      {
        message,
        code,
        details
      },
      status
    );

    this.code = code;
    this.details = details;
  }
}