import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('refreshToken'),
      secretOrKey: process.env.JWT_REFRESH_SECRET!,
      ignoreExpiration: false,
      passReqToCallback: true,
    });
  }

  async validate(_req: any, payload: { sub: number }) {
    if (!payload?.sub) throw new UnauthorizedException();

    return { id: payload.sub, sub: payload.sub };
  }
}
