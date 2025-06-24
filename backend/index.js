import express from "express";
import TodosRoutes from "./routes/todosRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
// Basic route
app.use("/api/todos", TodosRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
