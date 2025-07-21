import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private readonly prisma: PrismaService) {}

  // ✅ Find all projects with owner name instead of ownerId
  async findAll() {
    const projects = await this.prisma.project.findMany({
      include: {
        owner: {
          select: {
            name: true,
          },
        },
      },
    });

    // Format the response
    return projects.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      status: project.status,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
      startDate: project.startDate,
      endDate: project.endDate,
      ownerName: project.owner?.name || null,
    }));
  }

  // ✅ Create a new project
  async create(createProjectDto: any) {
    const data = { ...createProjectDto };
    if (data.startDate) data.startDate = new Date(data.startDate);
    if (data.endDate) data.endDate = new Date(data.endDate);
    return this.prisma.project.create({
      data,
    });
  }

  // ✅ Find one project by ID with owner name
  async findOne(id: string) {
    const project = await this.prisma.project.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            name: true,
          },
        },
      },
    });

    if (!project) throw new NotFoundException('Project not found');

    return {
      id: project.id,
      title: project.title,
      description: project.description,
      status: project.status,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
      startDate: project.startDate,
      endDate: project.endDate,
      ownerName: project.owner?.name || null,
    };
  }

  // ✅ Update a project
  async update(id: string, data: Partial<any>) {
    const updateData = { ...data };
    if (updateData.startDate) updateData.startDate = new Date(updateData.startDate);
    if (updateData.endDate) updateData.endDate = new Date(updateData.endDate);
    return this.prisma.project.update({
      where: { id },
      data: updateData,
    });
  }

  // ✅ Delete a project
  async delete(id: string) {
    return this.prisma.project.delete({
      where: { id },
    });
  }
}
