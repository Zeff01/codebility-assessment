import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CurrentUser } from 'src/common/Decorator/current-user.decorator';
import { JwtAuthGuard } from 'src/common/Guards/jwt-auth.guard';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@CurrentUser() user: UserDto) {
    return this.userService.me(user.id);
  }
}
