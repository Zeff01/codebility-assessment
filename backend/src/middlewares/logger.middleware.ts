import { Request, Response, NextFunction } from "express";
import { Injectable, NestMiddleware, Logger } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger("HTTP");

  use(request: Request, response: Response, next: NextFunction): void {
    const requestStart = Date.now();

    response.on("finish", () => {
      const { rawHeaders, method, url, body } = request;

      this.logger.log(
        JSON.stringify({
          timestamp: Date.now(),
          processingTime: Date.now() - requestStart,
          method,
          url,
          rawHeaders,
          body,
        })
      );
    });

    next();
  }
}
