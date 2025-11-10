// validation for creating new task
exports.createTask = (request, response, next) => {
    const { title, completed } = request.body;

    if (!title || typeof title !== 'string' || title.trim().length === 0) {
        const error = new Error("Invalid request: Title is required and must be a non-empty string");
        error.status = 400;
        return next(error);
    }

    next();
}


// validation for updating existing task
exports.updateTask = (request, response, next) => {
    const { title, completed } = request.body;
    if (typeof title !== 'undefined' && (typeof title !== 'string' || title.trim().length === 0)) {
        const error = new Error("Invalid request: Title must be a non-empty string");
        error.status = 400;
        return next(error);
    }   
    if (typeof completed !== 'undefined' && typeof completed !== 'boolean') {
        const error = new Error("Invalid request: Completed must be a boolean");
        error.status = 400;
        return next(error);
    }

    next();
}