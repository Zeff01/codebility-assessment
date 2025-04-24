const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

const itemsRouter = require('./routes/items');

app.use(cors());

app.use(express.json());

app.use('/items', itemsRouter);

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
