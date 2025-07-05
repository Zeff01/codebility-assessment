import express from "express";
import {
  register,
  login,
  logout,
  checkAuth,
} from "../controller/auth.controller.js";
import { verifyToken } from "../middleware/verify.token.js";

const router = express.Router();

// Route for user registration
router.get("/check-auth", verifyToken, checkAuth);
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
