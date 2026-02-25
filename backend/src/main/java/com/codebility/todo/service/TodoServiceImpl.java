package com.codebility.todo.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.codebility.todo.dto.mapper.TodoMapper;
import com.codebility.todo.dto.request.CreateTodoRequest;
import com.codebility.todo.dto.request.UpdateTodoRequest;
import com.codebility.todo.dto.response.TodoResponse;
import com.codebility.todo.entity.Todo;
import com.codebility.todo.exception.ResourceNotFoundException;
import com.codebility.todo.repository.TodoRepository;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TodoServiceImpl implements TodoService {
  private final TodoRepository todoRepository;
  private final TodoMapper todoMapper;

  @Override
  public List<TodoResponse> findAll() {
    List<Todo> todos = todoRepository.findAll();
    return todoMapper.toResponses(todos);
  }

  @Override
  public TodoResponse findById(Long id) {
    // get or throw
    Todo todo = todoRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("TODO", id));
    return todoMapper.toResponse(todo);

  }

  @Transactional
  @Override
  public TodoResponse createTodo(@NonNull CreateTodoRequest request) {
    Todo todo = todoMapper.toEntity(request);
    return todoMapper.toResponse(todoRepository.save(todo));

  }

  @Transactional
  @Override
  public TodoResponse updateTodoById(Long id, @NonNull UpdateTodoRequest request) {
    Todo todo = todoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("TODO", id));
    if (request.title() != null) {
      todo.updateTitle(request.title());
    }
    if (request.isCompleted() != null) {
      todo.updateIsCompleted(request.isCompleted());
    }

    return todoMapper.toResponse(todo);
  }

  @Transactional
  @Override
  public TodoResponse deleteTodoById(Long id) {
    TodoResponse todo = findById(id);
    todoRepository.deleteById(id);
    return todo;
  }

}
