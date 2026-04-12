import { Controller, Get, Query } from "@nestjs/common";
import { WeatherService } from "../../application/service/weather.service";
import { Throttle } from "@nestjs/throttler";
import { ApiResponse } from "../../../common/dto/api-response.dto";
import { WeatherResponseDto } from "../dto/weather-response.dto";
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";

@ApiTags('Weather')
@ApiBearerAuth()
@Controller('api/weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @ApiOperation({ summary: 'Get weather by city name' })
  @ApiQuery({ name: 'city', example: 'Manila', required: true })
  @ApiOkResponse({ description: 'Weather data retrieved successfully' })
  @Get()
  @Throttle({ default: { ttl: 60000, limit: 5 } })
  async getWeather(@Query('city') city: string): Promise<ApiResponse<WeatherResponseDto>> {
    const weatherData = await this.weatherService.getWeather(city);

    return ApiResponse.success(
      'Weather fetched successfully.',
      weatherData
    )
  }
}