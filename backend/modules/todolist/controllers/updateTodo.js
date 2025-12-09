const data = require('../../../data/data');
const { z } =  require('zod');

const updateTodoListSchema = z.object({
  completed: z.boolean(),
  title: z.string().min(1, "Title cannot be empty")
});


const updateTodoList = (req, res) => {
  const { id } = req.params;
  const todoItem = data.find(item => item.id === parseInt(id));
  if (!todoItem) throw new Error("Todo item not found");
  const { title, completed } = req.validated;

  // check if the title is not define and completed is not define
  if (title !== undefined) todoItem.title = title;
  if (completed !== undefined) todoItem.completed = completed;

  res.status(200).json({
    "status": "success",
    "message": "Todo item updated successfully",
    "data": todoItem
  });
};

module.exports = {updateTodoList,updateTodoListSchema};