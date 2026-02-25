package com.codebility.todo.exception;

//generic exception for our use case 
//
public class ResourceNotFoundException extends RuntimeException {

  public ResourceNotFoundException(String resourceName, Object identifier) {
    super(resourceName + " not found with identifier: " + identifier);
  }
}
