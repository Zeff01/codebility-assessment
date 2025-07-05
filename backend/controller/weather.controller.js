import axios from "axios";

export const getWeather = async (req, res) => {
  const city = req.query.city || "Philippines"; // Default to Manila if no city is provided
  const apiKey = process.env.RAPID_API_KEY;

  const options = {
    method: "GET",
    url: "https://open-weather13.p.rapidapi.com/city",
    params: { city, lang: "EN" },
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    const { name, weather, main, wind } = response.data;

    const weatherData = {
      city: name,
      description: weather[0].description,
      temperature: main.temp,
      humidity: main.humidity,
      windSpeed: wind.speed,
    };

    return res.status(200).json({
      success: true,
      message: "Weather data retrieved successfully",
      data: weatherData,
    });
  } catch (error) {
    console.log("Error fetching weather data:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching weather data.",
    });
  }
};
