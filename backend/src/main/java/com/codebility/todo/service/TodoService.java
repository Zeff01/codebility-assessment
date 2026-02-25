package com.codebility.todo.service;

import java.util.List;

import com.codebility.todo.dto.request.CreateTodoRequest;
import com.codebility.todo.dto.request.UpdateTodoRequest;
import com.codebility.todo.dto.response.TodoResponse;

public interface TodoService {

  List<TodoResponse> findAll();

  TodoResponse findById(Long id);

  TodoResponse createTodo(CreateTodoRequest request);

  TodoResponse updateTodoById(Long id, UpdateTodoRequest request);

  TodoResponse deleteTodoById(Long id);

}
