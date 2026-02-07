import taskService from "../services/taskService.js";
import { config } from "../config/common.js";

const handle = (fn, successStatus = 200, messageOrGetter) => async (req, res) => {
    try {
        const data = await fn(req);
        const message =
            typeof messageOrGetter === "function"
                ? messageOrGetter(data)
                : messageOrGetter;
        res.status(successStatus).json({ success: true, data, message });
    } catch (error) {
        const code = error.statusCode || config.STATUS.SERVER_ERROR.CODE;
        res.status(code).json({ success: false, message: error.message });
    }
};

const taskController = {
    getAllTasks: handle(
        () => taskService.getAllTasks(),
        200,
        (data) =>
            data.length === 0 ? config.SUCCESS.TASK.NO_TASKS : config.SUCCESS.TASK.FETCHED
    ),
    getTaskById: handle(
        (req) => taskService.getTaskById(req.params.id),
        200,
        config.SUCCESS.TASK.FOUND
    ),
    createTask: handle(
        (req) => taskService.createTask(req.body),
        201,
        config.SUCCESS.TASK.CREATED
    ),
    updateTask: handle(
        (req) => taskService.updateTask(req.params.id, req.body),
        200,
        config.SUCCESS.TASK.UPDATED
    ),
    deleteTask: handle(
        (req) => taskService.deleteTask(req.params.id),
        200,
        config.SUCCESS.TASK.DELETED
    ),
};

export default taskController;
