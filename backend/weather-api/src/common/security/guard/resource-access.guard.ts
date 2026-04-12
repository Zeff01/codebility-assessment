import {
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Role } from '../enum/role.enum';
import { AppForbiddenException } from '../../exception/app-forbidden.exception';

@Injectable()
export class ResourceAccessGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();

    const user = req.user;
    const resourceId = req.params.id;

    if (!user) {
      throw new AppForbiddenException('Authentication required. You must be logged in to perform this action.');
    }

    const isAdmin = user.role === Role.ADMIN;
    const isOwner = user.userId === resourceId;

    if (!isAdmin && !isOwner) {
      throw new AppForbiddenException('You do not have permission to update this resource.');
    }

    return true;
  }
}