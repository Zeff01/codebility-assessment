const TodoModel = require("../model/todo");
const { validateCreate, validateUpdate } = require("../validation/todo");

// function for collecting data then convert into json
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.on("data", (chunk) => (raw += chunk));
    req.on("end", () => {
      try { 
        resolve(raw ? JSON.parse(raw) : {}); 
        }
      catch { 
        reject({ 
            status: 400, 
            message: "Invalid JSON" 
        }); 
        }
    });
  });
}
// helper to send json responses back to client
function send(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, { 
    "Content-Type": "application/json" 
    });
  res.end(body);
}

const TodoController = {
// get all data
  getAll(req, res) {
    // response json
    send(res, 200, { 
        success: true, 
        data: TodoModel.findAll() 
    });
  },
// get single data
  getOne(req, res, id) {
    const todo = TodoModel.findById(id);
    // if no todo then return
    if (!todo) return send(res, 404, { 
        success: false, 
        error: `Todo ${id} not found` 
    });
    // successfull json
    send(res, 200, { 
        success: true, 
        data: todo });
  },
// create a todo
  async create(req, res) {
    // get the parse json
    const body = await parseBody(req);
    // get the validation for create
    const errors = validateCreate(body);

    // check if has error
    if (errors.length) return send(res, 400, { 
        success: false, 
        errors 
    });

    // if success then create
    const todo = TodoModel.create(body);
    send(res, 201, { 
        success: true, 
        data: todo 
    });
  },
// update a todo
  async update(req, res, id) {
    const body = await parseBody(req);
    const errors = validateUpdate(body);
    // check if has any error
    if (errors.length) return send(res, 400, { 
        success: false, 
        errors 
    });
    // if no id found
    const todo = TodoModel.update(id, body);
    if (!todo) return send(res, 404, { 
        success: false, 
        error: `Todo ${id} not found` 
    });
    // if success then update
    send(res, 200, { 
        success: true, 
        data: todo 
    });
  },

// delete a todo
  delete(req, res, id) {
    const deleted = TodoModel.delete(id);
    // if no id found
    if (!deleted) return send(res, 404, { 
        success: false, 
        error: `Todo ${id} not found` 
    });
    // if success then delete
    send(res, 200, { 
        success: true, 
        message: `Todo ${id} deleted` 
    });
  },
};
// export to use 
module.exports = TodoController;