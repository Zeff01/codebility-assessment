import { FastifyRequest } from 'fastify';
import { asRoute } from '../../../common/typings';
import { AuthService } from './auth.service';
import { LoginUserSchema, loginUserSchema } from './schemas/login-user.schema';
import {
  RegisterUserSchema,
  registerUserSchema,
} from './schemas/register-user.schema';

export default asRoute(async function (app) {
  const authService = new AuthService();

  app

    .route({
      method: 'POST',
      url: '/register',
      config: {
        rateLimit: {
          max: 5,
          timeWindow: '1m',
        },
      },
      schema: {
        description: 'Register a new user',
        tags: ['Auth'],
        body: registerUserSchema,
        response: {
          200: {
            type: 'object',
            additionalProperties: false,
            required: ['data'],
            properties: {
              data: {
                type: 'object',
                additionalProperties: false,
                required: ['access_token'],
                properties: {
                  access_token: { type: 'string' },
                },
              },
            },
          },
        },
      },
      async handler(request: FastifyRequest<{ Body: RegisterUserSchema }>) {
        const data = await authService.register(
          request.body.username,
          request.body.password,
        );
        return { data };
      },
    })

    .route({
      method: 'POST',
      url: '/login',
      config: {
        rateLimit: {
          max: 5,
          timeWindow: '1m',
        },
      },
      schema: {
        description: 'Login a user',
        tags: ['Auth'],
        body: loginUserSchema,
        response: {
          200: {
            type: 'object',
            additionalProperties: false,
            required: ['data'],
            properties: {
              data: {
                type: 'object',
                additionalProperties: false,
                required: ['access_token'],
                properties: {
                  access_token: { type: 'string' },
                },
              },
            },
          },
        },
      },
      async handler(request: FastifyRequest<{ Body: LoginUserSchema }>) {
        const data = await authService.login(
          request.body.username,
          request.body.password,
        );
        return { data };
      },
    });
});
