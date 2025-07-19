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
      },
    });
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
