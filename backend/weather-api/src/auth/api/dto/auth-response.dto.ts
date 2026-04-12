import { ApiProperty } from '@nestjs/swagger';
import { AuthUserResponse } from "./auth-user-response.dto";

export class AuthResponseDto {
  @ApiProperty({
    description: 'JWT access token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  accessToken: string;

  @ApiProperty({
    description: 'Authenticated user details',
    type: AuthUserResponse,
  })
  user: AuthUserResponse;

  constructor(
    accessToken: string,
    user: AuthUserResponse,
  ) {
    this.accessToken = accessToken;
    this.user = user;
  }
}