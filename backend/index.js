const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const { errorHandler } = require("./handlers/errorhandlers");
const todoListRouter = require("./modules/todolist/todolist.routes");

app.use(express.json());
app.use("/api/todos",todoListRouter);

app.use(errorHandler);
// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
