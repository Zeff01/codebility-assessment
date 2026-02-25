package com.codebility.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.codebility.todo.entity.Todo;

// using h2database; not a real db, it still uses in memory
// but can be easily replace into a postgres easily
//
//
@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {

}
