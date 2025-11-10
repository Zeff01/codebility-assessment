// error handling middleware

exports.notFound = (request, response, next) => {
    const error = new Error(`Not Found - ${request.originalUrl}`);
    error.status = 404;
    next(error);
}

exports.errorHandler = (error, request, response, next) => {
    const statusCode = error.status || 500;
    response.status(statusCode).json({
        error: {
            message: error.message || "Internal Server Error",
            status: statusCode
        }
    });
}