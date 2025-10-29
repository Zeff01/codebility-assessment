import * as env from 'env-var';

export const PORT = env.get('PORT').default(3001).asPortNumber();

export const CORS_ORIGIN = env.get('CORS_ORIGIN').asArray(',');

export const REDIS_URL = env.get('REDIS_URL').required().asString();

export const JWT_SECRET = env.get('JWT_SECRET').required().asString();

export const GOOGLE_API_KEY = env.get('GOOGLE_API_KEY').required().asString();
