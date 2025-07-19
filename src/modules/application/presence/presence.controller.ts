import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { PresenceService } from './presence.service';

@Controller('presence')
export class PresenceController {
  constructor(private presenceService: PresenceService) {}

  @Post('join')
  async joinProject(@Body() body: { userId: string; projectId: string }) {
    return this.presenceService.userJoinProject(body.userId, body.projectId);
  }

  @Post('leave')
  async leaveProject(@Body() body: { userId: string; projectId: string }) {
    return this.presenceService.userLeaveProject(body.userId, body.projectId);
  }

  @Get('project/:projectId')
  async getPresences(@Param('projectId') projectId: string) {
    return this.presenceService.getProjectPresences(projectId);
  }
}
