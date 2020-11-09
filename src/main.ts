import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const options = {
    logger: true,
  };

  try {
    const app = await NestFactory.create(AppModule, options);

    console.log('process.env.PORT', process.env.PORT);

    app.setGlobalPrefix('api');
    app.enableCors()

    await app.listen(process.env.PORT);
  } catch(err) {
    console.log(err)
    throw err
  }
}

bootstrap()
  .then((result) => {
    console.log('result', result)
  })
  .catch((err) => console.log(err))
