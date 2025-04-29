const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

async function getWeather(city) {
    const apiKey = process.env.WEATHER_API_KEY;
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
}