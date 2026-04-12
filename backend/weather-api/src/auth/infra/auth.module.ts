import { Module } from '@nestjs/common';
import { UserModule } from '../../user/infra/user.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SecurityModule } from '../../common/security/security.module';
import { AuthService } from '../application/service/auth.service';
import { JwtStrategy } from './security/jwt.strategy';
import { AuthController } from '../api/controller/auth.controller';

@Module({
  imports: [
    UserModule,
    SecurityModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '30m' },
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}