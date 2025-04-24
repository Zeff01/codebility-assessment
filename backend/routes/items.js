const Ajv = require("ajv");
const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

const ajv = new Ajv();

const TASKS_JSON = path.join(__dirname, "../tasks.json");
const dataFile = fs.readFileSync(TASKS_JSON, "utf-8");
const tasksData = JSON.parse(dataFile);

function writeFileSyncWrapper(file, data) {
  fs.writeFileSync(file, data, {
    encoding: "utf8",
    flag: "w",
  });
}

const taskSchema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 1 },
    title: { type: "string", minLength: 1 },

    completed: { type: "boolean" },
  },
};

router.get("/", (req, res) => {
  const { completed, sort } = req.query;
  try {
    const data = readDataFromFile();
    res.status(200).json(data);
  } catch (error) {
    console.log("Error in getTODOSfunction", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// POST create a new task
router.post("/", (req, res) => {

  const newTask = req.body;
  let tasksModified = JSON.parse(JSON.stringify(tasksData));
  let itemIds = tasksModified.tasks.map((item) => item.id);
  let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
  const validBody = ajv.validate(taskSchema, newTask);
  if (validBody) {
    newTask.id = newId;
    newTask.createdAt = new Date();
    tasksModified.tasks.push(newTask);
    writeFileSyncWrapper(TASKS_JSON, JSON.stringify(tasksModified));
    res.status(201).json(newTask);
  } else {
    res.status(400).json({ message: "Invalid task data" });
  }
});

// GET retrieve a single task by ID
router.get('/:id', (req, res) => {
    const taskId = req.params.id;
   
    let tasksModified = JSON.parse(JSON.stringify(tasksData));

    const task = tasksModified.tasks.find((task) => task.id === parseInt(req.params.id));
    //console.log('task', task.id);
    if(task) {
        res.status(200).json(task);
    } else {
        res.status(404).json({message: "Task not found"});
    }
});

// DELETE delete a task by ID
router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    const taskIndex = tasksData.tasks.findIndex((task) => task.id === parseInt(taskId));
    let tasksModified = JSON.parse(JSON.stringify(tasksData));
    if (taskIndex !== -1) {
        tasksModified.tasks.splice(taskIndex, 1);
        writeFileSyncWrapper(TASKS_JSON, JSON.stringify(tasksModified));
        res.status(200).json({message: "Task deleted"});
    } else 
    res.status(404).json({message: "Task not found"});
});

// PUT update an existing task by ID
router.put('/:id', (req,res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    let tasksModified = JSON.parse(JSON.stringify(tasksData));
    const valid = ajv.validate(taskSchema, updatedTask);
    if(valid) {
        const taskIndex = tasksModified.tasks.findIndex(
            (task) => task.id === parseInt(taskId)
        );
        if (taskIndex !== -1) {
            updatedTask.id = parseInt(taskId);
            updatedTask.createdAt = tasksModified.tasks[taskIndex].createdAt;
            tasksModified.tasks[taskIndex] = updatedTask;
            writeFileSyncWrapper(TASKS_JSON, JSON.stringify(tasksModified));
            res.status(200).json(updatedTask);
        } else {
            res.status(404).json({message: 'Task not found'});
        }
    } else {
        res.status(404).json({message: 'Invalid task data'});
    }

});

// Utility functions to read/write data from/to file
function readDataFromFile() {
    try {
      const data = fs.readFileSync(TASKS_JSON, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

module.exports = router;
