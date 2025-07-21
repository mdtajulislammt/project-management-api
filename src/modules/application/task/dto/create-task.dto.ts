import { IsNotEmpty, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  @IsNotEmpty()
  status: string; // "pending" / "completed"

  @IsString()
  @IsNotEmpty()
  priority: string;

  @IsDateString()
  @IsNotEmpty()
  deadline: Date;

  @IsString()
  @IsNotEmpty()
  assignedTo: string;

  @IsString()
  @IsNotEmpty()
  projectId: string;

  @IsString()
  @IsNotEmpty()
  createdBy: string;
}
