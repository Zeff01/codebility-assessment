// In-memory storage for todos
let todos = [];
let nextId = 1;

// Helper function to find todo by id
const findTodoById = (id) => {
    return todos.find(todo => todo.id === parseInt(id));
};

// Get all todos
export const getAllTodos = (req, res) => {
    res.json({
        success: true,
        data: todos,
        count: todos.length
    });
};

// Get a single todo by ID
export const getTodoById = (req, res) => {
    const { id } = req.params;

    // Validate ID format
    if (isNaN(id)) {
        return res.status(400).json({
            error: 'Invalid ID format. ID must be a number.'
        });
    }

    const todo = findTodoById(id);

    if (!todo) {
        return res.status(404).json({
            error: 'Todo not found'
        });
    }

    res.json({
        success: true,
        data: todo
    });
};

// Create a new todo
export const createTodo = (req, res) => {
    const { title, completed = false } = req.body;

    // Validate completed field if provided
    if (completed !== undefined && typeof completed !== 'boolean') {
        return res.status(400).json({
            error: 'Completed field must be a boolean'
        });
    }

    const newTodo = {
        id: nextId++,
        title: title.trim(),
        completed: Boolean(completed),
        createdAt: new Date().toISOString()
    };

    todos.push(newTodo);

    res.status(201).json({
        success: true,
        data: newTodo,
        message: 'Todo created successfully'
    });
};

// Update a todo
export const updateTodo = (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    // Validate ID format
    if (isNaN(id)) {
        return res.status(400).json({
            error: 'Invalid ID format. ID must be a number.'
        });
    }

    const todo = findTodoById(id);

    if (!todo) {
        return res.status(404).json({
            error: 'Todo not found'
        });
    }

    // Validate title if provided
    if (title !== undefined) {
        if (typeof title !== 'string' || title.trim() === '') {
            return res.status(400).json({
                error: 'Title must be a non-empty string'
            });
        }
        todo.title = title.trim();
    }

    // Validate completed if provided
    if (completed !== undefined) {
        if (typeof completed !== 'boolean') {
            return res.status(400).json({
                error: 'Completed field must be a boolean'
            });
        }
        todo.completed = completed;
    }

    res.json({
        success: true,
        data: todo,
        message: 'Todo updated successfully'
    });
};

// Delete a todo
export const deleteTodo = (req, res) => {
    const { id } = req.params;

    // Validate ID format
    if (isNaN(id)) {
        return res.status(400).json({
            error: 'Invalid ID format. ID must be a number.'
        });
    }

    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));

    if (todoIndex === -1) {
        return res.status(404).json({
            error: 'Todo not found'
        });
    }

    const deletedTodo = todos.splice(todoIndex, 1)[0];

    res.json({
        success: true,
        data: deletedTodo,
        message: 'Todo deleted successfully'
    });
};
