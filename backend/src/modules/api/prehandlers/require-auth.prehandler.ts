import { FastifyRequest } from 'fastify';
import { Unauthorized } from 'http-errors';
import jwt from 'jsonwebtoken';
import { cache } from '../../../common/cache';
import { prisma } from '../../../common/prisma';
import { JWT_SECRET } from '../../../config/env';
import ms from 'ms';

type RequestUser = { id: number } | undefined;

declare module 'fastify' {
  interface FastifyRequest {
    user?: RequestUser;
  }
}

export async function requireAuthPrehandler(request: FastifyRequest) {
  const [scheme, token] = request.headers.authorization?.split(' ') ?? [];
  if (scheme !== 'Bearer') throw new Unauthorized();
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as NonNullable<RequestUser>;
    const CACHE_KEY = `requireAuth:${decoded.id}`;
    const userCount = await cache.get<number>(CACHE_KEY);
    const count =
      userCount ??
      (await prisma.user.count({
        where: { id: decoded.id },
      }));
    await cache.set(CACHE_KEY, count, ms('1m'));
    if (count > 0) {
      request.user = decoded;
      return;
    }
    throw new Unauthorized();
  } catch {
    throw new Unauthorized('Access token is expired or invalid');
  }
}
