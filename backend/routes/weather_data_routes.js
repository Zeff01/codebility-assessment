import express from "express";
import { Weather } from "../controllers/weather_data.js";
import { Authentication } from "../controllers/authentication_controller.js";

export const weatherData = express.Router();

weatherData.get("/weather", Authentication.checkIfAuthenticated, Weather.getWeatherDataByCityName);
weatherData.get("/forecast", Authentication.checkIfAuthenticated, Weather.getWeatherDataForecast);