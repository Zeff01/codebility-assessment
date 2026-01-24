import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'; 
import { WeatherService } from './weather.service';

@Controller('api/weather')
@UseGuards(AuthGuard('jwt'))
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get()
  getWeather(@Query('city') city: string) {
    return this.weatherService.getWeather(city);
  }
}
