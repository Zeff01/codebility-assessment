const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const todoRoutes = require("./src/modules/todo/todo.route.js");
const GlobalErrorHandlers = require("./src/helpers/GlobalErrorHandlers.js");

app.use(express.json());

app.use("/api", todoRoutes);
GlobalErrorHandlers(app);

app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
