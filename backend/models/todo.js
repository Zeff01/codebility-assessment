let todos = [];
let nextId = 1;

function getAllTodos() {
    return todos;
}

function getTodoById(id) {
    return todos.find(t => t.id === id);
}

function createTodo(title) {
    const todo = { id: nextId++, title, completed: false, createdAt: new Date().toISOString() };
    todos.push(todo);
    return todo;
}

function updateTodo(id, data) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return null;
    if (data.title !== undefined) todo.title = data.title;
    if (data.completed !== undefined) todo.completed = data.completed;
    return todo;
}

function deleteTodo(id) {
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) return null;
    return todos.splice(index, 1)[0];
}

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};