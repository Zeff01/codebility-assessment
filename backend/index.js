const dayjs = require("dayjs");
const cors = require("cors");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

let todos = [];

app.post("/api/todos", async (req, res) => {
  try {
    const { title } = req.body;

    for (let i = 0; i < todos.length; i++) {
      if (title === todos[i].title) {
        return res.status(400).json({
          success: false,
          message: "This todo is already exist, please try another",
        });
      }
    }

    if (!title) {
      return res.status(404).json({
        success: false,
        message: "Please enter a to do list.",
      });
    }

    todos.push({
      id: todos.length + 1,
      title,
      completed: false,
      createdAt: dayjs(),
    });

    return res.status(200).json(todos);
  } catch (error) {
    console.error("Error fetching user:", error);

    if (error.code === 404) {
      return res.status(404).json({
        success: false,
        error: "Todo not found",
      });
    }

    return res.status(500).json({
      success: false,
      error: "Internal server error",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

app.put("/api/todos/:id", (req, res) => {
  try {
    const { title, completed } = req.body;
    const { id } = req.params;

    if (!title && !completed) {
      return res.status(400).json({
        success: false,
        message: "Please input a data to update the to do list.",
      });
    }
    if (title) {
      for (var i = 0; i < todos.length; i++) {
        if (String(todos[i].id) === String(id)) {
          todos[i].title = title;

          return res.status(200).json({
            success: true,
            message: "Successfully update a todo list",
          });
        }
      }
    }

    if (completed) {
      for (var i = 0; i < todos.length; i++) {
        if (String(todos[i].id) === String(id)) {
          todos[i].completed = completed;

          return res.status(200).json({
            success: true,
            message: "Successfully update a todo list",
          });
        }
      }
    }
  } catch (error) {
    if (error.code === 404) {
      return res.status(404).json({
        success: false,
        error: "Todo not found",
      });
    }

    return res.status(500).json({
      success: false,
      error: "Internal server error",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

app.delete("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    todos = todos.filter((data) => String(data.id) !== String(id));

    return res.status(200).json({
      success: true,
      message: "Successfully deleted a todo",
    });
  } catch (error) {
    if (error.code === 404) {
      return res.status(404).json({
        success: false,
        error: "Todo not found",
      });
    }

    return res.status(500).json({
      success: false,
      error: "Internal server error",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

app.get("/api/todos/:id", (req, res) => {
  try {
    const { id } = req.params;
    let todo = [];

    for (var i = 0; i < todos.length; i++) {
      if (String(todos[i].id) === String(id)) {
        todo = todos[i];
        break;
      }
    }

    if (!todo) {
      res.status(404).json({
        success: true,
        message: "To do not found",
      });
    }

    return res.status(200).json(todo);
  } catch (error) {
    if (error.code === 404) {
      return res.status(404).json({
        success: false,
        error: "Todo not found",
      });
    }

    return res.status(500).json({
      success: false,
      error: "Internal server error",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

app.get("/api/todos", (req, res) => {
  try {
    return res.status(200).json(todos);
  } catch (error) {
    if (error.code === 404) {
      return res.status(404).json({
        success: false,
        error: "Todo not found",
      });
    }

    return res.status(500).json({
      success: false,
      error: "Internal server error",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

app.listen(port, () => {
  console.log(` listening on port ${port}`);
});
