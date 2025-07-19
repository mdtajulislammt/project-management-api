import { Controller, Post, Body, Param, Patch, Delete, Get } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() body: CreateNotificationDto) {
    return this.notificationService.create(body);
  }

  @Get(':userId')
  async getByUser(@Param('userId') userId: string) {
    return this.notificationService.findNotificationsByUser(userId);
  }

  @Patch(':id/read')
  async markRead(@Param('id') id: string) {
    return this.notificationService.markAsRead(id);
  }
}
