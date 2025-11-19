class AppError extends Error {
  constructor(statusCode = 500, message = 'Internal Server Error') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
