import dotenv from "dotenv";

dotenv.config();

import express from "express";
import { authenticationRoutes } from "./routes/authentication_routes.js";
import { weatherData } from "./routes/weather_data_routes.js";
import cookieParser from "cookie-parser";

const app = express();

export const SESSION = new Map();

const PORT = 5000;

app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use("/api/auth", authenticationRoutes);
app.use("/api", weatherData)

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}...`);
    
})