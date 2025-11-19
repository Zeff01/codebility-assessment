import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async me(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) throw new NotFoundException(`Student with id ${id} not found!`);

    const { passwordHash, refreshTokenHash, ...safe } = user as any;

    return safe;
  }
}
