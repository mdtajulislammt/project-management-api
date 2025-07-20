import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { FilterTaskDto } from './dto/filter-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateTaskDto) {
    // Remove or convert status if it's a string
    const { status, ...rest } = dto as any;
    let data: any = { ...rest };
    if (typeof status === 'number') data.status = status;
    // If status is a string, ignore it (or you could parseInt if you expect numbers as strings)
    return this.prisma.task.create({ data });
  }

  getAllTasks() {
    return this.prisma.task.findMany();
  }

  findAll(filter: FilterTaskDto) {
    const where: any = {};
    if (filter.projectId) where.projectId = filter.projectId;
    if (filter.assignedTo) where.assignedTo = filter.assignedTo;
    return this.prisma.task.findMany({ where });
  }

  findOne(id: string) {
    return this.prisma.task.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateTaskDto) {
    // Remove undefined fields and ensure only valid types are passed
    const data = Object.fromEntries(
      Object.entries(dto).filter(([_, v]) => v !== undefined && v !== null && v !== '')
    );
    // If status is present and is a string, ignore it
    if (typeof data.status === 'string') delete data.status;
    return this.prisma.task.update({ where: { id }, data });
  }

  delete(id: string) {
    return this.prisma.task.delete({ where: { id } });
  }
}
