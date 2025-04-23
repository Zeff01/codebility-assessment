import { Request, Response } from "express";
import router from "./routes/todo.route";
import { errorHandler } from "./middleware/errorHandler.middleware";

const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic route
app.use("/api/todos", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running...");
});

app.use(errorHandler);


// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
