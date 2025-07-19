import { IsOptional, IsString } from 'class-validator';

export class GetTimelineDto {
  @IsOptional()
  @IsString()
  taskId?: string;

  @IsOptional()
  @IsString()
  projectId?: string;
}
