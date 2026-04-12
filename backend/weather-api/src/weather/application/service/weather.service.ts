import { HttpService } from "@nestjs/axios";
import { Cache, CACHE_MANAGER } from "@nestjs/cache-manager";
import { Inject, Logger } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AppValidationException } from "../../../common/exception/app-validation.exception";
import { firstValueFrom, retry } from "rxjs";
import { WeatherResponseDto } from '../../api/dto/weather-response.dto';
import { AppServiceUnavailableException } from "../../../common/exception/app-service-unavailable.exception";

export class WeatherService {
  private readonly logger = new Logger(WeatherService.name);

  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
    @Inject(CACHE_MANAGER) private readonly cache: Cache
  ) {}

  async getWeather(city: string): Promise<WeatherResponseDto> {
    // Validate query first
    this.validateQuery(city);

    const cacheKey = `weather:${city.toLowerCase()}`;

    // Check cache 
    const cached = await this.cache.get<WeatherResponseDto>(cacheKey);
    if (cached) {
      return cached;
    }

    const data = await this.fetchWeather(city);

    // Cache for 60 seconds
    await this.cache.set(cacheKey, data, 60);

    return data;
  }

  private validateQuery(query: string) {
    if (!query || query.trim().length < 2) {
      throw new AppValidationException("The 'city' query parameter is required. Example: /api/weather?city=Manila");
    }
  }

  private async fetchWeather(city: string) {
    try {
      return await this.fetchFromPrimary(city);
    } catch (error) {
      this.logger.warn('Primary API failed, switching to fallback API...');

      return this.fetchFromFallBack(city);
    }
  }

  // OpenWeather
  private async fetchFromPrimary(city: string) {
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const params = {
      appid: this.config.get<string>('WEATHER_API_KEY'),
      q: city,
      units: 'metric'
    }

    const response = await firstValueFrom(
      this.http
        .get(baseUrl, { params, timeout: 5000 })
        .pipe(retry(2))
    );

    return this.transformPrimary(response.data);
  }

  // WeatherAPI
  private async fetchFromFallBack(city: string) {
    const baseUrl = 'https://api.weatherapi.com/v1/current.json';

    const params = {
      key: this.config.get<string>('WEATHER_FALLBACK_KEY'),
      q: city
    }

    try {
      const response = await firstValueFrom(
        this.http
          .get(baseUrl, { params, timeout: 5000 })
      );

      return this.transformFallback(response.data);
    } catch (error) {
      this.logger.error('Fallback API also failed.');

      throw new AppServiceUnavailableException('All weather services unavailable.');
    }
  }

  // Helper functions for transforming both primary and fallback into the same format
  private transformPrimary(data: any) {
    return new WeatherResponseDto(
      data.name,
      data.main?.temp,
      data.weather?.[0]?.description
    );
  }

  private transformFallback(data: any) {
    return new WeatherResponseDto(
      data.location?.name,
      data.current?.temp_c,
      data.current?.condition?.text
    );
  }
}