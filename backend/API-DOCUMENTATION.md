# Todo API - Backend Implementation

A clean, TypeScript-based REST API for managing todos with proper error handling and API design.

## Features

- ✅ Full CRUD operations for todos
- ✅ TypeScript for type safety
- ✅ In-memory data storage
- ✅ Comprehensive error handling
- ✅ Structured request/response format
- ✅ Input validation
- ✅ Request logging middleware
- ✅ Health check endpoint

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Port**: 4000 (default)

## Project Structure

```
src/
├── server.ts           # Main server entry point
├── routes/
│   └── todoRoutes.ts   # API endpoint handlers
├── services/
│   └── todoService.ts  # Business logic & in-memory storage
└── types/
    └── todo.ts         # TypeScript type definitions
```

## Installation

```bash
cd backend
npm install
```

## Running the Server

### Development Mode
```bash
npm run dev
```
Uses `ts-node` to run TypeScript directly without compilation.

### Production Mode
```bash
npm run build
npm start
```
Compiles TypeScript to JavaScript and runs the compiled version.

### Clean Build
```bash
npm run clean
npm run build
```

## Testing

### Testing with REST Client Extension (Recommended)

The fastest and easiest way to test the API is using the **REST Client** VS Code extension.

#### Installation

1. Open VS Code Extensions (Ctrl+Shift+X)
2. Search for "REST Client"
3. Install the extension by **Huachao Mao**

#### Using test-api.http

The `src/test/test-api.http` file contains organized HTTP requests for testing all API endpoints.

**Features:**
- ✅ One-click request testing directly in VS Code
- ✅ Variables for easy configuration (`@baseUrl`, `@todoId`)
- ✅ Organized by sections (Health Check, CRUD operations, Error cases)
- ✅ Complete test coverage including error scenarios
- ✅ Responses displayed inline in the editor
- ✅ No need for curl, Postman, or other tools

#### Quick Start

1. **Start the server:**
   ```bash
   npm run dev
   ```

2. **Open `src/test/test-api.http`** in VS Code

3. **Run requests:**
   - Click the "Send Request" button that appears above any request
   - Or press `Ctrl+Alt+R` (Windows/Linux) / `Cmd+Alt+R` (macOS)
   - Response appears in a side panel instantly

#### Workflow Example

1. Click "Send Request" on **"Create Todo 1"**
2. Copy the `id` from the response
3. Update the `@todoId` variable at the top of the file:
   ```
   @todoId = <paste-the-id-here>
   ```
4. Now run other requests (Get, Update, Delete) using this ID

#### Test Sections in test-api.http

- **Health Check** - Verify server is running
- **Get All Todos** - Before and after creation
- **Create Todos** - 3 sample todos for testing
- **Get Todos** - Single and all todos
- **Update Todos** - Update title, completed status, or both
- **Delete Todos** - Remove a todo
- **Error Cases** - Invalid inputs, non-existent IDs, malformed requests

#### Variables

```http
@baseUrl = http://localhost:4000       // API base URL
@contentType = application/json        // Content type header
@todoId = your-todo-id                 // Replace with actual ID from response
```

## API Endpoints

All responses follow a consistent format:

```json
{
  "success": boolean,
  "data": object | null,
  "error": string | null
}
```

### GET /api/todos
Lists all todos.

**Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "id": "1707316800000abc123",
      "title": "Learn TypeScript",
      "completed": false,
      "createdAt": "2025-02-07T10:00:00.000Z"
    }
  ]
}
```

### GET /api/todos/:id
Get a single todo by ID.

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "1707316800000abc123",
    "title": "Learn TypeScript",
    "completed": false,
    "createdAt": "2025-02-07T10:00:00.000Z"
  }
}
```

**Error (404 Not Found):**
```json
{
  "success": false,
  "error": "Todo with ID xyz not found"
}
```

### POST /api/todos
Create a new todo.

**Request Body:**
```json
{
  "title": "Buy groceries"
}
```

**Response (201 Created):**
```json
{
  "success": true,
  "data": {
    "id": "1707316800000abc123",
    "title": "Buy groceries",
    "completed": false,
    "createdAt": "2025-02-07T10:00:00.000Z"
  }
}
```

**Error (400 Bad Request):**
```json
{
  "success": false,
  "error": "Title is required and must be a string"
}
```

### PUT /api/todos/:id
Update a todo by ID.

**Request Body (all fields optional):**
```json
{
  "title": "Updated title",
  "completed": true
}
```

**Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "id": "1707316800000abc123",
    "title": "Updated title",
    "completed": true,
    "createdAt": "2025-02-07T10:00:00.000Z"
  }
}
```

**Error (404 Not Found):**
```json
{
  "success": false,
  "error": "Todo with ID xyz not found"
}
```

### DELETE /api/todos/:id
Delete a todo by ID.

**Response (204 No Content):**
Empty response on success.

**Error (404 Not Found):**
```json
{
  "success": false,
  "error": "Todo with ID xyz not found"
}
```

### GET /health
Health check endpoint.

**Response (200 OK):**
```json
{
  "status": "ok",
  "timestamp": "2025-02-07T10:00:00.000Z"
}
```

## Testing with cURL (Manual Testing)

For manual testing without using the REST Client extension, you can use cURL commands.

### Create a Todo
```bash
curl -X POST http://localhost:4000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Learn TypeScript"}'
```

### Get All Todos
```bash
curl http://localhost:4000/api/todos
```

### Get a Specific Todo
```bash
curl http://localhost:4000/api/todos/{id}
```

### Update a Todo
```bash
curl -X PUT http://localhost:4000/api/todos/{id} \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'
```

### Delete a Todo
```bash
curl -X DELETE http://localhost:4000/api/todos/{id}
```

## Error Handling

The API includes comprehensive error handling:

- **400 Bad Request**: Invalid input or missing required fields
- **404 Not Found**: Todo ID doesn't exist
- **500 Internal Server Error**: Unexpected server errors

All errors follow the standard response format with a `success: false` status and an `error` message.

## Validation

- **Title**: Required, non-empty string, max 500 characters
- **Completed**: Optional, must be boolean
- All requests with invalid data return a 400 status with a descriptive error message

## Code Quality

✅ **Type Safety**: Full TypeScript type coverage  
✅ **Clean Code**: Well-organized, single responsibility principle  
✅ **Error Handling**: Try-catch blocks with proper HTTP status codes  
✅ **Logging**: Built-in request logging middleware  
✅ **Documentation**: Comments explaining key components  

## Author

Rommel Agasa

## License

MIT
