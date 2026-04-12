import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class RegisterRequestDto {
  @ApiProperty({
    example: 'john@email.com',
    description: 'User email address',
  })
  @IsEmail({}, { message: 'Invalid email format.' })
  @IsNotEmpty({ message: 'Email is required.' })
  @Transform(({ value }) => value?.toLowerCase()?.trim())
  email: string;

  @ApiProperty({
    example: 'Password123!',
    description: 'Strong password (8–64 chars, uppercase, lowercase, number, special char)',
  })
  @IsString({ message: 'Password must be a string.' })
  @IsNotEmpty({ message: 'Password is required.' })
  @MinLength(8, { message: 'Password must be at least 8 characters.' })
  @MaxLength(64, { message: 'Password must not exceed 64 characters.' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{}|;:',.<>?/]).+$/,
    {
      message: 'Password must contain uppercase, lowercase, number, and special character.',
    },
  )
  password: string;

  @ApiProperty({
    example: 'John',
    description: 'User first name',
  })
  @IsString({ message: 'Firstname must be a string.' })
  @IsNotEmpty({ message: 'Firstname is required.' })
  @Transform(({ value }) => value?.trim())
  @MinLength(2, { message: 'Firstname must be at least 2 characters.' })
  @MaxLength(50, { message: 'Firstname must not exceed 50 characters.' })
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'User last name',
  })
  @IsString({ message: 'Lastname must be a string.' })
  @IsNotEmpty({ message: 'Lastname is required.' })
  @Transform(({ value }) => value?.trim())
  @MinLength(2, { message: 'Lastname must be at least 2 characters.' })
  @MaxLength(100, { message: 'Lastname must not exceed 100 characters.' })
  lastName: string;
}