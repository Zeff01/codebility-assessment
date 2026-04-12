import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WeatherService } from '../application/service/weather.service';
import { CacheModule } from '@nestjs/cache-manager';
import { WeatherController } from '../api/controller/weather.controller';

@Module({
  imports: [
    HttpModule,
    CacheModule.register({
      ttl: 60 // default cache time
    }),
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
  exports: [WeatherService]
})
export class WeatherModule {}