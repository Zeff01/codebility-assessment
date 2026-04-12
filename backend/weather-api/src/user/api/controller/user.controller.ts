import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  UseGuards,
} from '@nestjs/common';

import { UserService } from '../../application/service/user.service';
import { UpdateUserRequestDto } from '../dto/update-user-request.dto';
import { UserResponseDto } from '../dto/user-response.dto';
import { ApiResponse } from '../../../common/dto/api-response.dto';
import { CurrentUser } from '../../../common/security/decorator/current-user.decorator';
import type { JwtUser } from '../../../common/security/interface/jwt-user.interface';
import { RolesGuard } from '../../../common/security/guard/roles.guard';
import { Roles } from '../../../common/security/decorator/roles.decorator';
import { Role } from '../../../common/security/enum/role.enum';
import { ResourceAccessGuard } from '../../../common/security/guard/resource-access.guard';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@ApiBearerAuth()
@UseGuards(RolesGuard)
@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get current user' })
  @ApiOkResponse({ description: 'User retrieved successfully' })
  @Roles(Role.ADMIN, Role.USER)
  @Get('me')
  async me(
    @CurrentUser() user: JwtUser
  ): Promise<ApiResponse<UserResponseDto>> {
    const currentlyAuthenticatedUser = await this.userService.getById(user.userId);

    return ApiResponse.success(
      'User retrieved successfully.',
      currentlyAuthenticatedUser
    );
  }

  @ApiOperation({ summary: 'Get all users' })
  @ApiOkResponse({ description: 'Users retrieved successfully' })
  @Roles(Role.ADMIN)
  @Get()
  async getAll(): Promise<ApiResponse<UserResponseDto[]>> {
    const users = await this.userService.getAll();

    return ApiResponse.success(
      'Users retrieved successfully.',
      users,
    );
  }

  @ApiOperation({ summary: 'Get user by id' })
  @ApiParam({ name: 'id', description: 'User ID (UUID)' })
  @ApiOkResponse({ description: 'User retrieved successfully' })
  @Roles(Role.ADMIN)
  @Get(':id')
  async getById(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ApiResponse<UserResponseDto>> {
    const user = await this.userService.getById(id);

    return ApiResponse.success(
      'User retrieved successfully.',
      user,
    );
  }

  @ApiOperation({ summary: 'Update user' })
  @ApiParam({ name: 'id', description: 'User ID (UUID)' })
  @ApiOkResponse({ description: 'User updated successfully' })
  @UseGuards(ResourceAccessGuard)
  @Roles(Role.ADMIN, Role.USER)
  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() dto: UpdateUserRequestDto,
    @CurrentUser() user: JwtUser
  ): Promise<ApiResponse<UserResponseDto>> {
    const updatedUser = await this.userService.update(user, id, dto);

    return ApiResponse.success(
      'User updated successfully.',
      updatedUser,
    );
  }

  @ApiOperation({ summary: 'Delete user' })
  @ApiParam({ name: 'id', description: 'User ID (UUID)' })
  @ApiOkResponse({ description: 'User deleted successfully' })
  @Roles(Role.ADMIN)
  @Delete(':id')
  async delete(
    @Param('id', ParseUUIDPipe) id: string,
  ): Promise<ApiResponse<null>> {
    await this.userService.delete(id);

    return ApiResponse.success(
      'User deleted successfully.',
      null,
    );
  }
}