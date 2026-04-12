import { ApiProperty } from '@nestjs/swagger';

export class WeatherResponseDto {
  @ApiProperty({ example: 'Manila' })
  city: string;

  @ApiProperty({ example: '30°C' })
  temperature: string;

  @ApiProperty({ example: 'Partly cloudy' })
  description: string;

  constructor(
    city: string,
    temperature: string,
    description: string,
  ) {
    this.city = city;
    this.temperature = temperature;
    this.description = description;
  }
}