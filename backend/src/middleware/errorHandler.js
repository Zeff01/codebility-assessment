const errorHandler = (err, req, res, next) => {
  const statusCode = err && err.statusCode ? err.statusCode : 500;
  const message = err && err.message ? err.message : 'Internal Server Error';

  // In development include stack for easier debugging
  if (process.env.NODE_ENV === 'development') {
    return res.status(statusCode).json({
      status: 'error',
      statusCode,
      message,
      stack: err.stack,
    });
  }

  return res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

export default errorHandler;
