package com.codebility.todo.dto.response;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ApiErrorResponse {
  private String code;
  private String message;
  private LocalDateTime timestamp;
}
