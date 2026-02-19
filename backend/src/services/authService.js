const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config");
const userRepository = require("../repositories/userRepository");
const AppError = require("../utils/AppError");
const logger = require("../utils/logger");

const authService = {
  async register(email, password, role = "user") {
    const existingUser = userRepository.findByEmail(email);
    if (existingUser) {
      throw new AppError("Email already registered", 409);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = userRepository.create({
      email,
      password: hashedPassword,
      role,
    });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn }
    );

    logger.info("User registered successfully", { userId: user.id, email: user.email });

    const { password: _, ...userWithoutPassword } = user;

    return { user: userWithoutPassword, token };
  },

  async login(email, password) {
    const user = userRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Invalid email or password", 401);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new AppError("Invalid email or password", 401);
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn }
    );

    logger.info("User logged in successfully", { userId: user.id, email: user.email });

    const { password: _, ...userWithoutPassword } = user;

    return { user: userWithoutPassword, token };
  },
};

module.exports = authService;