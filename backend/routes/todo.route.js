const express = require("express");
const router = express.Router();

const todoControllers = require("../controllers/todo.controllers");

router.get("/", todoControllers.getToDo);
router.get("/:id", todoControllers.getToDoByID);
router.post("/", todoControllers.addToDo);
router.put("/:id", todoControllers.updateToDo);
router.delete("/:id", todoControllers.deleteToDoByID);

module.exports = router;
