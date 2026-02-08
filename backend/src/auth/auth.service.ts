import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { PrismaService } from "../prisma/prisma.service";
import { ErrorCodesConstant } from "@backend/common";

type SignTokenPayload = { id: string; email: string };

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  private signToken(user: SignTokenPayload) {
    return this.jwt.sign({
      sub: user.id,
      email: user.email,
    });
  }

  async register(email: string, password: string) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true },
    });

    if (existingUser) {
      throw new ConflictException({
        code: ErrorCodesConstant.AUTH_EMAIL_TAKEN,
        message: "Email already registered.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const createdUser = await this.prisma.user.create({
      data: { email, passwordHash },
      select: { id: true, email: true },
    });

    return {
      accessToken: this.signToken(createdUser),
    };
  }

  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: { id: true, email: true, passwordHash: true },
    });

    if (!user)
      throw new UnauthorizedException({
        code: ErrorCodesConstant.AUTH_INVALID_CREDENTIALS,
        message: "Invalid credentials.",
      });

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid)
      throw new UnauthorizedException({
        code: ErrorCodesConstant.AUTH_INVALID_CREDENTIALS,
        message: "Invalid credentials.",
      });

    return {
      accessToken: this.signToken({ id: user.id, email: user.email }),
    };
  }
}
