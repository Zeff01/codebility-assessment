import { Router } from "express";

import { getToDos, getToDo, deleteToDo, postToDo, putToDo } from "../service/todos";
const router = Router()

router.get("/", getToDos)
router.get("/:id", getToDo)
router.delete("/:id", deleteToDo)
router.post("/", postToDo)
router.put("/:id", putToDo)

export default router