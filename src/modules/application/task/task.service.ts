import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { NotificationService } from '../notification/notification.service';

@Injectable()
export class TaskService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly notificationService: NotificationService,
  ) {}

  async create(createTaskDto: CreateTaskDto) {
    const task = await this.prisma.task.create({
      data: createTaskDto,
    });

    if (createTaskDto.assignedTo) {
      await this.notificationService.create({
        userId: createTaskDto.assignedTo,
        title: `New Task Created: ${task.title}`,
        message: `You have been assigned to the task "${task.title}".`,
        read: false,
        status: 'created',
      });
    }

    return task;
  }

  async findAll() {
    return this.prisma.task.findMany({
      include: {
        assignedUser: true,
        creator: true,
        project: true,
      },
    });
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findUnique({ where: { id } });
    if (!task) throw new NotFoundException('Task not found');
    return task;
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  async remove(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}
