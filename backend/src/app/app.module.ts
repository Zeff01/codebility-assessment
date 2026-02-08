import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { WeatherModule } from "./../weather/weather.module";
import { AuthModule } from "./../auth/auth.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "@backend/prisma/prisma.module";
import { LoggerMiddleware } from "@backend/middlewares/logger.middleware";
import { ThrottlerModule } from "@nestjs/throttler";
import { CacheModule } from "@nestjs/cache-manager/dist/cache.module";

@Module({
  imports: [
    CacheModule.register(),
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    WeatherModule,
    AuthModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60_000,
        limit: 120,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: "api/*path", method: RequestMethod.ALL });
  }
}
