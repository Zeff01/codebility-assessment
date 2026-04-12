import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UserModule } from './user/infra/user.module';
import { AuthModule } from './auth/infra/auth.module';
import { WeatherModule } from './weather/infra/weather.module';
import { CommonModule } from './common/common.module';
import { User } from './user/domain/entity/user.entity';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/infra/security/jwt-auth.guard';
import { DatabaseModule } from './database/database.module';
import { seconds, ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),

        entities: [User],
        synchronize: true, // !!! dev only 
      })
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000, // time window in milliseconds (60 seconds)
          limit: 10, // max 10 request per IP
        }
      ]
    }),
    UserModule, 
    AuthModule, 
    WeatherModule, 
    CommonModule, DatabaseModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard
    }
  ]
})
export class AppModule {}