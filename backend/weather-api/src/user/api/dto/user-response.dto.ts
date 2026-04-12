import { ApiProperty } from '@nestjs/swagger';
import { Expose, Exclude, Type } from 'class-transformer';
import { Role } from '../../../common/security/enum/role.enum';

export class UserResponseDto {
  @ApiProperty({ example: 'uuid-string' })
  @Expose()
  id: string;

  @ApiProperty({ example: 'john@email.com' })
  @Expose()
  email: string;

  @ApiProperty({ example: 'John' })
  @Expose()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @Expose()
  lastName: string;

  @ApiProperty({ enum: Role, example: Role.USER })
  @Expose()
  role: Role;

  @ApiProperty({ example: true })
  @Expose()
  isActive: boolean;

  @ApiProperty({ example: '2026-04-12T10:00:00.000Z' })
  @Expose()
  @Type(() => Date)
  createdAt: Date;

  @Exclude()
  passwordHash: string;
}