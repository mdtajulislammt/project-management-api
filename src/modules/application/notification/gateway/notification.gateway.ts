import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class NotificationGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private users: Map<string, Socket> = new Map();

  handleConnection(client: Socket) {
    const userId = client.handshake.query.userId as string;
    if (userId) {
      this.users.set(userId, client);
      console.log(`User connected: ${userId}`);
    }
  }

  handleDisconnect(client: Socket) {
    for (const [userId, socket] of this.users.entries()) {
      if (socket.id === client.id) {
        this.users.delete(userId);
        console.log(`User disconnected: ${userId}`);
        break;
      }
    }
  }

  sendNotificationToUser(userId: string, notification: any) {
    const client = this.users.get(userId);
    if (client) {
      client.emit('notification', notification);
    }
  }
}
