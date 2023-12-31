import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Liquid Magic API')
    .setDescription('Endpoint Information')
    .setVersion('1.0')
    .addTag('liquidmagic')
    .build();

  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(new ValidateInputPipe());

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8000);
}
bootstrap();
