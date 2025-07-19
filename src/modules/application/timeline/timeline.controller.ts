import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { TimelineService } from './timeline.service';
import { CreateTimelineDto } from './dto/create-timeline.dto';
import { GetTimelineDto } from './dto/get-timeline.dto';

@Controller('timeline')
export class TimelineController {
  constructor(private readonly timelineService: TimelineService) {}

  @Post()
  create(@Body() dto: CreateTimelineDto) {
    return this.timelineService.create(dto);
  }

  @Get()
  getTimeline(@Query() query: GetTimelineDto) {
    return this.timelineService.findByTaskOrProject(query.taskId, query.projectId);
  }
}
