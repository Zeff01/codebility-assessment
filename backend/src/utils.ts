type TodoBody = {
  title?: string;
  update: boolean;
  completed?: boolean;
};

export function validateBody(body: TodoBody): string | null {
  if (body.update) {
    if (body.completed === undefined)
      return "Completed status is required for update";
    if (body.completed !== undefined && typeof body.completed !== "boolean")
      return "Completed status must be a boolean";
  } else {
    if (!body.title) return "Title is required";
    if (typeof body.title !== "string" || body.title.length < 3)
      return "Title must be at least 3 characters long";
  }
  return null;
}
