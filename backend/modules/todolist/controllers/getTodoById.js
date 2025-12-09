const data = require('../../../data/data');

const getTodoByIdList = (req, res) => {
  const { id } = req.params;
  const todoItem = data.find(item => item.id === parseInt(id));
  if (!todoItem) throw new Error("Todo item not found");

  res.status(200).json({
    "status": "success",
    "data": todoItem
  });
};

module.exports = getTodoByIdList;