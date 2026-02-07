import taskModel from "../models/taskModel.js";

const todos = [];

const findIndexById = (id) => todos.findIndex((todo) => todo.id === id);

const taskRepository = {
    getAllTasks: async () => [...todos],
    getTaskById: async (id) => todos.find((todo) => todo.id === id) || null,
    createTask: async (data) => {
        const todo = taskModel.createTask(data);
        todos.push(todo);
        return todo;
    },
    updateTask: async (id, data) => {
        const index = findIndexById(id);
        if (index === -1) return null;
        const allowed = ["title", "completed"];
        const updates = Object.fromEntries(
            allowed.filter((k) => data[k] !== undefined).map((k) => [k, data[k]])
        );
        todos[index] = { ...todos[index], ...updates, id: todos[index].id };
        return todos[index];
    },
    deleteTask: async (id) => {
        const index = findIndexById(id);
        if (index === -1) return null;
        return todos.splice(index, 1)[0];
    },
};

export default taskRepository;
