// auth.service.ts
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async register(data: RegisterDto) {
    // Check for existing user by email
    const existingByEmail = await this.prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existingByEmail)
      return { message: 'Email already registered' };

    const hash = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hash,
        role: data.role || 'user',
      },
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        name: user.name,
      },
    };
  }

  async login(data: LoginDto) {
    if (!data.email || typeof data.email !== 'string' || !data.email.trim()) {
      return { message: 'Email is required' };
    }
    let user: {
      id: string;
      email: string;
      password: string;
      name: string;
      role: string;
      createdAt: Date;
      updatedAt: Date;
      status: string | null;
    } | null = null;
    // Only allow login by email
    user = await this.prisma.user.findUnique({
      where: { email: data.email },
      select: {
        id: true,
        email: true,
        password: true,
        name: true,
        role: true,
        createdAt: true,
        updatedAt: true,
        status: true,
      },
    });
    if (!user) return { message: 'Invalid credentials' };

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) return { message: 'Invalid credentials' };

    // Remove password before returning
    const { password, ...userWithoutPassword } = user;
    return { user: userWithoutPassword };
  }
}
