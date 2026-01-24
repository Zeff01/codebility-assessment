import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  async getWeather(city: string) {
    try {
      const res = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather',
        {
          params: {
            q: city,
            units: 'metric',
            appid: process.env.WEATHER_API_KEY,
          },
        },
      );

      return {
        city: res.data.name,
        temperature: res.data.main.temp,
        description: res.data.weather[0].description,
      };
    } catch {
      throw new NotFoundException('City not found');
    }
  }
}
