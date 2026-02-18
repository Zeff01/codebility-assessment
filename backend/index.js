const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const todoRoutes = require('./routes/todoRoutes');

app.use(express.json());

app.use('/api/todos', todoRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
