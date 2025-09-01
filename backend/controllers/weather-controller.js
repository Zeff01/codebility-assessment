const axios = require("axios");
exports.getMyWeather = async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City is required" });
  }

  try {
    const apiKey = process.env.WEATHER_KEY;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: city,
          appid: apiKey,
          units: "metric",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching weather data: ", error);
    res.status(500).json({ error: "Error fetching weather data" });
  }
};
