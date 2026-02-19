const AppError = require("../utils/AppError");

function authorize(...roles) {
  return (req, res, next) => {

    if (!req.user) {
      return next(new AppError("Authentication required", 401));
    }

    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to access this resource", 403)
      );
    }

    next();
  };
}

module.exports = authorize;