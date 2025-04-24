const express = require("express");
const router = express.Router();

const fs = require("fs");
const path = require("path");

//const ajv = new Ajv();

const TASKS_JSON = path.join(__dirname, "../tasks.json");
const dataFile = fs.readFileSync(TASKS_JSON, "utf-8");
const tasksData = JSON.parse(dataFile);

function writeFileSyncWrapper(file, data) {
  fs.writeFileSync(file, data, {
    encoding: "utf8",
    flag: "w",
  });
}

// const data = [
// {id: 1, title: 'Wash dishes', completed: false, createdOn: new Date() },
// {id: 2, title: 'Clean the room', completed: false, createdOn: new Date() },
// {id: 3, title: 'Brush my teeth', completed: false, createdOn: new Date() },
// {id: 4, title: 'Finish my homework', completed: false, createdOn: new Date() },
// {id: 5, title: 'Go to church', completed: false, createdOn: new Date() },
// ];

const taskSchema = {
  type: "object",
  properties: {
    id: { type: "string", minLength: 1 },
    title: { type: "string", minLength: 1 },

    completed: { type: "boolean" },
  },
  required: ["title", "completed"],
  additionalProperties: false,
};

router.get("/", (req, res) => {
  const { completed, sort } = req.query;
  console.log('completed', completed);
  console.log("sort", sort);
  try {
    let isCompleted =
      completed === undefined || completed.toLowerCase() === "false"
        ? false
        : true;
    let filteredTasks = tasksData;
    filteredTasks = filteredTasks.tasks.filter(
      (task) => task.completed === isCompleted
    );

    if (sort !== undefined) {
      filteredTasks.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }

    res.status(200).json(filteredTasks);
  } catch (error) {
    console.log("Error in getTODOSfunction", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
