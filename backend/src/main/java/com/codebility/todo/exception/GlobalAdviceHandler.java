package com.codebility.todo.exception;

import java.time.LocalDateTime;
import java.util.stream.Collectors;
import com.codebility.todo.dto.response.ApiErrorResponse;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@Slf4j
@RestControllerAdvice

public class GlobalAdviceHandler {

  @ExceptionHandler(Exception.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  public ApiErrorResponse handleUnexpected(Exception ex, HttpServletRequest request) {

    log.error("Unexpected error at {}: ", request.getRequestURI(), ex);
    return buildErrorResponse("INTERNAL_SERVER_ERROR", "An unexpected error occurred");
  }

  @ExceptionHandler(ResourceNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public ApiErrorResponse handleNotFound(ResourceNotFoundException e) {
    log.warn("Entity not found: {}", e.getMessage());
    return ApiErrorResponse.builder().code("NOT_FOUND").message(e.getMessage()).timestamp(LocalDateTime.now()).build();
  }

  @ExceptionHandler(MethodArgumentNotValidException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  public ApiErrorResponse handleValidation(MethodArgumentNotValidException e) {
    String message = e.getBindingResult().getFieldErrors().stream()
        .map(err -> err.getDefaultMessage())
        .collect(Collectors.joining(", "));

    return buildErrorResponse(
        "VALIDATION_ERROR", message);
  }

  private ApiErrorResponse buildErrorResponse(String code, String message) {
    return ApiErrorResponse.builder().code(code).message(message).timestamp(LocalDateTime.now()).build();
  }
}
