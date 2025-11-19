import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { CurrentUser } from 'src/common/Decorator/current-user.decorator';
import { RefreshDto } from './dto/refreshDto';
import { JwtRefreshGuard } from 'src/common/Guards/jwt-refresh.guard';
import { UserDto } from 'src/user/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(
      registerDto.name,
      registerDto.email,
      registerDto.password,
    );
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password);
  }

  @HttpCode(200)
  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  async refresh(@CurrentUser() user: UserDto, @Body() refreshDto: RefreshDto) {
    return this.authService.refresh(user.id, refreshDto.refreshToken);
  }

  @Post('logout')
  async logout(@Body('id') id: number) {
    return this.authService.logout(id);
  }
}
