const express = require("express");
const app = express();

//Incremental ID generator for todos
let nextTodoNumber = 1;

function createTodoId() {
  const id = `TASK_${String(nextTodoNumber).padStart(3, "0")}`;
  nextTodoNumber += 1;
  return id;
}

const PORT = process.env.PORT || 4000;
const todos = new Map();

app.use(express.json());

// Validate writable todo fields.
// POST: title is required; completed defaults to false.
// PUT: both title and completed are required.
function validateTodo(body, { isUpdate = false } = {}) {
  const errors = {};

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { body: "Request body must be a JSON object" };
  }

  for (const key of Object.keys(body)) {
    if (!["title", "completed"].includes(key)) {
      errors[key] = "Unknown field";
    }
  }

  if (typeof body.title !== "string" || body.title.trim() === "") {
    errors.title = "Title must be a non-empty string";
  } else if (body.title.trim().length > 200) {
    errors.title = "Title must be 200 characters or fewer";
  }

  if (isUpdate || Object.hasOwn(body, "completed")) {
    if (typeof body.completed !== "boolean") {
      errors.completed = "Completed must be a boolean";
    }
  }

  return errors;
}

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// List all todos
app.get("/api/todos", (req, res) => {
  res.json([...todos.values()]);
});

//GET: Get one todo
app.get("/api/todos/:id", (req, res) => {
  const todo = todos.get(req.params.id);

  //ERROR: 404, TODO_NOT_EXIST, Todo not found
  if (!todo) {
    return res.status(404).json({
      error_code: "TODO_NOT_EXIST", 
      error_message: "Todo not found" 
    });
  }

  res.json(todo);
});

//POST: Create a todo
app.post("/api/todos", (req, res) => {
  const body = req.body;

  // Batch request: { "todos": [{ "title": "..." }, ...] }
  if (body && Object.hasOwn(body, "todos")) {
    const errors = {};

    if (Object.keys(body).length !== 1) {
      errors.body = 'Batch requests can only contain the "todos" field';
    }

    if (!Array.isArray(body.todos) || body.todos.length === 0) {
      errors.todos = "Todos must be a non-empty array";
    } else if (body.todos.length > 100) {
      errors.todos = "A maximum of 100 todos can be created at once";
    } else {
      body.todos.forEach((todo, index) => {
        const todoErrors = validateTodo(todo);
        if (Object.keys(todoErrors).length > 0) {
          errors[`todos[${index}]`] = todoErrors;
        }
      });
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        error: "Validation failed",
        details: errors,
      });
    }

    const createdTodos = body.todos.map((item) => ({
      id: createTodoId(),
      title: item.title.trim(),
      completed: item.completed ?? false,
      createdAt: new Date().toISOString(),
    }));

    createdTodos.forEach((todo) => todos.set(todo.id, todo));

    return res.status(201).json(createdTodos);
  }

  //Function, Single-todo request: { "title": "...", "completed": false }
  const errors = validateTodo(body);

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      error: "Validation failed",
      details: errors,
    });
  }

  const todo = {
    id: createTodoId(),
    title: body.title.trim(),
    completed: body.completed ?? false,
    createdAt: new Date().toISOString(),
  };

  todos.set(todo.id, todo);
  res.status(201).json(todo);
});

//Validation: Replace a todo's editable fields
app.put("/api/todos/:id", (req, res) => {
  const errors = validateTodo(req.body, { isUpdate: true });

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      error: "Validation failed",
      details: errors,
    });
  }

  const existingTodo = todos.get(req.params.id);

  //ERROR: 404, TODO_NOT_EXIST, Todo not found
  if (!existingTodo) {
    return res.status(404).json({ 
      error_code: "TODO_NOT_EXIST",
      error_message: "Todo not found" 
    });
  }

  const updatedTodo = {
    ...existingTodo,
    title: req.body.title.trim(),
    completed: req.body.completed,
  };

  todos.set(updatedTodo.id, updatedTodo);
  res.json(updatedTodo);
});

//DELETE: Delete a todo
app.delete("/api/todos/:id", (req, res) => {
  if (!todos.has(req.params.id)) {
    return res.status(404).json({
      error_code: "TODO_NOT_EXIST",
      error_message: "Todo not found" 
    });
  }

  todos.delete(req.params.id);
  res.status(204).end();
});

//Error Handling: Handle unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

//Error Handling: Handle malformed JSON and unexpected errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "Request body must be valid JSON" });
  }

  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});