const axios = require("axios");

const getWeather = async (city) => {
  if (!city) throw new Error("City is required");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
  const { data } = await axios.get(url);

  return {
    city: data.name,
    temperature: data.main.temp,
    description: data.weather[0].description,
    feels_like: data.main.feels_like,
  };
};

module.exports = { getWeather };
