const data = require('../../../data/data');

const deleteTodoList = (req, res) => {
  const { id } = req.params;
  const todoItem = data.find(item => item.id === parseInt(id));
  if (!todoItem) throw new Error("Todo item not found");
  const index = data.indexOf(todoItem);
  data.splice(index, 1);

  res.status(200).json({
    "status": "success",
    "message": "Todo item deleted successfully",
    "data": todoItem
  });
};

module.exports = deleteTodoList;