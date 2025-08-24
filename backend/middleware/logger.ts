import { NextFunction, Request, Response } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
  // Log the request
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );

  // Log the request body
  if (
    req.body &&
    Object.keys(req.body).length > 0 &&
    req.method !== "GET" &&
    typeof req.body === "object"
  ) {
    console.log(`Body: ${JSON.stringify(req.body)}`);
  }

  // Log the response
  res.on("finish", () => {
    console.log(`${res.statusCode} - ${res.statusMessage}`);
    console.log("");
  });

  // Continue to the next middleware
  next();
}
