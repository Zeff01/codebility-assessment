const { v4: uuidv4 } = require("uuid");

let todos = [];
let todoId = () => uuidv4();

module.exports = {
  todos,
  todoId,
};
