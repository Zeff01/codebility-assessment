import bcrypt from 'bcrypt';
import { Conflict, Unauthorized } from 'http-errors';
import jwt from 'jsonwebtoken';
import { prisma } from '../../../common/prisma';
import { JWT_SECRET } from '../../../config/env';

export class AuthService {
  async register(username: string, password: string) {
    const existingUser = await prisma.user.count({
      where: { username },
    });
    if (existingUser > 0) {
      throw new Conflict('Username already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    return {
      access_token: this.generateToken(user.id),
    };
  }

  async login(username: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { username },
    });
    if (!user) {
      throw new Unauthorized('Invalid username or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Unauthorized('Invalid username or password');
    }

    return {
      access_token: this.generateToken(user.id),
    };
  }

  // simple token generation
  private generateToken(userId: number) {
    const token = jwt.sign({ id: userId }, JWT_SECRET, {
      expiresIn: '6h',
    });
    return token;
  }
}
