import { WeatherService } from './weather.service';
export declare class WeatherController {
    private weatherService;
    constructor(weatherService: WeatherService);
    getWeather(city: string): Promise<{
        city: any;
        temperature: any;
        description: any;
    }>;
}
