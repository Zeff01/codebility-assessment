package com.codebility.todo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codebility.todo.dto.request.CreateTodoRequest;
import com.codebility.todo.dto.request.UpdateTodoRequest;
import com.codebility.todo.dto.response.ApiResponse;
import com.codebility.todo.dto.response.TodoResponse;
import com.codebility.todo.service.TodoService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("${api.prefix}/todos")
public class TodoController {

  private final TodoService todoService;

  @GetMapping
  public ResponseEntity<ApiResponse<List<TodoResponse>>> getAllTodos() {
    List<TodoResponse> todoResponse = todoService.findAll();
    return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success("TODOs retrieved", todoResponse));
  }

  @GetMapping("/{id}")
  public ResponseEntity<ApiResponse<TodoResponse>> getTodoById(@PathVariable Long id) {
    TodoResponse todoResponse = todoService.findById(id);
    return ResponseEntity.ok().body(ApiResponse.success("TODO retrieved", todoResponse));
  }

  @PostMapping
  public ResponseEntity<ApiResponse<TodoResponse>> createTodo(@Valid @RequestBody CreateTodoRequest request) {
    TodoResponse todoResponse = todoService.createTodo(request);
    return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success("TODO created", todoResponse));
  }

  @PutMapping("/{id}")
  public ResponseEntity<ApiResponse<TodoResponse>> updateTodo(@PathVariable Long id,
      @Valid @RequestBody UpdateTodoRequest request) {
    TodoResponse todoResponse = todoService.updateTodoById(id, request);
    return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success("TODO updated", todoResponse));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<ApiResponse<TodoResponse>> deleteTodo(@PathVariable Long id) {
    TodoResponse todoResponse = todoService.deleteTodoById(id);
    return ResponseEntity.status(HttpStatus.OK).body(ApiResponse.success("TODO deleted", todoResponse));
  }

}
