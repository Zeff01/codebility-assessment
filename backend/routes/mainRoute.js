import { Router } from "express";
import { endpoints } from "../config/endpoints.js";
import { config } from "../config/common.js";
import taskRoutes from "./taskRoutes.js";

const router = Router();

router.get(endpoints.MAIN.DEFAULT, (_req, res) => {
    res.json({
        success: true,
        message: config.MSG.WELCOME,
    });
});

router.use(endpoints.MAIN.DEFAULT, taskRoutes);

export default router;