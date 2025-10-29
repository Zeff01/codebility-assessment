import { Weather } from "../@types/weather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../constants";

export async function apiGetTodayWeather() {
  try {
    const response = await fetch(
      `${WEATHER_API_URL}/weather?q=tantangan,ph&units=metric&appid=${WEATHER_API_KEY}`
    );

    const data = (await response.json()) as Weather;
    return data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
