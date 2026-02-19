const authService = require("../services/authService");
const AppError = require("../utils/AppError");

const authController = {

  async register(req, res, next) {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) {
        throw new AppError("Email and password are required", 400);
      }

      const response = await authService.register(email, password, role);

      res.status(201).json({
        status: "success",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },

  async login(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new AppError("Email and password are required", 400);
      }

      const response = await authService.login(email, password);

      res.status(200).json({
        status: "success",
        data: response,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authController;