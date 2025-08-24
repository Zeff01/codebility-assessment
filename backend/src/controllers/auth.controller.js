const authService = require("../services/auth.service");

const register = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await authService.register({ username, password });
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await authService.login({ username, password });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
