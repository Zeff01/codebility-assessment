import { FastifyPluginAsync, FastifyRequest } from "fastify";
import {
  CityCoordinates,
  ErrorResponse,
  OpenMeteoResponse,
  WeatherQueryParams,
  WeatherResponse,
} from "../../../types/weather.types";

const PH_CITIES: Record<string, CityCoordinates> = {
  manila: { lat: 14.5995, lon: 120.9842, name: "Manila" },
  cebu: { lat: 10.3157, lon: 123.8854, name: "Cebu" },
  davao: { lat: 7.1907, lon: 125.4553, name: "Davao" },
  quezon: { lat: 14.676, lon: 121.0437, name: "Quezon City" },
  makati: { lat: 14.5547, lon: 121.0244, name: "Makati" },
  zamboanga: { lat: 6.9214, lon: 122.079, name: "Zamboanga" },
  bacolod: { lat: 10.6407, lon: 122.9623, name: "Bacolod" },
  iloilo: { lat: 10.7202, lon: 122.5621, name: "Iloilo" },
  cagayan: { lat: 8.4542, lon: 124.6319, name: "Cagayan de Oro" },
  baguio: { lat: 16.4023, lon: 120.596, name: "Baguio" },
};

const weatherRoute: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get<{
    Querystring: WeatherQueryParams;
    Reply: WeatherResponse | ErrorResponse;
  }>(
    "/",
    {
      preHandler: fastify.authenticate,
    },

    async function (
      request: FastifyRequest<{ Querystring: WeatherQueryParams }>,
      reply,
    ) {
      const { city = "manila" } = request.query;
      const cityKey = city.toLowerCase();
      const location = PH_CITIES[cityKey];

      if (!location) {
        return reply.status(404).send({
          error: "City not found",
          message: `City "${city}" is not supported.`,
          available_cities: Object.keys(PH_CITIES),
        });
      }

      const params = new URLSearchParams({
        latitude: location.lat.toString(),
        longitude: location.lon.toString(),
        current: [
          "temperature_2m",
          "relative_humidity_2m",
          "apparent_temperature",
          "weather_code",
          "wind_speed_10m",
          "wind_direction_10m",
          "precipitation",
          "visibility",
        ].join(","),
        timezone: "Asia/Manila",
        forecast_days: "1",
      });

      try {
        const response = await fetch(`${fastify.config.WEATHER_URL}?${params}`);

        if (!response.ok) {
          return reply.status(response.status).send({
            error: "Faild to fetch weather data.",
          });
        }

        const data = (await response.json()) as OpenMeteoResponse;
        const current = data.current;

        const weatherResponse: WeatherResponse = {
          city: location.name,
          country: "PH",
          timezone: data.timezone,
          temperature: {
            current: current.temperature_2m,
            feels_like: current.apparent_temperature,
            unit: "°C",
          },
          humidity: `${current.relative_humidity_2m}%`,
          precipitation: `${current.precipitation} mm`,
          wind: {
            speed: `${current.wind_speed_10m} km/h`,
            direction: `${current.wind_direction_10m}°`,
          },
          visibility: `${current.visibility} m`,
          weather_code: current.weather_code,
          timestamp: current.time,
        };

        reply.send(weatherResponse);
      } catch (error) {
        const err = error as Error;
        request.log.error(error);
        return reply.status(500).send({
          error: "Internal server error",
          message: err.message,
        });
      }
    },
  );
};

export default weatherRoute;
