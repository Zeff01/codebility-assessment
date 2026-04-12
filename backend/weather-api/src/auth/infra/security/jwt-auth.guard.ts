import { ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from './public.decorator';
import { AppUnauthorizedException } from '../../../common/exception/app-unauthorized.exception';
import { ErrorCode } from '../../../common/exception/error-code.enum';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(
      IS_PUBLIC_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    // Handle common jwt token errors
    if (err || !user) {
      // Token expired
      if (info?.name === 'TokenExpiredError') {
        throw new AppUnauthorizedException(
          'Your session has expired. Please login again or try again later.', 
          ErrorCode.AUTH_SESSION_EXPIRED
        );
      }

      // Invalid token or no token
      throw new AppUnauthorizedException(
        'Authentication failed. Please log in again or try again later.', 
        ErrorCode.AUTH_SESSION_INVALID
      );
    }

    return user;
  }
}