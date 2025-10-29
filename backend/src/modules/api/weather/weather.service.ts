import ms from 'ms';
import { cache } from '../../../common/cache';
import { GOOGLE_API_KEY } from '../../../config/env';
import { ServiceUnavailable, NotFound } from 'http-errors';

export class WeatherService {
  async getStatus(location: string, mode?: string) {
    const { lng, lat } = await this.getLangLatFromLocation(location);
    const data = await this.getWeatherData(lng, lat, mode);
    return data;
  }

  private async getWeatherData(
    lng: number,
    lat: number,
    mode: string = 'current_conditions',
  ): Promise<Record<string, unknown>> {
    const modes: Record<string, string> = {
      current_conditions: 'currentConditions',
      daily_forecast: 'forecast/days',
      hourly_forecast: 'forecast/hours',
      history: 'history/hours',
    };

    try {
      const CACHE_KEY = `weather:lng=${lng}:lat=${lat}:mode=${mode}`;
      const cachedResult = await cache.get<any>(CACHE_KEY);
      if (cachedResult) return cachedResult;
      const MAPS_URL = `https://weather.googleapis.com/v1/${modes[mode]}:lookup?key=${GOOGLE_API_KEY}&location.latitude=${lat}&location.longitude=${lng}`;
      console.log('url', MAPS_URL);
      const response = await fetch(MAPS_URL);
      const data = await response.json();
      await cache.set(CACHE_KEY, data, ms('30s'));
      return data;
    } catch {
      throw new ServiceUnavailable();
    }
  }

  private async getLangLatFromLocation(
    location: string,
  ): Promise<{ lng: number; lat: number }> {
    try {
      const CACHE_KEY = `geocoding:${location}`;
      const cachedResult = await cache.get<{ lng: number; lat: number }>(
        CACHE_KEY,
      );
      if (cachedResult) return cachedResult;
      const GEOCODING_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${GOOGLE_API_KEY}`;
      const response = await fetch(GEOCODING_URL);
      const data = await response.json();
      if (data.status === 'ZERO_RESULTS') {
        throw new NotFound('Location not found');
      }
      const result = data.results[0].geometry.location;
      await cache.set(CACHE_KEY, result, ms('7d'));
      return result;
    } catch (error) {
      if (error instanceof NotFound) {
        throw error;
      }
      throw new ServiceUnavailable();
    }
  }
}
