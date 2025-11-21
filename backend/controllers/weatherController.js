// backend/controllers/weatherController.js
const {
  getWeatherByCity,
  getWeatherByCoordinates
} = require('../services/weatherService');

async function getWeather(req, res, next) {
  try {
    const { city, lat, lon } = req.query;

    let weatherData;

    if (city) {
      weatherData = await getWeatherByCity(city);
    } else if (lat && lon) {
      weatherData = await getWeatherByCoordinates(lat, lon);
    } else {
      const error = new Error('Provide either ?city= or ?lat=&lon=');
      error.status = 400;
      throw error;
    }

    return res.json({
      user: req.user,
      weather: weatherData
    });
  } catch (err) {
    next(err);
  }
}

// 🔥 Correct named export
module.exports = {
  getWeather
};
