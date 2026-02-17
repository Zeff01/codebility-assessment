const TodoController = require("../controller/todo");

const TODO_LIST = /^\/api\/todos$/;
const TODO_ITEM = /^\/api\/todos\/(\d+)$/;

async function todoRouter(req, res) {
  const method = req.method;
  const url = req.url.split("?")[0];
  const itemMatch = TODO_ITEM.exec(url);
  const id = itemMatch ? parseInt(itemMatch[1]) : null;

  // Collection: if url is equals to /api/todos
  if (TODO_LIST.test(url)) {
    if (method === "GET") return TodoController.getAll(req, res);
    if (method === "POST") return TodoController.create(req, res);
  }

  // Item: if url is equals to /api/todos/:id
  if (itemMatch) {
    if (method === "GET") return TodoController.getOne(req, res, id);
    if (method === "PUT") return TodoController.update(req, res, id);
    if (method === "DELETE") return TodoController.delete(req, res, id);
  }

  return null; // no match
}
// exports
module.exports = todoRouter;