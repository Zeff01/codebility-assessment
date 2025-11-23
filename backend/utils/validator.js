module.exports = function validateTodo(data, requireTitle) {
    if (requireTitle && (!data.title || typeof data.title !== "string")) {
        return "Title is required and must be a string.";
    }

    if (data.completed !== undefined && typeof data.completed !== "boolean") {
        return "Completed must be a boolean.";
    }

    return null;
};