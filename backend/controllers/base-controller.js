exports.errorHandler = (error, res) => {
  const statusCode = error.status || 500;
  return res.status(statusCode).json({
    status: "error",
    statusCode: statusCode,
    message: error.message || "Internal Server Error",
  });
};
