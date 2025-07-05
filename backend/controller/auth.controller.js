import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateTokenAndSetCookie } from "../utils/generate.token.set.cookie.js";

const users = [];

export const register = async (req, res) => {
  const { name, username, password } = req.body;

  try {
    // Validate the user input
    if (!name || !username || !password)
      return res.status(400).json({
        success: false,
        message: "Username and password are required.",
      });

    // Check if the user already exists
    const existingUser = users.find((user) => user.username === username);

    if (existingUser)
      return res.status(400).json({
        success: false,
        message: "Username already exists.",
      });

    // Validate password strength, and regex with special characters
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // Check if the password meets the criteria
    if (!passwordRegex.test(password))
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user and store it in memory
    const user = {
      name,
      username,
      password: hashedPassword,
    };
    // Push the user to the users array
    users.push(user);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      ...user,
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while registering the user.",
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Validate the user input
    if (!username || !password)
      return res.status(400).json({
        success: false,
        message: "Username and password are required.",
      });

    // Check if the credentials are correct
    const user = users.find((user) => user.username === username);
    if (!user)
      return res.status(400).json({
        success: false,
        message: "Invalid username or password.",
      });

    // Check if the password is valid

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid)
      return res.status(400).json({
        success: false,
        message: "Invalid username or password.",
      });

    generateTokenAndSetCookie(user, res);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      ...user,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while logging in the user.",
    });
  }
};

export const logout = (req, res) => {
  try {
    // Clear the cookie by setting its maxAge to 0
    res.clearCookie("token", {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Use secure cookies in production
      sameSite: "Strict", // Helps prevent CSRF attacks
    });

    return res.status(200).json({
      success: true,
      message: "User logged out successfully.",
    });
  } catch (error) {
    console.error("Error logging out user:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while logging out the user.",
    });
  }
};

export const checkAuth = (req, res) => {
  try {
    // Check if the user is authenticated
    const user = req.user.select("-password"); // Exclude password from the user object
    // If user is not authenticated, return 401
    if (!user)
      return res.status(401).json({
        success: false,
        message: "User is not authenticated.",
      });
    // If user is authenticated, return user information
    res.status(200).json({
      success: true,
      message: "User is authenticated.",
      ...user,
    });
  } catch (error) {
    console.error("Error checking authentication:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while checking authentication.",
    });
  }
};
