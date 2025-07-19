import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { FilterTaskDto } from './dto/filter-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTaskDto) {
    return this.prisma.task.create({ data: dto });
  }

  findAll(filter: FilterTaskDto) {
    const where: any = {};
    if (filter.projectId) where.projectId = filter.projectId;
    if (filter.assignedTo) where.assignedTo = filter.assignedTo;
    if (filter.status) where.status = filter.status;

    return this.prisma.task.findMany({ where });
  }

  findOne(id: string) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data: dto,
    });
  }

  delete(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}
