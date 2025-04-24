const express = require('express');
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
      description: { type: "string", minLength: 1 },
      completed: { type: "boolean" },
      priority: { type: "string", enum: ["low", "medium", "high"] },
    },
    required: ["title", "description", "completed", "priority"],
    additionalProperties: false,
  };

router.get('/',(req, res) => {
    try {
        res.status(200).json(tasksData);
    } catch (error) {
        console.log("Error in getProducts function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
    
});

module.exports = router;