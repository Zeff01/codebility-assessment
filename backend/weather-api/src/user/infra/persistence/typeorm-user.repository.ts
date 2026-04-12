import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../domain/repository/user.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../../domain/entity/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class TypeOrmUserRepository implements UserRepository { 
  constructor( 
    @InjectRepository(User) 
    private repo: Repository<User>,
  ) {} 

  async save(user: User): Promise<User> { 
    return await this.repo.save(user);
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.repo.findOne({ where: { id } });

    if (!user) return null;

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repo.findOne({ where: { email } });

    if (!user) return null;

    return user;
  }

  async findAuthByEmail(email: string): Promise<User | null> {
    return this.repo.findOne({
      where: { email },
      select: {
        id: true,
        email: true,
        passwordHash: true,
        role: true,
        isActive: true,
      }
    });
  }

  async findAll(): Promise<User[]> {
    return this.repo.find();
  }

  async delete(id: string): Promise<void> {
    await this.repo.delete(id);
  }
}