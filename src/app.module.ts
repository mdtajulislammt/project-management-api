import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TaskModule } from './modules/application/task/task.module';
import { ProjectModule } from './modules/application/project/project.module';
import { PresenceModule } from './modules/application/presence/presence.module';
import { NotificationModule } from './modules/application/notification/notification.module';
import { UserModule } from './modules/users/user.module';
import { CommentModule } from './modules/application/comment/comment.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    TaskModule,
    ProjectModule,
    PresenceModule,
    NotificationModule,
    AuthModule,
    UserModule,
    CommentModule
    // Add other 
    // modules here
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // Removed RolesGuard
  ],
})
export class AppModule {}
