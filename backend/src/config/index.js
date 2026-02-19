require("dotenv").config();

const config = {
  port: process.env.PORT || 4000,
  jwtSecret: process.env.JWT_SECRET || "jwt-default-secret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "1h",
  weatherApiKey: process.env.WEATHER_API_KEY || "",
};

module.exports = config;