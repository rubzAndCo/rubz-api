import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const options = {
    logger: true
  }
  const app = await NestFactory.create(AppModule, options);

  app.setGlobalPrefix('api');

  await app.listen(3003);
}
bootstrap();
