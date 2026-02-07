import { Router } from "express";
import { endpoints } from "../config/endpoints.js";
import taskController from "../controller/taskController.js";

const router = Router();

router.get(endpoints.TASK.GET_ALL, taskController.getAllTasks);
router.get(endpoints.TASK.GET_BY_ID, taskController.getTaskById);
router.post(endpoints.TASK.CREATE, taskController.createTask);
router.put(endpoints.TASK.UPDATE, taskController.updateTask);
router.delete(endpoints.TASK.DELETE, taskController.deleteTask);

export default router;
