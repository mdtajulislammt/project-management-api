import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateNotificationDto) {
    const notification = await this.prisma.notification.create({ data: dto });
    return notification;
  }

  findAll() {
    return this.prisma.notification.findMany();
  }

  findByUser(userId: string) {
    return this.prisma.notification.findMany({ where: { userId } });
  }

  findOne(id: string) {
    return this.prisma.notification.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateNotificationDto) {
    return this.prisma.notification.update({ where: { id }, data: dto });
  }

  remove(id: string) {
    return this.prisma.notification.delete({ where: { id } });
  }

  findNotificationsByUser(userId: string) {
    // Stub: return notifications for a user
    return this.prisma.notification.findMany({ where: { userId } });
  }

  markAsRead(id: string) {
    // Stub: mark notification as read
    return this.prisma.notification.update({ where: { id }, data: { read: true } });
  }
}
