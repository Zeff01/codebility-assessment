const todos = require("../data/todos");

// Get all todos
const getAllTodos = (request, response) => {
    response.json(todos);
}

// GET specific todo
const getTodoById = (request, response) => {
    const todo = todos.find(t=> t.id === request.params.id);

    if (!todo){
        return response.status(404).json({ message: "Todo not found"});
    }
    response.json(todo);
};

// CREATE todo
const createTodo = (request, response) => {
    const { title } = request.body;

    if (!title){
        return response.status(400).json({ message: "Title is required"});
    }

    const newTodo = {
        id: Date.now().toString(),
        title,
        completed: false,
        createdAt: new Date().toISOString()
    }

    todos.push(newTodo);
    response.status(201).json(newTodo);
};

// UPDATE todo
const updateTodo = (request, response) =>{
    const todo = todos.find(t => t.id === request.params.id);

    if (!todo){
        return response.status(404).json({ message: "Todo not found"});
    }

    const {title, completed} = request.body;

    if (title !== undefined){
        todo.title = title;
    }

    if (completed !== undefined){
        todo.completed = completed;
    }

    response.json(todo)
};

// DELETE todo
const deleteTodo = (request, response) => {
    const index = todos.findIndex(t => t.id === request.params.id);

    if (index === -1){
        return response.status(404).json({ message: "Todo not found"});
    }

    const deleted = todos.splice(index,1);

    response.json(deleted[0]);
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
}





