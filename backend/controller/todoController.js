const TodoModel = require('../models/todoModel');
// Helper for validation
const validateTodoInput = (title, completed) => {
    if (!title || typeof title !== 'string') {
        return 'Title is required and must be a string.';
    }
    if (completed !== undefined && typeof completed !== 'boolean') {
        return 'Completed must be a boolean.';
    }
    return null;
};

const todoController = {
    // GET /api/todos
    getAll(req, res) {
        const todos = TodoModel.findAll();
        res.json(todos);
    },

    // GET /api/todos/:id
    getById(req, res) {
        const id = parseInt(req.params.id);
        const todo = TodoModel.findById(id);

        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.json(todo);
    },

    // POST /api/todos
    create(req, res) {
        const { title, completed } = req.body;

        const validationError = validateTodoInput(title, completed);
        if (validationError) {
            return res.status(400).json({ error: validationError });
        }

        const newTodo = TodoModel.create({ title, completed });
        res.status(201).json(newTodo);
    },

    // PUT /api/todos/:id
    update(req, res) {
        const id = parseInt(req.params.id);
        const { title, completed } = req.body;

        const todo = TodoModel.findById(id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        const validationError = validateTodoInput(
            title !== undefined ? title : 'valid',
            completed
        );
        if (validationError && title !== undefined) {
            return res.status(400).json({ error: validationError });
        }

        const updatedTodo = TodoModel.update(id, { title, completed });
        res.json(updatedTodo);
    },

    // DELETE /api/todos/:id
    delete(req, res) {
        const id = parseInt(req.params.id);
        const deleted = TodoModel.delete(id);

        if (!deleted) {
            return res.status(404).json({ error: 'Todo not found' });
        }

        res.status(204).send();
    },
};

module.exports = todoController;
