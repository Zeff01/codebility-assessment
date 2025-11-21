// backend/services/weatherService.js
const axios = require('axios');

// No API key needed with Open-Meteo 🎉

async function getWeatherByCity(city) {
  if (!city) {
    const error = new Error('City is required');
    error.status = 400;
    throw error;
  }

  try {
    // 1) Geocode city name -> latitude & longitude
    const geoUrl = 'https://geocoding-api.open-meteo.com/v1/search';

    const { data: geo } = await axios.get(geoUrl, {
      params: {
        name: city,
        count: 1,
        language: 'en',
        format: 'json'
      }
    });

    if (!geo.results || geo.results.length === 0) {
      const error = new Error('City not found');
      error.status = 404;
      throw error;
    }

    const place = geo.results[0];
    const latitude = place.latitude;
    const longitude = place.longitude;

    // 2) Get current weather using coordinates
    return await fetchWeather(latitude, longitude, {
      name: place.name,
      country: place.country
    });
  } catch (err) {
    handleWeatherError(err);
  }
}

async function getWeatherByCoordinates(lat, lon) {
  if (!lat || !lon) {
    const error = new Error('Latitude and longitude are required');
    error.status = 400;
    throw error;
  }

  const latitude = Number(lat);
  const longitude = Number(lon);

  if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
    const error = new Error('Latitude and longitude must be numbers');
    error.status = 400;
    throw error;
  }

  try {
    // We may not know the city name here, so pass null
    return await fetchWeather(latitude, longitude, null);
  } catch (err) {
    handleWeatherError(err);
  }
}

/**
 * Helper: call Open-Meteo forecast API and format result.
 */
async function fetchWeather(latitude, longitude, placeInfo) {
  const url = 'https://api.open-meteo.com/v1/forecast';

  const { data } = await axios.get(url, {
    params: {
      latitude,
      longitude,
      current_weather: true
    }
  });

  if (!data.current_weather) {
    const error = new Error('Weather data not available for this location');
    error.status = 502;
    throw error;
  }

  return formatWeather(data, latitude, longitude, placeInfo);
}

/**
 * Map Open-Meteo response to our API format
 */
function formatWeather(data, latitude, longitude, placeInfo) {
  const cw = data.current_weather;

  return {
    location: placeInfo
      ? `${placeInfo.name}${placeInfo.country ? ', ' + placeInfo.country : ''}`
      : null,
    coordinates: {
      lat: latitude,
      lon: longitude
    },
    weather: {
      // Open-Meteo current_weather fields
      temperature: cw.temperature,
      windspeed: cw.windspeed,
      winddirection: cw.winddirection,
      time: cw.time
    }
  };
}

/**
 * Normalize axios / API errors
 */
function handleWeatherError(err) {
  if (err.response) {
    console.error('Open-Meteo error data:', err.response.data);

    const apiError = new Error(
      `Weather API error: ${err.response.status} ${err.response.statusText}`
    );
    apiError.status = err.response.status;
    throw apiError;
  }

  if (err.status) {
    // Already a nicely formatted error
    throw err;
  }

  const generic = new Error('Failed to fetch weather data');
  generic.status = 502;
  throw generic;
}

module.exports = {
  getWeatherByCity,
  getWeatherByCoordinates
};
