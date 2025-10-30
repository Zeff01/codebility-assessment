const express = require("express");
const router = express.Router();
let todos = require("../data/todos");

router.get("/", (req, res) => {
    res.json(todos);
});


//GET a single todo
router.get("/:id", (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).json({ message:"Todo not Found."});
    res.json(todo);
})

//CREATE a new todo
router.post("/", (req, res) => {
    const { title, completed } = req.body;

    if(!title) return res.status(400).json({ message: "Title is required." });

    const newTodo = {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        title,
        completed: completed || false,
        createdAt: new Date(),
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

//UPDATE a todo
router.put("/:id", (req, res) => {
    const { title, completed } = req.body;
    const todo = todos.find(t => t.id === parseInt(req.params.id));

    if (!todo) return res.status(404).json({ message: "Todo not Found!" });

    if(title !== undefined) todo.title = title;
    if(completed !== undefined) todo.completed = completed;

    res.json(todo);
})

//DELETE a todo
router.delete("/:id", (req,res) => {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));

    if (index === -1) return res.status(404).json({ message: "Todo not Found "});

    const deleted = todos.splice(index, 1);
    res.json({ message: "Todo deleted", deleted});
});

module.exports = router;