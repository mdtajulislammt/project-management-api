// src/modules/auth/auth.controller.ts
import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body() body: { email: string; password: string; username?: string; name?: string },
  ) {
    const name = body.name || body.username;
    if (!name) throw new BadRequestException('Name or username is required');
    const user = await this.authService.register({
      name,
      email: body.email,
      password: body.password,
      role: 'user',
    });
    if (!user) throw new BadRequestException('User already exists');
    return { message: 'User registered successfully' };
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }
}
