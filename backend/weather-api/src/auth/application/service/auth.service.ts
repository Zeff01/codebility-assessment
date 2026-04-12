import { Injectable } from "@nestjs/common";
import { UserService } from "../../../user/application/service/user.service";
import { JwtService } from "@nestjs/jwt";
import { LoginRequestDto } from "../../api/dto/login-request.dto";
import { HashService } from "../../../common/security/service/hash.service";
import { RegisterRequestDto } from "../../api/dto/register-request.dto";
import { AppConflictException } from "../../../common/exception/app-conflict.exception";
import { AppUnauthorizedException } from "../../../common/exception/app-unauthorized.exception";
import { ErrorCode } from "../../../common/exception/error-code.enum";
import { AuthResponseDto } from "../../api/dto/auth-response.dto";
import { AuthUserResponse } from "../../api/dto/auth-user-response.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly hashService: HashService
  ) {}

  async register(request: RegisterRequestDto) {
    // Check if user exists
    const userExists = await this.userService.existsByEmail(request.email);
    if (userExists) {
      throw new AppConflictException(
        'User with email already exists.',
        ErrorCode.USER_EMAIL_EXISTS
      );
    }

    // Hash password
    const passwordHash = await this.hashService.hash(request.password);

    // Create user
    const user = await this.userService.create({
      email: request.email,
      passwordHash: passwordHash,
      firstName: request.firstName,
      lastName: request.lastName
    });

    // Generate JWT access token
    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
      role: user.role
    })

    // Map authenticated user details
    const userInfo = new AuthUserResponse(user.id, user.email, user.email, user.role, user.isActive);

    return new AuthResponseDto(accessToken, userInfo)
  }

  async login(request: LoginRequestDto) {
    const user = await this.userService.getAuthByEmail(request.email);
    // Check if user does not exist
    if (!user) {
      throw new AppUnauthorizedException('Invalid email or password. Please try again or reset your password.');
    }

    const isMatch = await this.hashService.compare(request.password, user.passwordHash)
    if (!isMatch) {
      throw new AppUnauthorizedException('Invalid email or password. Please try again or reset your password.');
    }

    const accessToken = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
      role: user.role
    });

    const userInfo = new AuthUserResponse(user.id, user.email, user.email, user.role, user.isActive);

    return new AuthResponseDto(accessToken, userInfo)
  }
}