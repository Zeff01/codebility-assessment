import taskRepository from "../repositories/taskRepository.js";
import { config } from "../config/common.js";

const throwError = (message, statusCode) => {
    const error = new Error(message);
    error.statusCode = statusCode;
    throw error;
};

const validateTitle = (title, required) => {
    if (title === undefined && !required) return;
    if (!title || typeof title !== "string" || !title.trim()) {
        throwError(config.ERROR.TASK.TITLE_REQUIRED, config.STATUS.VALIDATION_ERROR.CODE);
    }
    const trimmed = title.trim();
    const { TITLE_MIN, TITLE_MAX } = config.VALIDATION.TASK;
    if (trimmed.length < TITLE_MIN) {
        throwError(config.ERROR.TASK.TITLE_MIN_LENGTH, config.STATUS.VALIDATION_ERROR.CODE);
    }
    if (trimmed.length > TITLE_MAX) {
        throwError(config.ERROR.TASK.TITLE_MAX_LENGTH, config.STATUS.VALIDATION_ERROR.CODE);
    }
};

const taskService = {
    getAllTasks: async () => taskRepository.getAllTasks(),
    getTaskById: async (id) => {
        const task = await taskRepository.getTaskById(id);
        if (task === null) throwError(config.ERROR.TASK.NOT_FOUND, config.STATUS.NOT_FOUND.CODE);
        return task;
    },
    createTask: async (task) => {
        validateTitle(task.title, true);
        return await taskRepository.createTask({ ...task, title: task.title.trim() });
    },
    updateTask: async (id, task) => {
        validateTitle(task.title, false);
        if (task.completed !== undefined && typeof task.completed !== "boolean") {
            throwError(config.ERROR.TASK.COMPLETED_INVALID, config.STATUS.VALIDATION_ERROR.CODE);
        }
        const updatedTask = await taskRepository.updateTask(id, task);
        if (updatedTask === null) throwError(config.ERROR.TASK.NOT_FOUND, config.STATUS.NOT_FOUND.CODE);
        return updatedTask;
    },
    deleteTask: async (id) => {
        const deletedTask = await taskRepository.deleteTask(id);
        if (deletedTask === null) throwError(config.ERROR.TASK.NOT_FOUND, config.STATUS.NOT_FOUND.CODE);
        return deletedTask;
    },
};

export default taskService;
