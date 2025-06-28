import Task from "../Model/todolistModel.js";

// Create task Controller
export const createTask = async (req, res) => {
  try {
    const { task } = req.body;
    const tasks = await Task.create({ task });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ errorMessage: error.Message });
  }
};

// Get all task
export const getAllTask = async (req, res) => {
  try {
    const allTask = await Task.find();

    // Check if have existing task
    if (!allTask || allTask.length === 0) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json(allTask);
  } catch (error) {
    res.status(500).json({ errorMessage: error.Message });
  }
};

// Get task by ID
export const getTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const taskExist = await Task.findById(id);

    if (!taskExist) {
      return res.json(404).json({ message: "Data not exist" });
    }
    res.status(200).json(taskExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.Message });
  }
};

//Update task
export const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const taskExist = await Task.findById(id);

    if (!taskExist) {
      return res.status(404).json({ message: "Data not exist" });
    }

    // To update task
    const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ errorMessage: error.Message });
  }
};

// Delete task

export const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const taskExist = await Task.findById(id);
    if (!taskExist) {
      return res.status(404).json({ message: "Data not exist" });
    }

    //Delete Task
    const deletedTask = await Task.findByIdAndDelete(id);
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(500).json({ errorMessage: error.Message });
  }
};
