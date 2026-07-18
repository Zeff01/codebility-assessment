// In-memory storage
let todos = [];
let currentId = 1;

// Get all todos
const getAllTodos = (req, res) => {
    res.json({
        success: true,
        data: todos,
        count: todos.length
    });
};

// Get single todo by ID
const getTodoById = (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({
            success: false,
            error: 'Todo not found'
        });
    }

    res.json({
        success: true,
        data: todo
    });
};

// Create a new todo
const createTodo = (req, res) => {
    const { title } = req.body;

    // Title is required
    if (!title || title.trim() === '') {
        return res.status(400).json({
            success: false,
            error: 'Title is required'
        });
    }

    const newTodo = {
        id: currentId++,
        title: title.trim(),
        completed: false,
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
const updateTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;
    
    const todoIndex = todos.findIndex(t => t.id === id);

    if (todoIndex === -1) {
        return res.status(404).json({
            success: false,
            error: 'Todo not found'
        });
    }

    // Update title if provided
    if (title !== undefined) {
        if (title.trim() === '') {
            return res.status(400).json({
                success: false,
                error: 'Title cannot be empty'
            });
        }
        todos[todoIndex].title = title.trim();
    }

    // Update completed status if provided
    if (completed !== undefined) {
        if (typeof completed !== 'boolean') {
            return res.status(400).json({
                success: false,
                error: 'Completed must be true or false'
            });
        }
        todos[todoIndex].completed = completed;
    }

    res.json({
        success: true,
        data: todos[todoIndex],
        message: 'Todo updated successfully'
    });
};

// Delete a todo
const deleteTodo = (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === id);

    if (todoIndex === -1) {
        return res.status(404).json({
            success: false,
            error: 'Todo not found'
        });
    }

    todos.splice(todoIndex, 1);

    res.json({
        success: true,
        message: 'Todo deleted successfully'
    });
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};