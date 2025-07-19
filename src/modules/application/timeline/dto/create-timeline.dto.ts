import { IsOptional, IsString } from 'class-validator';

export class CreateTimelineDto {
  @IsString()
  userId: string;

  @IsString()
  action: string;

  @IsOptional()
  @IsString()
  taskId?: string;

  @IsOptional()
  @IsString()
  projectId?: string;
}
