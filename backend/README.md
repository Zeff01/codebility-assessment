# Todo List REST API (Backend Assessment)

A lightweight, clean, and type-safe REST API for managing a Todo list, built with Node.js, Express, and TypeScript. The application uses an in-memory data store and follows a layered design to demonstrate structured, maintainable backend architecture.

---

## Tech Stack

- **Runtime & Language**: Node.js, TypeScript (ESM, `NodeNext` module/resolution)
- **Web Framework**: Express.js
- **Development Tooling**: `tsx` (for hot reloading / dev runner), `tsc` (for build compilation)
- **Database/Persistence**: In-memory storage (plain array, no DB/ORM)

---

## Folder Structure

```text
src/
├── common/                # Shared utilities, errors, and middlewares
│   ├── error/             # Custom Domain Errors
│   │   └── domain.error.ts
│   └── middleware/        # Global request middlewares
│       └── error.middleware.ts
├── controller/            # API routing and HTTP request handling
│   ├── app.router.ts      # Mounts resource routes to the Express app
│   └── todo.controller.ts # Express Router containing HTTP routes & handlers
├── model/                 # Data representations and Transfer Objects
│   └── todo.model.ts      # Todo interfaces and DTOs (CreateTodoDTO, UpdateTodoDTO)
├── repository/            # Storage interface and in-memory engine
│   └── todo.repository.ts # ITodoRepository interface & InMemoryTodoRepository implementation
├── usecase/               # Core business logic and validation rules
│   └── todo.usecase.ts    # TodoUsecase containing operations orchestration
└── index.ts               # Express application entrypoint
```

---

## Architecture & Request Flow

The application is structured using a **Layered Architecture**, enforcing a clean separation of concerns and a unidirectional dependency flow:

$$\text{Client Request} \longrightarrow \text{Routes / Controller} \longrightarrow \text{Usecase} \longrightarrow \text{Repository} \longrightarrow \text{In-Memory Store}$$

### Architectural Roles:
1. **Controller Layer (`todo.controller.ts`)**: Handles HTTP routing, request parsing, and response formatting. It is merged with routes in a single file per resource, directly exporting an Express `Router` to reduce boilerplate while keeping route configuration close to its handlers. It delegates all business decisions to the Usecase layer.
2. **Usecase Layer (`todo.usecase.ts`)**: Orchestrates business rules, handles input schema/type validations, and manages workflow execution. It depends exclusively on the `ITodoRepository` interface, remaining completely decoupled from the data storage engine.
3. **Repository Layer (`todo.repository.ts`)**: Encapsulates raw data persistence mechanisms (in-memory storage array).

### Storage Decoupling (Interface Design):
The repository is defined using an interface (`ITodoRepository`) to allow the storage backend to be easily swapped (e.g., to SQL, MongoDB, or an external API) without modifying any business logic in the Usecase layer. Conversely, the Usecase and Controller do not use interfaces since there is no architectural need to swap their implementations within this project's scope.

---

## Setup & Running Instructions

### 1. Install Dependencies
Install the required development and runtime packages:
```bash
npm install
```

### 2. Start the Development Server
Runs the application with live reload enabled using `tsx watch`:
```bash
npm run dev
```
The server will start running on port `4000` (`http://localhost:4000`).

### 3. Build & Run in Production
Compile the TypeScript code to JavaScript:
```bash
npm run build
```

Start the compiled application:
```bash
npm start
```

---

## 📋 API Endpoints & Contract Documentation

### Todo Entity Shape
Every Todo object conforms to the following schema:
```json
{
  "id": "03d96607-5294-411b-9eaa-2dd470114396",
  "title": "Cleaned Title",
  "completed": true,
  "createdAt": "2026-07-03T13:16:32.352Z"
}
```

---

### 1. List All Todos
- **Method / Path**: `GET /api/todos`
- **Response (200 OK)**:
  ```json
  [
    {
      "id": "5b496db7-e383-498e-9570-1e2121b796e9",
      "title": "Buy groceries",
      "completed": false,
      "createdAt": "2026-07-03T13:05:54.456Z"
    }
  ]
  ```

### 2. Get Single Todo
- **Method / Path**: `GET /api/todos/:id`
- **Response (200 OK)**:
  ```json
  {
    "id": "5b496db7-e383-498e-9570-1e2121b796e9",
    "title": "Buy groceries",
    "completed": false,
    "createdAt": "2026-07-03T13:05:54.456Z"
  }
  ```
- **Response (404 Not Found)**:
  ```json
  {
    "message": "Todo not found"
  }
  ```

### 3. Create Todo
- **Method / Path**: `POST /api/todos`
- **Request Body**:
  ```json
  {
    "title": "Buy milk"
  }
  ```
- **Response (201 Created)**:
  ```json
  {
    "id": "97e411b0-9eaa-411b-9eaa-2dd470114396",
    "title": "Buy milk",
    "completed": false,
    "createdAt": "2026-07-03T13:18:22.102Z"
  }
  ```
- **Response (400 Bad Request)**:
  ```json
  {
    "message": "Title is required"
  }
  ```

### 4. Update Todo (Partial Update)
- **Method / Path**: `PUT /api/todos/:id`
- **Request Body** *(all fields optional)*:
  ```json
  {
    "title": "Buy organic milk",
    "completed": true
  }
  ```
- **Response (200 OK)**:
  ```json
  {
    "id": "97e411b0-9eaa-411b-9eaa-2dd470114396",
    "title": "Buy organic milk",
    "completed": true,
    "createdAt": "2026-07-03T13:18:22.102Z"
  }
  ```
- **Response (400 Bad Request - Invalid Title Type)**:
  ```json
  {
    "message": "Title must be a non-empty string"
  }
  ```
- **Response (400 Bad Request - Invalid Completed Type)**:
  ```json
  {
    "message": "Completed must be a boolean"
  }
  ```
- **Response (404 Not Found)**:
  ```json
  {
    "message": "Todo not found"
  }
  ```

### 5. Delete Todo
- **Method / Path**: `DELETE /api/todos/:id`
- **Response (204 No Content)**: *(Empty body)*
- **Response (404 Not Found)**:
  ```json
  {
    "message": "Todo not found"
  }
  ```

---

## Design Decisions & Key Callouts

1. **Partial-Update Semantics for PUT**: The `PUT` endpoint is implemented with partial-update (PATCH-like) semantics instead of a strict full replacement. Clients can update only a subset of the fields (e.g., toggling `completed` without re-sending the unchanged `title`) without accidentally resetting unspecified properties.
2. **In-Memory Storage Lifetime**: The data layer uses an in-memory array (`private todos: Todo[] = []`). Therefore, the state is temporary and resets whenever the Node.js application process restarts.
3. **Custom Global Error Handling**: Operational/business exceptions are modeled as a custom `DomainError` carrying HTTP status codes. Express interceptors handle these errors gracefully, returning structured JSON responses. Uncaught syntax errors (such as malformed JSON payloads) are also intercepted to prevent raw stack traces from leaking, failing safe with clean `400` or `500` status codes.
4. **Input Sanitization**: Text inputs like the todo `title` are automatically trimmed of leading and trailing whitespaces during both creation and update logic.
