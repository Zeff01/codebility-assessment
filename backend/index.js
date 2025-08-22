const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const todosRouter = require("./routes/todos");

app.use(express.json());

app.use("/api/todos", todosRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
