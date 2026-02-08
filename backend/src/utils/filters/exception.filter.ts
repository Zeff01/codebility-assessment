import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(ExceptionsFilter.name);

  async catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = "Internal Server Error";
    let errorCode = null;

    if (exception instanceof HttpException) {
      status = exception.getStatus();

      const resBody = exception.getResponse();

      if (typeof resBody === "object" && resBody !== null) {
        errorCode = resBody["code"] ?? null;
        message = resBody["message"] ?? resBody;
      } else {
        message = resBody;
      }
    } else if (typeof exception === "string") {
      status = HttpStatus.BAD_REQUEST;
      message = exception;
    } else if (typeof exception === "object") {
      status = HttpStatus.BAD_REQUEST;
      message = exception.message;
      errorCode = exception.code;
    }

    if (status !== HttpStatus.BAD_REQUEST) {
      this.logger.error(exception);
    }

    response.status(status).json({
      code: errorCode ? errorCode : status,
      message,
    });
  }
}
