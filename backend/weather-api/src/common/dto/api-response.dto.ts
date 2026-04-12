import { ApiProperty } from '@nestjs/swagger';

export class ApiResponse<T> {
  @ApiProperty({ example: 'Request successful' })
  message: string;

  @ApiProperty({ description: 'Requested data' })
  data: T;

  @ApiProperty({ example: '2026-04-12T10:00:00.000Z' })
  timestamp: string;

  constructor(
    message: string,
    data: T,
    timestamp: string = new Date().toISOString(),
  ) {
    this.message = message;
    this.data = data;
    this.timestamp = timestamp;
  }

  static success<T>(message: string, data: T) {
    return new ApiResponse<T>(message, data);
  }
}