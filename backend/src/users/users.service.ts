import { Injectable } from '@nestjs/common';

export interface User {
  email: string;
  password: string;
}

@Injectable()
export class UsersService {
  private users: User[] = [];

  findByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }

  create(user: User) {
    this.users.push(user);
  }
}
