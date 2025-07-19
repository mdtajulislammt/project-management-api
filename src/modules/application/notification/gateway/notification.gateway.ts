import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CreateNotificationDto } from '../dto/create-notification.dto';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class NotificationGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('notify')
  handleNotification(@MessageBody() data: CreateNotificationDto) {
    this.server.emit(`user-${data.userId}`, data);
  }

  sendToUser(userId: string, payload: any) {
    this.server.emit(`user-${userId}`, payload);
  }
}
