import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRequestDto {
  @ApiProperty({ example: 'john@email.com' })
  email: string;

  @ApiProperty({ example: '$2b$10$Y6MKD5ZI5gtkvBdYyqwr1.CrHA66ppM/9YNDvacUuqWZSVduKQcIq' })
  passwordHash: string;

  @ApiProperty({ example: 'John' })
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  lastName: string;
}