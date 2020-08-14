import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const options = {
    logger: true
  }
  const app = await NestFactory.create(AppModule, options);

  app.setGlobalPrefix('api');

    console.log('process.env.PORT', process.env.PORT)

  await app.listen(process.env.PORT);
}
bootstrap();
