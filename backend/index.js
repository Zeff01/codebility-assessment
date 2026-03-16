const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const todosRouter = require('./routes/todos');

app.use(express.json());
app.use('/api/todos', todosRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
