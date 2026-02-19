const axios = require("axios");
const config = require("../config");
const AppError = require("../utils/AppError");
const logger = require("../utils/logger");

const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const weatherService = {
  async getWeather(city) {
    try {
      logger.info("Fetching weather data", { city });

      const response = await axios.get(WEATHER_BASE_URL, {
        params: {
          q: city,
          appid: config.weatherApiKey,
          units: "metric",
        },
      });

      const data = response.data;

      const weather = {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        windSpeed: data.wind.speed,
      };

      logger.info("Weather data fetched successfully", { city: weather.city });

      return weather;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          throw new AppError(`City "${city}" not found`, 404);
        }
        if (error.response.status === 401) {
          logger.error("Weather API key is invalid");
          throw new AppError("Weather service configuration error", 500);
        }
        throw new AppError("Weather service returned an error", error.response.status);
      }

      logger.error("Weather API request failed", { error: error.message });
      throw new AppError("Unable to reach weather service. Please try again later.", 503);
    }
  },
};

module.exports = weatherService;