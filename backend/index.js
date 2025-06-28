import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import route from "./Routes/UserRoutes.js";

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;

dotenv.config();

// MongoDB Atlas Connection
const MONGO_URI = process.env.MONGO_URL;

// Start server
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("DB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Backend is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Basic route
app.use("/api", route);
