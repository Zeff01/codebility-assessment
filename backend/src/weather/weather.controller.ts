import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { GetWeatherQueryDto } from "./dto/get-weather.query.dto";
import { WeatherService } from "./weather.service";
import { JwtAuthGuard } from "@backend/auth/guards/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller("weather")
export class WeatherController {
  constructor(private readonly weather: WeatherService) {}

  @Get()
  get(@Query() filters: GetWeatherQueryDto) {
    return this.weather.getWeather(filters);
  }
}
