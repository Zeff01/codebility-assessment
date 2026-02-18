export interface CityCoordinates {
  lat: number;
  lon: number;
  name: string;
}

export interface WeatherQueryParams {
  city?: string;
}

export interface OpenMeteoResponse {
  timezone: string;
  current: {
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    precipitation: number;
    visibility: number;
    time: string;
  };
}

export interface WeatherResponse {
  city: string;
  country: string;
  timezone: string;
  temperature: {
    current: number;
    feels_like: number;
    unit: string;
  };
  humidity: string;
  precipitation: string;
  wind: {
    speed: string;
    direction: string;
  };
  visibility: string;
  weather_code: number;
  timestamp: string;
}

export interface ErrorResponse {
  error: string;
  message?: string;
  available_cities?: string[];
}
