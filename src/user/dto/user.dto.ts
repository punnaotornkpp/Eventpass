import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  username: string;
  @IsString()
  password: string;
  @IsEmail()
  email: string;
  @IsString()
  country: string;
}
