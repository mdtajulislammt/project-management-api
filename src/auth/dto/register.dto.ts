import { IsString, IsEmail } from 'class-validator';

export class RegisterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  role?: string;
}

// dto/login.dto.ts
export class LoginDto {
  email: string;
  password: string;
}
