import { CreateUserRequestDto } from "../dto/create-user-request.dto";
import { User } from "../../domain/entity/user.entity";
import type { UserRepository } from "../../domain/repository/user.repository";
import { USER_REPOSITORY } from "../../domain/repository/user.repository.token";
import { Inject, Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { UserResponseDto } from '../../api/dto/user-response.dto';
import { QueryFailedError } from "typeorm";
import { UpdateUserRequestDto } from "../../api/dto/update-user-request.dto";
import { AppConflictException } from "../../../common/exception/app-conflict.exception";
import { ErrorCode } from "../../../common/exception/error-code.enum";
import { AppNotFoundException } from "../../../common/exception/app-notfound.exception";
import { UserAuth } from "../dto/user-auth.dto";
import { JwtUser } from "../../../common/security/interface/jwt-user.interface";
import { Role } from "../../../common/security/enum/role.enum";
import { AppForbiddenException } from "../../../common/exception/app-forbidden.exception";

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository
  ) {}

  async create(request: CreateUserRequestDto): Promise<UserResponseDto> {
    const email = request.email.trim().toLowerCase();

    const user = new User(
      email,
      request.passwordHash,
      request.firstName,
      request.lastName
    );

    try {
      const savedUser = await this.userRepository.save(user);
      return plainToInstance(UserResponseDto, savedUser, {
        excludeExtraneousValues: true
      });
    } catch (error) {
      if (error instanceof QueryFailedError && (error as any).code == '23505') {
        throw new AppConflictException(
          'User already exists.',
          ErrorCode.USER_EMAIL_EXISTS,
          { email }
        );
      }
      throw error;
    }
  }

  async getById(id: string): Promise<UserResponseDto> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppNotFoundException(
        'User not found.',
        ErrorCode.USER_NOT_FOUND,
        { id }
      );
    }

    return plainToInstance(UserResponseDto, user, {
      excludeExtraneousValues: true
    })
  }

  async getByEmail(email: string): Promise<UserResponseDto> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppNotFoundException(
        'User not found.',
        ErrorCode.USER_NOT_FOUND,
        { email }
      );
    }

    return plainToInstance(UserResponseDto, user, {
      excludeExtraneousValues: true
    })
  }

  async existsByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async getAuthByEmail(email: string): Promise<UserAuth | null> {
    const user = await this.userRepository.findAuthByEmail(email);

    if (!user) {
      return null;
    }

    return new UserAuth(
      user.id, 
      user.email, 
      user.firstName, 
      user.passwordHash, 
      user.role, 
      user.isActive
    );
  }

  async getAll(): Promise<UserResponseDto[]> {
    const users = await this.userRepository.findAll();
    return plainToInstance(UserResponseDto, users, {
      excludeExtraneousValues: true
    });
  }

  async update(
    actor: JwtUser,
    id: string, 
    request: UpdateUserRequestDto
  ): Promise<UserResponseDto> {
    // Enforce resource ownership
    const isAdmin = actor.role == Role.ADMIN;
    const isOwner = actor.userId == id;

    if (!isAdmin && !isOwner) {
      throw new AppForbiddenException('You do not have permission to update this user.');
    }

    // Check if user entry exists in DB
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppNotFoundException(
        'User not found.',
        ErrorCode.USER_NOT_FOUND,
        { id }
      );
    }

    // Update only allowed fields
    user.firstName = request.firstName ?? user.firstName;
    user.lastName = request.lastName ?? user.lastName;

    const updatedUser = await this.userRepository.save(user);

    return plainToInstance(UserResponseDto, updatedUser, {
      excludeExtraneousValues: true
    });
  }

  async delete(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);
    
    if (!user) {
      throw new AppNotFoundException(
        'User not found.',
        ErrorCode.USER_NOT_FOUND,
        { id }
      );
    }

    await this.userRepository.delete(id);
  }
}