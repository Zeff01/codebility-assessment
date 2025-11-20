// In Memory Data Storage Sample data
let todos = [
  {
    id: 1,
    title: 'Node.js is the best',
    completed: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Build REST API is fun',
    completed: true,
    createdAt: new Date(Date.now() - 86400000).toISOString()
  }
];
let currentId = 3;

// Utility functions
const findTodoById = (id) => {
  const todoId = parseInt(id);
  if (isNaN(todoId)) return null;
  return todos.find(todo => todo.id === todoId);
};

const validateTodoData = (data, isUpdate = false) => {
  const errors = [];

  if (!isUpdate && (!data.title || data.title.trim() === '')) {
    errors.push('Title is required');
  }

  if (data.title && data.title.length > 255) {
    errors.push('Title must be less than 255 characters');
  }

  if (data.completed !== undefined && typeof data.completed !== 'boolean') {
    errors.push('Completed must be a boolean value');
  }

  return errors;
};

// Controller functions
const getAllTodos = (req, res) => {
  try {
    const { completed } = req.query;
    let filteredTodos = [...todos];

    if (completed !== undefined) {
      const isCompleted = completed === 'true';
      filteredTodos = filteredTodos.filter(todo => todo.completed === isCompleted);
    }

    res.json({
      success: true,
      data: filteredTodos,
      total: filteredTodos.length
    });
  } catch (error) {
    console.error('Error in GET /api/todos:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// GET by ID
const getTodoById = (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(parseInt(id))) {
      return res.status(400).json({
        success: false,
        error: 'Invalid todo ID'
      });
    }

    // FIND
    const todo = findTodoById(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        error: `Todo with ID ${id} not found`
      });
    }

    res.json({
      success: true,
      data: todo
    });
  } catch (error) {
    console.error('Error in GET /api/todos/:id:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// CREATE 
const createTodo = (req, res) => {
  try {
    const { title, completed = false } = req.body;

    const errors = validateTodoData({ title, completed });
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors
      });
    }

    const newTodo = {
      id: currentId++,
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
  } catch (error) {
    console.error('Error in POST /api/todos:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// UPDATE
const updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    if (isNaN(parseInt(id))) {
      return res.status(400).json({
        success: false,
        error: 'Invalid todo ID'
      });
    }

    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex === -1) {
      return res.status(404).json({
        success: false,
        error: `Todo with ID ${id} not found`
      });
    }

    const errors = validateTodoData({ title, completed }, true);
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors
      });
    }

    const updatedTodo = {
      ...todos[todoIndex],
      ...(title !== undefined && { title: title.trim() }),
      ...(completed !== undefined && { completed: Boolean(completed) })
    };

    todos[todoIndex] = updatedTodo;

    res.json({
      success: true,
      data: updatedTodo,
      message: 'Todo updated successfully'
    });
  } catch (error) {
    console.error('Error in PUT /api/todos/:id:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// DELETE
const deleteTodo = (req, res) => {
  try {
    const { id } = req.params;

    if (isNaN(parseInt(id))) {
      return res.status(400).json({
        success: false,
        error: 'Invalid todo ID'
      });
    }

    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));

    if (todoIndex === -1) {
      return res.status(404).json({
        success: false,
        error: `Todo with ID ${id} not found`
      });
    }

    const deletedTodo = todos.splice(todoIndex, 1)[0];

    res.json({
      success: true,
      data: deletedTodo,
      message: 'Todo deleted successfully'
    });
  } catch (error) {
    console.error('Error in DELETE /api/todos/:id:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// Export controller functions
module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
};