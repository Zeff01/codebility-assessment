package com.codebility.todo.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CreateTodoRequest(

    @NotBlank(message = "TODO title is required") @Size(min = 3, max = 50, message = "TODO title must be {min} and {max} characters") String title) {
}
