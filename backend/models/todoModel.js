let todos = [];
let nextId = 1;

class TodoModel {
    static findAll() {
        return todos;
    }

    static findById(id) {
        return todos.find(todo => todo.id === id);
    }

    static create({ title, completed = false }) {
        const newTodo = {
            id: nextId++,
            title,
            completed,
            createdAt: new Date().toISOString(),
        };
        todos.push(newTodo);
        return newTodo;
    }

    static update(id, data) {
        const todo = todos.find(t => t.id === id);
        if (!todo) return null;

        if (data.title !== undefined) todo.title = data.title;
        if (data.completed !== undefined) todo.completed = data.completed;

        return todo;
    }

    static delete(id) {
        const index = todos.findIndex(t => t.id === id);
        if (index === -1) return false;
        todos.splice(index, 1);
        return true;
    }
}

module.exports = TodoModel; 
