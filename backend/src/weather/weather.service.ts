import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { genericHttpConsumer } from "../utils/http-consumer";
import { GetWeatherQueryDto } from "./dto";
import { ErrorCodesConstant } from "@backend/common/constants/error-codes.constant";

type GeoResult = {
  name: string;
  country?: string;
  latitude: number;
  longitude: number;
};

@Injectable()
export class WeatherService {
  private readonly geoApi = genericHttpConsumer(
    "https://geocoding-api.open-meteo.com",
  );
  private readonly forecastApi = genericHttpConsumer(
    "https://api.open-meteo.com",
  );

  private async geocodeCity(city: string): Promise<GeoResult> {
    const res = await this.geoApi.get("/v1/search", {
      params: { name: city, count: 1, language: "en", format: "json" },
    });

    const top = res.data?.results?.[0];
    if (!top)
      throw new NotFoundException({
        code: ErrorCodesConstant.WEATHER_CITY_NOT_FOUND,
        message: `City not found: ${city}`,
      });

    return {
      name: top.name,
      country: top.country,
      latitude: top.latitude,
      longitude: top.longitude,
    };
  }

  private async fetchCurrent(latitude: number, longitude: number) {
    const res = await this.forecastApi.get("/v1/forecast", {
      params: {
        latitude,
        longitude,
        current: "temperature_2m,relative_humidity_2m,wind_speed_10m",
        timezone: "auto",
      },
    });

    return res.data;
  }

  async getWeather(filters: GetWeatherQueryDto) {
    const { city, lat, lon } = filters;
    const hasCity = !!city;
    const hasCoords = typeof lat === "number" && typeof lon === "number";

    if (!hasCity && !hasCoords) {
      throw new BadRequestException({
        code: ErrorCodesConstant.WEATHER_INVALID_QUERY,
        message: "Provide either city OR lat+lon.",
      });
    }
    if (hasCity && hasCoords) {
      throw new BadRequestException({
        code: ErrorCodesConstant.WEATHER_INVALID_QUERY,
        message: "Use only one: city OR lat+lon.",
      });
    }

    let latitude: number;
    let longitude: number;
    let location: any;

    if (hasCity) {
      const geo = await this.geocodeCity(city);
      latitude = geo.latitude;
      longitude = geo.longitude;
      location = geo;
    } else {
      latitude = lat!;
      longitude = lon!;
      location = { latitude, longitude };
    }

    const data = await this.fetchCurrent(latitude, longitude);

    return {
      location,
      timezone: data.timezone,
      current: data.current,
      units: data.current_units,
    };
  }
}
