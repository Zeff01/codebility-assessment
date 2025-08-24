# API Documentation

_Authored by: Earl Bryan Bura-ay - Applicant_

## Todo API

### 1. Get All Todos

- **Endpoint**: `GET /todos`
- **Description**: Retrieves all todos.
- **Response**:
  - **200 OK**:
    ```json
    {
      "data": [
        /* array of todos */
      ],
      "success": true
    }
    ```

### 2. Create Todo

- **Endpoint**: `POST /todos`
- **Description**: Creates a new todo.
- **Request Body**:
  ```json
  {
    "title": "string"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "data": {
        "id": "string",
        "title": "string",
        "completed": false,
        "createdAt": "ISO date string"
      },
      "success": true
    }
    ```

### 3. Update Todo

- **Endpoint**: `PUT /todos/:id`
- **Description**: Updates an existing todo by ID.
- **Request Body**:
  ```json
  {
    "title": "string"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "data": {
        "id": "string",
        "title": "string",
        "completed": boolean,
        "updatedAt": "ISO date string"
      },
      "success": true
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "message": "Todo not found",
      "success": false
    }
    ```

### 4. Delete Todo

- **Endpoint**: `DELETE /todos/:id`
- **Description**: Deletes a todo by ID.
- **Response**:
  - **200 OK**:
    ```json
    {
      "data": {
        "id": "string",
        "title": "string",
        "description": "string",
        "completed": boolean
      },
      "success": true,
      "message": "Todo deleted successfully"
    }
    ```
  - **404 Not Found**:
    ```json
    {
      "message": "Todo not found",
      "success": false
    }
    ```
