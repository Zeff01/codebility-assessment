import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/exception/global-exception.filter';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const filter = app.get(GlobalExceptionFilter);
  app.useGlobalFilters(filter);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // removes unknown fields
      forbidNonWhitelisted: true,   // throws error on extra fields
      transform: true,              // auto-transforms DTOs
      exceptionFactory: (errors) => {
        throw new BadRequestException(errors);
      }
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Weather API')
    .setDescription('Weather API simple documentation')
    .setVersion('0.1')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();