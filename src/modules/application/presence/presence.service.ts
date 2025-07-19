import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PresenceService {
  constructor(private prisma: PrismaService) {}

  async userJoinProject(userId: string, projectId: string) {
    return this.prisma.presence.create({
      data: {
        userId,
        projectId,
        joinedAt: new Date(),
      },
    });
  }

  async userLeaveProject(userId: string, projectId: string) {
    return this.prisma.presence.updateMany({
      where: { userId, projectId, leftAt: null },
      data: { leftAt: new Date() },
    });
  }

  async getProjectPresences(projectId: string) {
    return this.prisma.presence.findMany({
      where: { projectId, leftAt: null },
      include: { user: true },
    });
  }
}
