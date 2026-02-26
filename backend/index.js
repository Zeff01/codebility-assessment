const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const router = express.Router();
const { getTodos , getTodo, createTodos , updateTodo, deleteTodo } = require("./controllers/todos.controller.js");

// for middleware
app.use(express.json());

app.use('/api/todos', router);

// routes
router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", createTodos);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

// Basic route
/* app.get("/", (req, res) => {
  res.send("Hello from Express js!");
}); */

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});

module.exports = router;