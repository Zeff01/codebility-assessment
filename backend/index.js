const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const path = require("path");
//const authRoutes = require('./controllers/authController');
//const notesRoutes = require('./controllers/noteController');

const app = express();
const PORT = process.env.PORT || 4000;
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/notes", require("./routes/noteRoutes"));
app.use("/api", require("./routes/adminRoutes"));

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});

module.exports = app;
