// local storage
let todos = [
  { 
    id: 1, 
    title: "Buy groceries", 
    completed: false, 
    createdAt: new Date().toISOString() 
  },
  { 
    id: 2, 
    title: "Read a book",   
    completed: true,  
    createdAt: new Date().toISOString() 
  },
];

let nextId = 3;

const TodoModel = {
// get all data
  findAll() {
    return todos;
  },
// get by id
  findById(id) {
    return todos.find((t) => t.id === id) || null;
  },
// create a todo
  create({ 
    title, 
    completed = false 
    }) {
    const todo = { id: nextId++, title: title.trim(), completed, createdAt: new Date().toISOString() };
    todos.push(todo);
    return todo;
  },
// update a todo
  update(id, fields) {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return null;
    if (fields.title !== undefined) todo.title = fields.title.trim();
    if (fields.completed !== undefined) todo.completed = fields.completed;
    return todo;
  },
// delete a todo
  delete(id) {
    const index = todos.findIndex((t) => t.id === id);
    if (index === -1) return false;
    todos.splice(index, 1);
    return true;
  },
};
// export
module.exports = TodoModel;