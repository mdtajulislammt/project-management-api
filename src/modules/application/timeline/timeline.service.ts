import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTimelineDto } from './dto/create-timeline.dto';

@Injectable()
export class TimelineService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTimelineDto) {
    return this.prisma.timeline.create({
      data: {
        userId: dto.userId,
        action: dto.action,
        taskId: dto.taskId,
        projectId: dto.projectId,
        status: 'active',
      },
    });
  }

  async findAll() {
    return this.prisma.timeline.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.timeline.findUnique({
      where: { id },
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  }

  async update(id: string, data: Partial<CreateTimelineDto>) {
    return this.prisma.timeline.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.timeline.delete({ where: { id } });
  }

  async findByTaskOrProject(taskId?: string, projectId?: string) {
    return this.prisma.timeline.findMany({
      where: {
        OR: [
          taskId ? { taskId } : undefined,
          projectId ? { projectId } : undefined,
        ].filter(Boolean) as any,
      },
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });
  }
}
