import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskRepository } from './task.repository';
import { NotificationModule } from '../notification/notification.module';

@Module({
  imports: [NotificationModule], 
  controllers: [TaskController],
  providers: [TaskService, PrismaService, TaskRepository],
})
export class TaskModule {}
