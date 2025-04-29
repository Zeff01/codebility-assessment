const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const todoRouter = require("./routes/todoRouter");
const globalError = require("./middlewares/globalError");

dotenv.config();

app.use(express.json());
app.use(cors());

// Basic route
app.use("/api/todos", todoRouter);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Global Error Handling
app.use(globalError);

// Handle Invalid API Routes
app.all("*", (req, res, next) => {
  next(new AppError("Cannot find this route", 404));
});

module.exports = app;
