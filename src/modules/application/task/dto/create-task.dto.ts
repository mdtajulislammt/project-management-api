import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsString()
  projectId: string;

  @IsString()
  assignedTo: string;

  @IsString()
  createdBy: string;
}
