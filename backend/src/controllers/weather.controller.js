const weatherService = require("../services/weather.service");

const getWeather = async (req, res, next) => {
  try {
    const { city } = req.query;
    const weather = await weatherService.getWeather(city);
    res.json(weather);
  } catch (err) {
    next(err);
  }
};

module.exports = { getWeather };
