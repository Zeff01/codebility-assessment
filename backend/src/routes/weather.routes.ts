import { Router, Response } from 'express';
import { AuthRequest, WeatherQuery } from '../types';
import { authenticateToken } from '../middleware/auth.middleware';
import { fetchWeatherByCity, fetchWeatherByCoordinates } from '../utils/weatherApi';

const router = Router();

router.get('/', authenticateToken, async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { city, lat, lon }: WeatherQuery = req.query;

    if (!city && (!lat || !lon)) {
      res.status(400).json({ error: 'Either city or coordinates (lat and lon) are required' });
      return;
    }

    let weatherData;

    if (city) {
      weatherData = await fetchWeatherByCity(city);
    } else if (lat && lon) {
      weatherData = await fetchWeatherByCoordinates(lat, lon);
    }

    res.json(weatherData);
  } catch (error: any) {
    const statusCode = error.message === 'City not found' ? 404 : 500;
    res.status(statusCode).json({ error: error.message || 'Failed to fetch weather data' });
  }
});

export default router;
