const bodyParser = require("body-parser");
const express = require("express");
const fs = require("fs");
const path = require("path");
const dotenv = require('dotenv');
const bcryptv = require('bcryptjs');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const cors = require('cors');


app.use(cors());

app.use(express.json());

app.use(bodyParser.json());



// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});

module.exports=app;