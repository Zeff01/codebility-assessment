import { getWeather } from "../controller/weather.controller.js";
import express from "express";
import { verifyToken } from "../middleware/verify.token.js";

const router = express.Router();

router.get("/city", verifyToken, getWeather);

export default router;
