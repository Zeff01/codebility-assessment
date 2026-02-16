const axios = require('axios');

exports.getWeather = async (req, res) => {
    const { city } = req.query;

    if (!city) {
        return res.status(400).json({ error: "City parameter is required" });
    }

    try {
        const response = await axios.get(process.env.WEATHER_API_URL, {
            params: {
                q: city,
                appid: process.env.WEATHER_API_KEY,
                units: 'metric'
            }
        });

        // We only return the specific data we need, not the huge blob from the API
        const data = response.data;
        res.status(200).json({
            city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            wind_speed: data.wind.speed
        });
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return res.status(error.response.status).json({ error: error.response.data.message });
        }
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
};