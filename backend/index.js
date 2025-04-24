const Ajv = require("ajv");
const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

const cors = require('cors');

const itemsRouter = require('./routes/items');

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

const ajv = new Ajv();

const TASKS_JSON = path.join(__dirname, "tasks.json");
const dataFile = fs.readFileSync(TASKS_JSON, "utf-8");
const tasksData = JSON.parse(dataFile);

app.use('/items', itemsRouter);

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});

module.exports=app;