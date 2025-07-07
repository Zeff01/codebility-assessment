const { CITY, ERROR, WEATHER } = require('../enums/weather.enums');

const weather = async (req, res, next) => {
  const { lon, lat } = req.query;

  // Query Validation
  if (!lat || !lon) {
    return res.status(400).json({ error: WEATHER.PLEASE_PROVIDE });
  }
  const WEATHER_URL = `${process.env.OPENWEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`;

  try {
    const resp = await fetch(WEATHER_URL);
    const data = await resp.json();

    // Format the data you want to return
    const formattedWeather = {
      city: data.name,
      country: data.sys?.country,
      wind: data.wind,
      some_main_data: data.main,
      rain: data.rain,
      clouds: data.clouds,
    };

    return res.status(200).json(formattedWeather);
  } catch (error) {
    if (error.response) {
      const errorMsg = error.response.data.message || ERROR.FETCHING_DATA;

      if (error.response.status === 401) {
        return res.status(500).json({ error: ERROR.EXTERNAL_API });
      }
      return res.status(error.response.status).json({
        error: errorMsg,
      });
    }
    console.error(ERROR.FETCHING, error.message);
    return res.status(500).json({ error: ERROR.RETRIEVE });
  }
};

const city = async (req, res, next) => {
  // we only need 1 limit for every query
  const { q, limit = 1 } = req.query;

  // Query Validation
  if (!q) {
    return res.status(400).json({ error: CITY.PLEASE_PROVIDE });
  }

  const DIRECTION_LOCATION_URL = `${process.env.DIRECT_LOCATION_API_URL}?q=${q}&limit=${limit}&appid=${process.env.OPENWEATHER_API_KEY}`;

  try {
    const resp = await fetch(DIRECTION_LOCATION_URL);
    const data = await resp.json();

    return res.status(200).json(data);
  } catch (error) {
    if (error.response) {
      const status = error.response.status;
      const errorMsg = error.response.data.message || ERROR.FETCHING_DATA;

      if (status === 401) {
        return res.status(500).json({ error: ERROR.EXTERNAL_API });
      }

      return res.status(status).json({ error: errorMsg });
    }
    console.error(ERROR.FETCHING, error.message);
    return res.status(500).json({ error: ERROR.RETRIEVE });
  }
};

module.exports = { weather, city };
