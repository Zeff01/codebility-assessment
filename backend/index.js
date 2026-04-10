import express from "express";
import dotenv from "dotenv";

import todoRoutes from "./routes/todoRoutes.js";


dotenv.config();


const app = express();
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

//todo API route
app.use("/api/todos", todoRoutes);

app.use((err, req, res, next) => {
  console.error(err.stacks);
  res.status(500).json({
    success: false,
    message: "Something went wrong",
    error: err.message
  });
})

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
  console.log(`Todo API available at http://localhost:${PORT}/api/todos`)
});
