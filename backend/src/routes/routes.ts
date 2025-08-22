import express from "express";
import { getWeather, login, register } from "../controller/controller";
import authMiddleware from "../middleware/auth.middleware";

const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/weather", authMiddleware, getWeather);

export default router;
