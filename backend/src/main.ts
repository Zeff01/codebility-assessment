import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { ExceptionsFilter } from "./utils";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService: ConfigService<Record<string, unknown>, true> = app.get(
    ConfigService,
  );

  app.setGlobalPrefix("api");

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new ExceptionsFilter());

  const corsOrigin = configService.get("CORS_ORIGIN");

  app.enableCors({
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
    origin: corsOrigin ? corsOrigin.split(",") : [],
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(`🚀 API is running on: http://localhost:${port}/api`);
}
bootstrap();
