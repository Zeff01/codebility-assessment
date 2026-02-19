const weatherService = require("../services/weatherService");

const weatherController = {
  async getWeather(req, res, next) {
    try {
      const city = req.query.city || "London";

      const weather = await weatherService.getWeather(city);

      res.status(200).json({
        status: "success",
        data: weather,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = weatherController;