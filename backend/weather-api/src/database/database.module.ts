import { Module } from '@nestjs/common';
import { AdminSeed } from './seed/admin.seed';
import { UserModule } from '../user/infra/user.module';
import { SecurityModule } from '../common/security/security.module';

@Module({
  imports: [
    UserModule, 
    SecurityModule
  ],
  providers: [AdminSeed]
})
export class DatabaseModule {}