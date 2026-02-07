import axios from 'axios';
import { WeatherResponse } from '../types';

const WEATHER_API_URL = 'https://api.weatherapi.com/v1/current.json';

export const fetchWeatherByCity = async (city: string): Promise<WeatherResponse> => {
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error('Weather API key not configured');
  }

  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        key: apiKey,
        q: city,
        aqi: 'no'
      }
    });

    return transformWeatherData(response.data);
  } catch (error: any) {
    if (error.response?.status === 400) {
      throw new Error('City not found');
    }
    throw new Error('Failed to fetch weather data');
  }
};

export const fetchWeatherByCoordinates = async (lat: string, lon: string): Promise<WeatherResponse> => {
  const apiKey = process.env.WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error('Weather API key not configured');
  }

  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        key: apiKey,
        q: `${lat},${lon}`,
        aqi: 'no'
      }
    });

    return transformWeatherData(response.data);
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};

const transformWeatherData = (data: any): WeatherResponse => {
  return {
    location: data.location.name,
    temperature: data.current.temp_c,
    feelsLike: data.current.feelslike_c,
    description: data.current.condition.text,
    humidity: data.current.humidity,
    windSpeed: data.current.wind_kph / 3.6
  };
};
