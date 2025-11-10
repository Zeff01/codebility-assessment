const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");
const validateTasks = require("../middlewares/validateTasks");

// get all tasks
router.get("/", tasksController.getAllTasks);

// get a single task by id
router.get("/:id", tasksController.getSingleTaskById);

// create a new task
router.post("/", validateTasks.createTask, tasksController.createTask);

// update an existing task by id
router.put("/:id", validateTasks.updateTask, tasksController.updateTask);

// delete a task by id
router.delete("/:id", tasksController.deleteTask);

module.exports = router;