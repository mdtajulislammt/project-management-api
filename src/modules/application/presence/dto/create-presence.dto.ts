import { IsNotEmpty, IsString, IsOptional, IsDateString } from 'class-validator';

export class CreatePresenceDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  projectId: string;

  @IsString()
  @IsNotEmpty()
  status: string; // Example: "online", "offline", "idle"

  @IsOptional()
  @IsDateString()
  joinedAt?: string;

  @IsOptional()
  @IsDateString()
  leftAt?: string;
}
