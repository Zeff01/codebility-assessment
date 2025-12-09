const data = require('../../../data/data');

const queryTodoList = (req, res) => {
  res.status(200).json({
    "status": "success",
    "data": data
  });
};

module.exports = queryTodoList;