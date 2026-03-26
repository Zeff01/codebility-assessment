import express from "express";
import todoRoutes from "./routes/todo.routes.js";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use("/api", todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
