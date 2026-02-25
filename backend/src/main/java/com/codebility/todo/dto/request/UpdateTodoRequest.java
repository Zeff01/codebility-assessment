package com.codebility.todo.dto.request;

import jakarta.validation.constraints.Size;

public record UpdateTodoRequest(
    @Size(min = 3, max = 50, message = "TODO title must be {min} and {max} characters") String title,
    Boolean isCompleted) {

}
