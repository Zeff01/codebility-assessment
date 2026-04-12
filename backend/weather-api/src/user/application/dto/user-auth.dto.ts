import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../../common/security/enum/role.enum';

export class UserAuth {
  @ApiProperty({ example: 'uuid-string' })
  readonly id: string;

  @ApiProperty({ example: 'john@email.com' })
  readonly email: string;

  @ApiProperty({ example: 'John' })
  readonly firstName: string;

  @ApiProperty({ example: '$2b$10$Y6MKD5ZI5gtkvBdYyqwr1.CrHA66ppM/9YNDvacUuqWZSVduKQcIq' })
  readonly passwordHash: string;

  @ApiProperty({ enum: Role, example: Role.USER })
  readonly role: Role;

  @ApiProperty({ example: true })
  readonly isActive: boolean;

  constructor(
    id: string,
    email: string,
    firstName: string,
    passwordHash: string,
    role: Role,
    isActive: boolean,
  ) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.passwordHash = passwordHash;
    this.role = role;
    this.isActive = isActive;
  }
}