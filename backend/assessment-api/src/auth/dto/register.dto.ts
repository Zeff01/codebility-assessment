import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Name is requried' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Email is requried' })
  email: string;

  @MinLength(8)
  @IsNotEmpty({ message: 'Password is requried' })
  password: string;
}
