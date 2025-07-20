import { IsOptional, IsString } from 'class-validator';

export class FilterTaskDto {
  @IsOptional()
  @IsString()
  projectId?: string;

  @IsOptional()
  @IsString()
  assignedTo?: string;

  @IsOptional()
  @IsString()
  state?: string; 
}
