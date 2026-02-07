import { Router, Request, Response } from "express";
import { todoService } from "../services/todoService";
import { CreateTodoRequest, UpdateTodoRequest, ApiResponse } from "../types/todo";

const router = Router();

/**
 * GET /api/todos
 * Get all todos with pagination
 * Query params: limit (default 20), offset (default 0)
 */
router.get("/", (req: Request, res: Response) => {
  try {
    // Extract pagination parameters from query string
    const limit = Math.min(parseInt(req.query.limit as string) || 20, 100); // Max 100 per request
    const offset = Math.max(parseInt(req.query.offset as string) || 0, 0);
    
    // Fetch todos with pagination
    const result = todoService.getAllTodos(limit, offset);
    
    // Return successful response with todos data and total count
    const response: ApiResponse<typeof result> = {
      success: true,
      data: result,
    };
    res.status(200).json(response);
  } catch (error) {
    // Handle any unexpected errors
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const response: ApiResponse<null> = {
      success: false,
      error: errorMessage,
    };
    res.status(500).json(response);
  }
});

/**
 * GET /api/todos/:id
 * Get a single todo by ID
 */
router.get("/:id", (req: Request, res: Response) => {
  try {
    // Extract ID from URL parameters
    const { id } = req.params;

    // Validate that ID is provided
    if (!id) {
      const response: ApiResponse<null> = {
        success: false,
        error: "Todo ID is required",
      };
      return res.status(400).json(response);
    }

    // Fetch the specific todo by ID
    const todo = todoService.getTodoById(id);

    // Return 404 if todo doesn't exist
    if (!todo) {
      const response: ApiResponse<null> = {
        success: false,
        error: `Todo with ID ${id} not found`,
      };
      return res.status(404).json(response);
    }

    // Return the found todo
    const response: ApiResponse<typeof todo> = {
      success: true,
      data: todo,
    };
    res.status(200).json(response);
  } catch (error) {
    // Handle any unexpected errors during retrieval
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const response: ApiResponse<null> = {
      success: false,
      error: errorMessage,
    };
    res.status(500).json(response);
  }
});

/**
 * POST /api/todos
 * Create a new todo
 */
router.post("/", (req: Request, res: Response) => {
  try {
    // Extract request body containing todo data
    const body: CreateTodoRequest = req.body;

    // Validate request body is a valid JSON object
    if (!body || typeof body !== "object") {
      const response: ApiResponse<null> = {
        success: false,
        error: "Request body must be a valid JSON object",
      };
      return res.status(400).json(response);
    }

    // Create the new todo with provided data
    const todo = todoService.createTodo(body);

    // Return the created todo with 201 Created status
    const response: ApiResponse<typeof todo> = {
      success: true,
      data: todo,
    };
    res.status(201).json(response);
  } catch (error) {
    // Handle validation or creation errors
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const response: ApiResponse<null> = {
      success: false,
      error: errorMessage,
    };
    res.status(400).json(response);
  }
});

/**
 * PUT /api/todos/:id
 * Update a todo by ID
 */
router.put("/:id", (req: Request, res: Response) => {
  try {
    // Extract ID from URL parameters and update data from request body
    const { id } = req.params;
    const body: UpdateTodoRequest = req.body;

    // Validate that ID is provided
    if (!id) {
      const response: ApiResponse<null> = {
        success: false,
        error: "Todo ID is required",
      };
      return res.status(400).json(response);
    }

    // Validate that request body is a valid JSON object
    if (!body || typeof body !== "object") {
      const response: ApiResponse<null> = {
        success: false,
        error: "Request body must be a valid JSON object",
      };
      return res.status(400).json(response);
    }

    // Update the todo with provided changes
    const todo = todoService.updateTodo(id, body);

    // Return the updated todo
    const response: ApiResponse<typeof todo> = {
      success: true,
      data: todo,
    };
    res.status(200).json(response);
  } catch (error) {
    // Handle update errors - check if it's a "not found" error and return appropriate status code
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const statusCode = errorMessage.includes("not found") ? 404 : 400;
    const response: ApiResponse<null> = {
      success: false,
      error: errorMessage,
    };
    res.status(statusCode).json(response);
  }
});

/**
 * DELETE /api/todos/:id
 * Delete a todo by ID
 */
router.delete("/:id", (req: Request, res: Response) => {
  try {
    // Extract ID from URL parameters
    const { id } = req.params;

    // Validate that ID is provided
    if (!id) {
      const response: ApiResponse<null> = {
        success: false,
        error: "Todo ID is required",
      };
      return res.status(400).json(response);
    }

    // Delete the todo by ID
    todoService.deleteTodo(id);

    // Return 204 No Content on successful deletion
    const response: ApiResponse<null> = {
      success: true,
      data: undefined,
    };
    res.status(204).send();
  } catch (error) {
    // Handle deletion errors - check if it's a "not found" error and return appropriate status code
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    const statusCode = errorMessage.includes("not found") ? 404 : 400;
    const response: ApiResponse<null> = {
      success: false,
      error: errorMessage,
    };
    res.status(statusCode).json(response);
  }
});

export default router;
