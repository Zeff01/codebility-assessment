import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../../common/security/enum/role.enum';

export class AuthUserResponse {
  @ApiProperty({ example: 'uuid-string' })
  readonly id: string;

  @ApiProperty({ example: 'john@email.com' })
  readonly email: string;

  @ApiProperty({ example: 'John' })
  readonly firstName: string;

  @ApiProperty({ enum: Role, example: Role.USER })
  readonly role: Role;

  @ApiProperty({ example: true })
  readonly isActive: boolean;

  constructor(
    id: string,
    email: string,
    firstName: string,
    role: Role,
    isActive: boolean,
  ) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.role = role;
    this.isActive = isActive;
  }
}