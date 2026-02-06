// Validate the structure of a todo request
function validateTodo(todo, existingTodos, action) {
  if (!todo) {
    return { valid: false, message: "Request body is required" };
  }

  const { id, title, completed } = todo;

  // Check required fields
  if (!id || !title || completed === undefined) {
    return { valid: false, message: "Missing required fields" };
  }

  // Check for unique ID on creation and existence on update
  if (
    action === "post" &&
    existingTodos.find((existingTodo) => existingTodo.id === parseInt(id))
  ) {
    return { valid: false, message: "Todo with this ID already exists" };
  } else if (
    action === "put" &&
    !existingTodos.find((existingTodo) => existingTodo.id === parseInt(id))
  ) {
    return { valid: false, message: "Todo with this ID does not exist" };
  }

  // Check that title is a non-empty string
  if (title.trim() === "") {
    return { valid: false, message: "Title cannot be empty" };
  }

  // Check data type of 'completed' field
  if (typeof completed !== "boolean") {
    return { valid: false, message: "'completed' must be a boolean" };
  }

  return { valid: true };
}

module.exports = validateTodo;
