const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const AppError = require("./middleware/AppError");

app.use(express.json());

// Routes
const todoRoutes = require("./routes/todo_routes");

// App Server Routes
app.use("/api", todoRoutes);

// No Path Error Handler
app.use((req, res, next) => {
  next(new AppError("Page Not Found", 404));
});

// Data Error Handler
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Oh no! Something Went Wrong!!" } = err;
  const response = { success: false, message, statusCode };

  if (process.env.NODE_ENV !== "production") {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
});

app.listen(PORT, () => {
  console.log(`Server started: ${PORT}`);
});
