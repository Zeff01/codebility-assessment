import express from "express"
import todoRoutes from "./src/todo.route.js"
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// Basic route
app.use('/api/todos', todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
