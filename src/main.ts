// main.ts
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { RolesGuard } from './auth/guards/roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const reflector = app.get(Reflector);

  // 🔥 Apply JwtAuthGuard first, then RolesGuard
  // app.useGlobalGuards(new JwtAuthGuard(), new RolesGuard(reflector));
  // Now only use RolesGuard

  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}`);
}
bootstrap();
