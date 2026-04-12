import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { UserService } from '../../user/application/service/user.service';
import { HashService } from '../../common/security/service/hash.service';
import { Role } from '../../common/security/enum/role.enum';
import { USER_REPOSITORY } from '../../user/domain/repository/user.repository.token';
import type { UserRepository } from '../../user/domain/repository/user.repository';
import { ConfigService } from '@nestjs/config';
import { User } from '../../user/domain/entity/user.entity';

@Injectable()
export class AdminSeed implements OnApplicationBootstrap {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    private readonly hashService: HashService,
    private readonly configService: ConfigService
  ) {}

  async onApplicationBootstrap() {
    await this.createAdminIfNotExists();
  }

  private async createAdminIfNotExists() {
    const email = this.configService.get<string>('ADMIN_EMAIL');
    const password = this.configService.get<string>('ADMIN_PASSWORD');

    if (!email || !password) {
      throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD values are not defined.');
    }

    const existingAdmin = await this.userRepository.findByEmail(email);
    if (existingAdmin) return;

    const passwordHash = await this.hashService.hash(password);

    const admin = new User(
      email,
      passwordHash,
      'System',
      'Admin',
      Role.ADMIN
    );

    await this.userRepository.save(admin);

    // TODO: log here
  }
} 