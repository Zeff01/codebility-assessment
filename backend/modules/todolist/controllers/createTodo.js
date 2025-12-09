const data = require('../../../data/data');
const { z } =  require('zod');

const createTodoListSchema = z.object({
  id: z.number(),
  title: z.string().min(1, "Title cannot be empty")
});

const createTodoList = (req, res) => {
  console.log(req.body);
  const {id,title} = req.validated;

  if(data.find(item => item.id === id)) {
    throw new Error("Todo item with this ID already exists");
  }

  let todoItem = {
    "id":id,
    "title":title,
    "completed":false,
    "createAt":new Date().toISOString()
  }
  data.push(todoItem)

  res.status(201).json({
    "status": "success",
    "message": "Todo item created successfully",
    "data": todoItem
  });
};

module.exports = {createTodoList, createTodoListSchema};