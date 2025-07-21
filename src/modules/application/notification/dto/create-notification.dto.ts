// src/notification/dto/create-notification.dto.ts
import { IsString, IsBoolean } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  userId: string;

  @IsString()
  title: string;

  @IsString()
  message: string;

  @IsBoolean()
  read: boolean;

  @IsString()
  status: string;
}
