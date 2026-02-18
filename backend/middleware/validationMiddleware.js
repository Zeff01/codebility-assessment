/**
 * Validates the request body for creating/updating a todo.
 * - For POST: `title` is required.
 * - For PUT: at least one of `title` or `completed` must be provided.
 */
function validateTodo(req, res, next) {
  const { title, completed } = req.body;
  const method = req.method;

  // --- POST validation: title is required ---
  if (method === "POST") {
    if (title === undefined || title === null) {
      return res.status(400).json({ error: "'title' is required" });
    }

    if (typeof title !== "string" || title.trim().length === 0) {
      return res
        .status(400)
        .json({ error: "'title' must be a non-empty string" });
    }
  }

  // --- PUT validation: at least one valid field required ---
  if (method === "PUT") {
    if (title === undefined && completed === undefined) {
      return res.status(400).json({
        error: "At least one field ('title' or 'completed') is required",
      });
    }

    if (title !== undefined) {
      if (typeof title !== "string" || title.trim().length === 0) {
        return res
          .status(400)
          .json({ error: "'title' must be a non-empty string" });
      }
    }
  }

  // --- Validate `completed` type if provided ---
  if (completed !== undefined && typeof completed !== "boolean") {
    return res.status(400).json({ error: "'completed' must be a boolean" });
  }

  next();
}

module.exports = { validateTodo };