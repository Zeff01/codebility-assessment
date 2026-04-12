import { ApiProperty } from '@nestjs/swagger';

export class ApiError {
  @ApiProperty({ example: 400 })
  statusCode: number;

  @ApiProperty({ example: 'Bad Request' })
  message: string;

  @ApiProperty({ example: 'USER_NOT_FOUND' })
  code: string;

  @ApiProperty({ example: '/api/users/123' })
  path: string;

  @ApiProperty({ example: '2026-04-12T10:00:00.000Z' })
  timestamp: string = new Date().toISOString();

  @ApiProperty({ required: false, nullable: true })
  details?: any;

  constructor(
    statusCode: number,
    message: string,
    code: string,
    path: string,
    timestamp: string = new Date().toISOString(),
    details?: any,
  ) {
    this.statusCode = statusCode;
    this.message = message;
    this.code = code;
    this.path = path;
    this.timestamp = timestamp;
    this.details = details;
  }
}