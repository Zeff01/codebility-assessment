import todos from "../data/todos.js";

const generateId = () => {
  let id;

  do {
    id = Math.random().toString(36).substring(2, 10);
  } while (todos.some((todo) => todo.id === id));

  return id;
};

export default generateId;
