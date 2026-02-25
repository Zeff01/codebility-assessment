package com.codebility.todo.dto.response;

import java.time.LocalDateTime;

public record TodoResponse(Long id, String title, Boolean isCompleted, LocalDateTime createdAt) {
}
