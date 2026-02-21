# Todo List API

A simple Todo List REST API using Node.js and Express with full CRUD operations. Data is stored in memory, no database required.

## API Documentation

Postman documentation is available here:
https://documenter.getpostman.com/view/51751420/2sBXcEk1FV

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express
- **Other:** uuid, dotenv

## Endpoints

- GET /api/todos - List all todos
- GET /api/todos/:id - Get a single todo
- POST /api/todos - Create a new todo
- PUT /api/todos/:id - Update a todo
- DELETE /api/todos/:id - Delete a todo

## Details

- Data is stored in memory using an array and will reset when the server restarts.
- MVC-inspired folder structure
- Each todo is assigned a unique UUID on creation.
- Input validation and error handling

### Request Body
- POST /api/todos requires `title` (string)
- PUT /api/todos/:id requires `title` (string) and `completed` (boolean)

### Response Structure
- All todos contain `id`, `title`, `completed`, and `createdAt` fields
- Create and update responses include a message and the todo object
- Delete response returns a success message only

### Error Responses & Status Codes
- `200` - Success
- `201` - Todo created successfully
- `400` - Missing or invalid request body
- `404` - Todo not found
- `409` - Todo already exists

### Validation Rules
- `title` is required and cannot be empty
- `completed` is required on update and must be a boolean
- Duplicate todo titles are not allowed
  
## Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── todoController.js   # CRUD logic
│   ├── data/
│   │   └── store.js            # In-memory storage
│   ├── routes/
│   │   └── todoRoutes.js       # Routes
│   └── server.js               # Express app setup
├── .env.example
├── index.js                    # Entry point
└── package.json
```

## Author
- **GitHub:** [github.com/deyperfect](https://github.com/deyperfect)
