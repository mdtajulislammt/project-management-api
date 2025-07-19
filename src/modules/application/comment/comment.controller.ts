import { Controller, Post, Get, Body, Query, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { DeleteCommentDto } from './dto/delete-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() dto: CreateCommentDto) {
    return this.commentService.create(dto);
  }

  @Get()
  findByTask(@Query('taskId') taskId: string) {
    return this.commentService.findByTask(taskId);
  }

  @Delete()
  delete(@Body() dto: DeleteCommentDto) {
    return this.commentService.delete(dto.commentId, dto.authorId);
  }
}
