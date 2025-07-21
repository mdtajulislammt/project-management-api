import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateTaskDto) {
    return this.prisma.task.create({ data });
  }

  findAll() {
    return this.prisma.task.findMany({
      include: {
        assignedUser: true,
        creator: true,
        project: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.task.findUnique({
      where: { id },
      include: {
        assignedUser: true,
        creator: true,
        project: true,
      },
    });
  }

  update(id: string, data: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
