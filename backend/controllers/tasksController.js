const { v4: uuidv4 } = require("uuid");

// In-memory tasks array
const tasks = [];

// Helper to find the tasks index
function findIndex(id) {
    return tasks.findIndex(task => task.id === id);
}


// Get all tasks
exports.getAllTasks = (request, response) => {
    // if no tasks found
    if (tasks.length === 0) {
        return response.json({ message: "No tasks found", tasks: [] });
    }

    response.status(200).json({ tasks });
}

// Get a single task by id
exports.getSingleTaskById = (request, response, next) => {
    const { id } = request.params;
    const task = tasks.find(task => task.id === id);

    // if task does not exist
    if (!task) {
        const error = new Error("Task not found");
        error.status = 404;
        return next(error);
    }

    response.status(200).json({ task });
}

// Create a new task
exports.createTask = (request, response) => {
    const { title, completed = false } = request.body;

    // create new task
    const newTask = {
        id: uuidv4(),
        title,
        completed: Boolean(completed),
        createdAt: new Date().toISOString()
    };

    tasks.push(newTask);
    response.status(201).json({ message: "Task created successfully", created_task: newTask });
}

// Update an existing task by id
exports.updateTask = (request, response, next) => {
    const { id } = request.params;
    const { title, completed } = request.body;

    // find task index
    const index = findIndex(id);

    // if task does not exist
    if (index === -1) {
        const error = new Error("Task not found");
        error.status = 404;
        return next(error);
    }

    // only allow updating title and completed fields
    if (typeof title !== 'undefined') tasks[index].title = title;
    if (typeof completed !== 'undefined') tasks[index].completed = Boolean(completed);

    response.status(200).json({message: "Task updated successfully", updated_task: tasks[index]});
}

// Delete a task by id
exports.deleteTask = (request, response, next) => {
    const { id } = request.params;
    const index = findIndex(id);

    // if task does not exist
    if (index === -1) {
        const error = new Error("Task not found");
        error.status = 404;
        return next(error);
    }

    const deletedTask = tasks.splice(index, 1)[0];
    response.status(200).json({ message: "Task deleted successfully", deleted_task: deletedTask });
}