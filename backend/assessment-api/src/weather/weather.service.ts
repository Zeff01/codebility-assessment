import { HttpService } from '@nestjs/axios';
import { Injectable, BadRequestException } from '@nestjs/common';

import { lastValueFrom } from 'rxjs';

@Injectable()
export class WeatherService {
  constructor(private readonly httpService: HttpService) {}

  async getWeather(city: string) {
    if (!city) {
      throw new BadRequestException('City query parameter is required');
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const res = await lastValueFrom(this.httpService.get(url));

      return {
        city: res.data.name,
        temperature: res.data.main.temp,
        description: res.data.weather[0].description,
        humidity: res.data.main.humidity,
        windSpeed: res.data.wind.speed,
      };
    } catch (error: any) {
      if (error.response && error.response.data) {
        throw new BadRequestException(
          error.response.data.message || 'Failed to fetch weather data',
        );
      }
      throw new BadRequestException('Failed to fetch weather data');
    }
  }
}
