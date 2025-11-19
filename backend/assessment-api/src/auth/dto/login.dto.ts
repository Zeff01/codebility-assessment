import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty({ message: 'Name is required' })
  email: string;
  @MinLength(5)
  @IsNotEmpty({ message: 'Email is required' })
  password: string;
}
