import { unstable_rethrow } from "next/navigation";
import { ZodError } from "zod";
import { MAX_JSON_BODY_BYTES } from "./security/request-guards";

export type ApiErrorCode =
  | "BAD_REQUEST"
  | "VALIDATION_ERROR"
  | "FORBIDDEN"
  | "NOT_FOUND"
  | "CONFLICT"
  | "PAYLOAD_TOO_LARGE"
  | "UNSUPPORTED_MEDIA_TYPE"
  | "TOO_MANY_REQUESTS"
  | "INTERNAL_ERROR";

export type ApiErrorBody = {
  error: {
    code: ApiErrorCode;
    message: string;
    details?: unknown;
  };
};

export type ApiSuccessBody<T> = { data: T };

export class ApiError extends Error {
  constructor(
    public status: number,
    public code: ApiErrorCode,
    message: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = "ApiError";
  }

  static badRequest(message: string, details?: unknown) {
    return new ApiError(400, "BAD_REQUEST", message, details);
  }

  static notFound(message = "Resource not found") {
    return new ApiError(404, "NOT_FOUND", message);
  }

  static conflict(message: string, details?: unknown) {
    return new ApiError(409, "CONFLICT", message, details);
  }
}

export function ok<T>(data: T, init?: ResponseInit) {
  return Response.json({ data } satisfies ApiSuccessBody<T>, init);
}

export function errorResponse(
  status: number,
  code: ApiErrorCode,
  message: string,
  init?: { details?: unknown; headers?: HeadersInit },
) {
  return Response.json(
    { error: { code, message, details: init?.details } } satisfies ApiErrorBody,
    { status, headers: init?.headers },
  );
}

export function handleError(error: unknown) {
  if (error instanceof ApiError) {
    return errorResponse(error.status, error.code, error.message, { details: error.details });
  }

  if (error instanceof ZodError) {
    return errorResponse(400, "VALIDATION_ERROR", "Invalid request payload", {
      details: error.issues.map((issue) => ({
        path: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  console.error("[api] unhandled error", error);
  return errorResponse(500, "INTERNAL_ERROR", "Something went wrong");
}

export function withErrorHandling<Args extends unknown[]>(
  handler: (...args: Args) => Promise<Response>,
) {
  return async (...args: Args) => {
    try {
      return await handler(...args);
    } catch (error) {
      unstable_rethrow(error);
      return handleError(error);
    }
  };
}

export async function readJson(request: Request, maxBytes = MAX_JSON_BODY_BYTES): Promise<unknown> {
  const text = await request.text();

  if (new TextEncoder().encode(text).byteLength > maxBytes) {
    throw new ApiError(413, "PAYLOAD_TOO_LARGE", "Request body is too large");
  }

  try {
    return JSON.parse(text);
  } catch {
    throw ApiError.badRequest("Request body must be valid JSON");
  }
}
