import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePresenceDto } from './dto/create-presence.dto';
import { UpdatePresenceDto } from './dto/update-presence.dto';

@Injectable()
export class PresenceService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePresenceDto) {
    return this.prisma.presence.create({
      data: {
        userId: dto.userId,
        projectId: dto.projectId,
        ...(dto.joinedAt && { joinedAt: new Date(dto.joinedAt) }),
        ...(dto.leftAt && { leftAt: new Date(dto.leftAt) }),
      },
    });
  }

  async findAll() {
    return this.prisma.presence.findMany();
  }

  async findOne(id: string) {
    const presence = await this.prisma.presence.findUnique({ where: { id } });
    if (!presence) throw new NotFoundException('Presence not found');
    return presence;
  }

  async update(id: string, dto: UpdatePresenceDto) {
    return this.prisma.presence.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    return this.prisma.presence.delete({ where: { id } });
  }
}
