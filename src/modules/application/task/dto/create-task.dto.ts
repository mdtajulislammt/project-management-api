import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  dueDate?: Date;

  @IsNotEmpty()
  projectId: string;

  @IsNotEmpty()
  assignedTo: string;

  @IsNotEmpty()
  createdBy: string;
}
