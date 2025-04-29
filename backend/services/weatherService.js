const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

async function getWeather(city) {
    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        return {
            temp: response.data.main.temp,
            description: response.data.weather[0].description,
        };
    
    } catch (error) {
        console.error(error.message)
        //res.status(500).json({ message: 'Error fetching weather data', error: error.message });
    }
    
}

module.exports = {getWeather};