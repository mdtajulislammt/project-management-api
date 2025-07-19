import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: {
        content: dto.content,
        taskId: dto.taskId,
        authorId: dto.authorId,
      },
    });
  }

  async findByTask(taskId: string) {
    return this.prisma.comment.findMany({
      where: { taskId },
      orderBy: { createdAt: 'asc' },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async delete(commentId: string, authorId: string) {
    const comment = await this.prisma.comment.findUnique({ where: { id: commentId } });

    if (!comment || comment.authorId !== authorId) {
      throw new Error('Unauthorized or not found');
    }

    return this.prisma.comment.delete({ where: { id: commentId } });
  }
}
