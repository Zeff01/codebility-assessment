import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from '../../application/service/auth.service';
import { LoginRequestDto } from "../dto/login-request.dto";
import { Public } from "../../infra/security/public.decorator";
import { RegisterRequestDto } from '../dto/register-request.dto';
import { ApiResponse } from '../../../common/dto/api-response.dto';
import { AuthResponseDto } from "../dto/auth-response.dto";
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags('Auth')
@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService
  ) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiCreatedResponse({ description: 'User successfully registered' })
  @Public()
  @Post('register')
  async register(@Body() request: RegisterRequestDto): Promise<ApiResponse<AuthResponseDto>> {
    const response = await this.authService.register(request);

    return ApiResponse.success(
      'Registration successful.',
      response
    )
  }

  @ApiOperation({ summary: 'Login user' })
  @ApiOkResponse({ description: 'User successfully logged in' })
  @Public()
  @Post('login')
  async login(@Body() request: LoginRequestDto): Promise<ApiResponse<AuthResponseDto>> {
    const response = await this.authService.login(request);

    return ApiResponse.success(
      'Login successful.',
      response
    )
  }
}