const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const taskRouter = require("./routes/tasksRoutes");
const { errorHandler, notFound } = require("./middlewares/errorHandler");

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/todos", taskRouter);

// 404 error handler
app.use(notFound);

// General error handler
app.use(errorHandler);

module.exports = app;
