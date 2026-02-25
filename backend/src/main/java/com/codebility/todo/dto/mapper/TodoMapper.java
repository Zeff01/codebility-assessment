package com.codebility.todo.dto.mapper;

import java.util.List;

import org.mapstruct.Mapper;

import com.codebility.todo.dto.request.CreateTodoRequest;
import com.codebility.todo.dto.response.TodoResponse;
import com.codebility.todo.entity.Todo;

@Mapper(componentModel = "spring")
public interface TodoMapper {

  List<TodoResponse> toResponses(List<Todo> todos);

  TodoResponse toResponse(Todo todo);

  Todo toEntity(CreateTodoRequest request);

}
