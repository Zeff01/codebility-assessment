const { v4: uuidv4 } = require("uuid");
const validateTodo = require("../utils/validator");

let todos = [];

exports.getAll = () => {
    return todos;
};

exports.getById = (id) => {
    return todos.find(t => t.id === id);
};

exports.create = (data) => {
    const error = validateTodo(data, true);
    if (error) throw new Error(error);

    const todo = {
        id: uuidv4(),
        title: data.title,
        completed: data.completed ?? false,
        createdAt: new Date().toISOString()
    };

    todos.push(todo);
    return todo;
};

exports.update = (id, data) => {
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) return null;

    const error = validateTodo(data, false);
    if (error) throw new Error(error);

    todos[index] = {
        ...todos[index],
        title: data.title ?? todos[index].title,
        completed: data.completed ?? todos[index].completed
    };

    return todos[index];
};

exports.remove = (id) => {
    const index = todos.findIndex(t => t.id === id);
    if (index === -1) return null;

    return todos.splice(index, 1)[0];
};
