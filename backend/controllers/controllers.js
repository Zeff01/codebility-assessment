const todos = require("../models/model");


//GET request for To-do Datas
exports.getTodos = (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error : " + error.message,
    });
  }
};

//Create New To-do Item
//Validating first if title is empty
//Create Recent time and date for createAt
//Check last item if existed create id from last item id incremeted by 1 if not not create id = 1
exports.createTodo = (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title shoud not be empty",
      });
    }

    const now = new Date();

    const newTodo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      title: title,
      completed: false,
      createdAt: now,
    };

    todos.push(newTodo);

    return res.status(200).json({
      success: true,
      message: "To-do succesfully added",
      created: newTodo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error : " + error.message,
    });
  }
};


//Search To-do Item By ID
//Check if ID is existing return error if not, return result if it exist.
exports.getTodoById = (req, res) => {
  try {
    const { id } = req.params;
    const todo = todos.find((todo) => todo.id === parseInt(id));

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: `To-do with ID ${id} not found!`,
      });
    }

    return res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error : " + error.message,
    });
  }
};


//Update Item Search by ID return Error if item did not exist
// return updated Item if successful

exports.updateTodo = (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;
    const todoID = parseInt(id);

    if (!id) {
      return res.status(400).json({
        success: false,
        message: `ID must not be empty`,
      });
    }

    const todo = todos.find((todo) => todo.id === todoID);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: `To-do with ID ${id} not found!`,
      });
    }

    if (title) {
      todo.title = title;
    }

    if (completed !== undefined && completed !== "") {
      todo.completed = completed;
    }

    return res.status(200).json({
      success: true,
      message: "To-do item successfuly updated",
      updated: todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error : " + error.message,
    });
  }
};

//Delete Item Search ID if existing, if not existing return error
//if existing get item and index (since I'm using objects list there is no utility function like in ORM's)
//I just spliced tto remove the data and show deleted data.

exports.deleteTodo = (req, res) => {
  try {
    const { id } = req.params;
    const todoID = parseInt(id);

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "ID should not be empty",
      });
    }

    const todo = todos.find((todo) => todo.id === todoID);
    const todoIndex = todos.find((todo) => todo.id === todoID);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: `To-do with ID ${id} not found!`,
      });
    }

    const deletedItem = todos.splice(todoIndex, 1);

    return res.status(200).json({
      success: true,
      message: "To-do item has been deleted!",
      deleted: deletedItem,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server Error : " + error.message,
    });
  }
};
