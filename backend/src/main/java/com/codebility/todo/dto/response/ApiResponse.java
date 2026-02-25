package com.codebility.todo.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ApiResponse<T> {
  private String message;
  private T data;

  public static <T> ApiResponse<T> success(String message, T data) {
    return new ApiResponse<>(message, data);
  }

}
