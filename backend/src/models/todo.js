const { v4: uuidv4 } = require("uuid");

class TodoModel {
  constructor() {
    this.memoryStore = {};
  }

  // Create or update a todo
  setTodo(id, title, completed = false) {
    const existingTodo = this.memoryStore[id];

    if (existingTodo) {
      // If the todo exists, update it
      existingTodo.title = title;
      existingTodo.completed = completed;
      return existingTodo;
    } else {
      // If the todo does not exist, create a new one
      const newTodo = { id: uuidv4(), title, completed, createdAt: new Date() };
      this.memoryStore[newTodo.id] = newTodo;
      return newTodo;
    }
  }

  // Get a todo by ID
  getTodo(id) {
    return this.memoryStore[id];
  }

  // Get all todos
  getAllTodos() {
    return Object.values(this.memoryStore);
  }

  // Update a todo
  updateTodo(id, title, completed) {
    if (this.memoryStore[id]) {
      this.memoryStore[id].title = title;
      this.memoryStore[id].completed = completed;
      // Optionally, you can keep the `createdAt` value unchanged or update it here as well
    } else {
      throw new Error(`Todo with ID ${id} not found.`);
    }
  }

  // Delete a todo
  deleteTodo(id) {
    if (this.memoryStore[id]) {
      delete this.memoryStore[id];
    } else {
      throw new Error(`Todo with ID ${id} not found.`);
    }
  }
}

module.exports = new TodoModel();
