export declare class WeatherService {
    getWeather(city: string): Promise<{
        city: any;
        temperature: any;
        description: any;
    }>;
}
