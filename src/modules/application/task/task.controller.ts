import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { FilterTaskDto } from './dto/filter-task.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/common/enums/role.enum';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @Roles(Role.ADMIN, Role.PROJECT_MANAGER, Role.MEMBER)
  create(@Body() dto: CreateTaskDto) {
    return this.taskService.create(dto);
  }

  @Get('all')
  @Roles(Role.ADMIN, Role.PROJECT_MANAGER)
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get()
  // @Roles(Role.ADMIN, Role.PROJECT_MANAGER, Role.MEMBER)
  findAll(@Query() filter: FilterTaskDto) {
    return this.taskService.findAll(filter || {});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskDto) {
    return this.taskService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
