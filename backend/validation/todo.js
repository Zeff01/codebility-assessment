// validation for create
function validateCreate(body) {
  const errors = [];

  if (!body.title || typeof body.title !== "string" || !body.title.trim()) {
    errors.push("'title' is required and must be a non-empty string");
  }
  if (body.completed !== undefined && typeof body.completed !== "boolean") {
    errors.push("'completed' must be a boolean");
  }
  return errors;
}
// validation for update
function validateUpdate(body) {
  const errors = [];

  if (Object.keys(body).length === 0) {
    errors.push("Body must include at least 'title' or 'completed'");
  }
  if (body.title !== undefined && (typeof body.title !== "string" || !body.title.trim())) {
    errors.push("'title' must be a non-empty string");
  }
  if (body.completed !== undefined && typeof body.completed !== "boolean") {
    errors.push("'completed' must be a boolean");
  }

  return errors;
}
// export
module.exports = { validateCreate, validateUpdate };