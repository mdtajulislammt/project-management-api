// dto/register.dto.ts
export class RegisterDto {
  name: string;
  email: string;
  password: string;
  role?: 'admin' | 'manager' | 'user';
}

// dto/login.dto.ts
export class LoginDto {
  email: string;
  password: string;
}
