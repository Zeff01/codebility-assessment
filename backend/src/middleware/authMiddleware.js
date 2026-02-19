const jwt = require("jsonwebtoken");
const config = require("../config");
const AppError = require("../utils/AppError");

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("No token provided. Please log in.", 401));
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    next();
  } catch (error) {
    return next(new AppError("Invalid or expired token. Please log in again.", 401));
  }
}

module.exports = authMiddleware;