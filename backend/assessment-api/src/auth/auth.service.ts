import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Not, Repository } from 'typeorm';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(name: string, email: string, password: string) {
    const exists = await this.userRepo.findOne({ where: { email } });
    if (exists) throw new BadRequestException('Email already in use');

    const passwordHash = await argon2.hash(password);
    const newUser = this.userRepo.create({ name, email, passwordHash });
    await this.userRepo.save(newUser);

    const tokens = await this.issueTokens(newUser);
    await this.setRefreshHash(newUser.id, tokens.refreshToken);

    return this.sanitizeAuthResponse(newUser, tokens);
  }

  async login(email: string, password: string) {
    const user = await this.userRepo.findOne({ where: { email } });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    const ok = await argon2.verify(user.passwordHash, password);
    if (!ok) throw new UnauthorizedException('Invalid credentials');

    const tokens = await this.issueTokens(user);

    await this.setRefreshHash(user.id, tokens.refreshToken);

    return this.sanitizeAuthResponse(user, tokens);
  }

  async refresh(userId: number, refreshToken: string) {
    const user = await this.userRepo.findOne({ where: { id: userId } });

    if (!user || !user.refreshTokenHash) {
      throw new UnauthorizedException();
    }

    const match = await argon2.verify(user.refreshTokenHash, refreshToken);
    if (!match) throw new UnauthorizedException('Invalid refresh token');

    const tokens = await this.issueTokens(user);

    await this.setRefreshHash(user.id, tokens.refreshToken);

    return this.sanitizeAuthResponse(user, tokens);
  }

  async logout(id: number) {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) throw new NotFoundException(`User with id ${id} not found`);

    if (!id) throw new BadRequestException('Invalid credentials');

    await this.userRepo.update(id, { refreshTokenHash: null });

    return {
      success: true,
      message: 'Logout Succesfully',
    };
  }

  private async issueTokens(user: User) {
    // Access token payload
    const accessPayload = {
      sub: user.id,
      email: user.email,
    };

    // Generate access token  expires in 15 minutes
    const accessToken = await this.jwtService.signAsync(accessPayload, {
      secret: process.env.JWT_ACCESS_SECRET,
      expiresIn: '15m',
    });

    // Refresh token payload
    const refreshPayload = { sub: user.id };

    // Generate refresh token expires in 7 days
    const refreshToken = await this.jwtService.signAsync(refreshPayload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  private async setRefreshHash(studentId: number, refreshToken: string) {
    const refreshTokenHash = await argon2.hash(refreshToken);
    await this.userRepo.update(studentId, { refreshTokenHash });
  }
  private sanitizeAuthResponse(
    student: User,
    tokens: { accessToken: string; refreshToken: string },
  ) {
    return {
      student: {
        id: student.id,
        name: student.name,
        email: student.email,
      },
      tokens,
    };
  }
}
