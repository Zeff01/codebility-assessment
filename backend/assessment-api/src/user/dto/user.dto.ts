import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UserDto {
  @IsNumber()
  id: number;
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail()
  @IsNotEmpty({ message: 'Name is required' })
  email: string;
}
