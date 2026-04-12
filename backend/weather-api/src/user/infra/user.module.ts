import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../domain/entity/user.entity';
import { USER_REPOSITORY } from '../domain/repository/user.repository.token';
import { TypeOrmUserRepository } from './persistence/typeorm-user.repository';
import { UserService } from '../application/service/user.service';
import { UserController } from '../api/controller/user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: USER_REPOSITORY,
      useClass: TypeOrmUserRepository,
    }
  ],
  exports: [
    UserService,
    USER_REPOSITORY
  ],
})
export class UserModule {}