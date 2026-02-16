const axios = require('axios');

/**
 * Get weather data for a specified city
 * @route GET /api/weather?city={cityName}
 * @access Protected (requires authentication)
 */
exports.getWeather = async (req, res) => {
    const { city } = req.query;

    // Validation
    if (!city) {
        return res.status(400).json({ 
            error: "City parameter is required",
            usage: "GET /api/weather?city={cityName}"
        });
    }

    try {
        // Fetch weather data from OpenWeatherMap API
        const response = await axios.get(process.env.WEATHER_API_URL, {
            params: {
                q: city,
                appid: process.env.WEATHER_API_KEY,
                units: 'metric' // Use Celsius
            },
            timeout: 5000 // 5 second timeout
        });

        const data = response.data;

        // Return formatted weather data
        res.status(200).json({
            success: true,
            data: {
                city: data.name,
                country: data.sys.country,
                coordinates: {
                    lat: data.coord.lat,
                    lon: data.coord.lon
                },
                weather: {
                    main: data.weather[0].main,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon
                },
                temperature: {
                    current: data.main.temp,
                    feels_like: data.main.feels_like,
                    min: data.main.temp_min,
                    max: data.main.temp_max
                },
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                wind: {
                    speed: data.wind.speed,
                    direction: data.wind.deg
                },
                clouds: data.clouds.all,
                visibility: data.visibility,
                timestamp: new Date(data.dt * 1000).toISOString()
            }
        });
    } catch (error) {
        console.error('Weather API error:', error.message);

        if (error.response) {
            // The weather API responded with an error
            const status = error.response.status;
            const message = error.response.data.message || 'Failed to fetch weather data';

            if (status === 404) {
                return res.status(404).json({ 
                    error: `City "${city}" not found`,
                    suggestion: "Please check the city name and try again"
                });
            }

            return res.status(status).json({ error: message });
        }

        if (error.code === 'ECONNABORTED') {
            return res.status(504).json({ error: "Weather API request timeout" });
        }

        // Generic error
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
};

/**
 * Get weather data by coordinates
 * @route GET /api/weather/coordinates?lat={latitude}&lon={longitude}
 * @access Protected (requires authentication)
 */
exports.getWeatherByCoordinates = async (req, res) => {
    const { lat, lon } = req.query;

    // Validation
    if (!lat || !lon) {
        return res.status(400).json({ 
            error: "Latitude and longitude parameters are required",
            usage: "GET /api/weather/coordinates?lat={latitude}&lon={longitude}"
        });
    }

    try {
        // Fetch weather data from OpenWeatherMap API
        const response = await axios.get(process.env.WEATHER_API_URL, {
            params: {
                lat,
                lon,
                appid: process.env.WEATHER_API_KEY,
                units: 'metric'
            },
            timeout: 5000
        });

        const data = response.data;

        // Return formatted weather data
        res.status(200).json({
            success: true,
            data: {
                city: data.name,
                country: data.sys.country,
                coordinates: {
                    lat: data.coord.lat,
                    lon: data.coord.lon
                },
                weather: {
                    main: data.weather[0].main,
                    description: data.weather[0].description,
                    icon: data.weather[0].icon
                },
                temperature: {
                    current: data.main.temp,
                    feels_like: data.main.feels_like,
                    min: data.main.temp_min,
                    max: data.main.temp_max
                },
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                wind: {
                    speed: data.wind.speed,
                    direction: data.wind.deg
                },
                clouds: data.clouds.all,
                visibility: data.visibility,
                timestamp: new Date(data.dt * 1000).toISOString()
            }
        });
    } catch (error) {
        console.error('Weather API error:', error.message);

        if (error.response) {
            return res.status(error.response.status).json({ 
                error: error.response.data.message || 'Failed to fetch weather data'
            });
        }

        res.status(500).json({ error: "Failed to fetch weather data" });
    }
};