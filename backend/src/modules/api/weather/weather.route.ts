import { FastifyRequest } from 'fastify';
import { asRoute } from '../../../common/typings';
import { requireAuthPrehandler } from '../prehandlers/require-auth.prehandler';
import {
  QueryWeather,
  queryWeatherSchema,
} from './schemas/query-weather.schema';
import { WeatherService } from './weather.service';

export default asRoute(async function weatherRoute(app) {
  const weatherService = new WeatherService();

  app.addHook('preHandler', requireAuthPrehandler);

  app.route({
    method: 'GET',
    url: '/',
    schema: {
      description: 'Google Weather API Integration',
      security: [{ bearerAuth: [] }],
      tags: ['Weather'],
      querystring: queryWeatherSchema,
    },
    async handler(
      request: FastifyRequest<{
        Querystring: QueryWeather;
      }>,
    ) {
      const { location, mode } = request.query;
      const weatherStatus = await weatherService.getStatus(location, mode);
      return {
        data: weatherStatus,
      };
    },
  });
});
