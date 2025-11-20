const express = require("express");

// Joi for input validation
const Joi = require("joi");

const app = express();

// Allow express to parse JSON into JavaScript objects
app.use(express.json()); 
const PORT = process.env.PORT || 4000;

// camelCase naming convention for JavaScript variables
// snake_case for database fields

// Locally stored data in memory
let task_list = [];

// Simple global counter for task IDs
// Simple for testing, otherwise use UUIDs or database-generated IDs for unique identification
let taskIdCounter = 1;


// API Routes



// Basic route
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

// Retrieve all tasks
app.get("/api/todos", (req, res) => {

  // Send all tasks that exist
  res.send(task_list);
});

// Retrieve single task by ID
app.get("/api/todos/:id", (req, res) => {

  // Find task from local list by ID
  const task = findTaskById(req.params.id);

  // If task doesn't exist, terminate the request with 404
  if (!task) return res.status(404).send("Task not found");
  
  
  // Return the found task otherwise
  res.send(task);
});

// Create a new task
app.post("/api/todos", (req, res) => {

  // First validate the input
  // Error and terminate request if invalid
  const { error } = taskValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  

  // Create the new task object if no error found
  const task = {
  id: taskIdCounter,
  title: req.body.title,
  completed: false,
  createdAt:  new Date().toISOString()
  }

  // Update the ID counter for next task
  taskIdCounter++;

  // Add the new task to the list
  task_list.push(task);

  // Return the newly created task
  res.send(task);

});

// Update an existing task
app.put("/api/todos/:id", (req, res) => {
  // Find task from local list by ID
  const task = findTaskById(req.params.id);

  // If task doesn't exist, terminate the request with 404
  if (!task) return res.status(404).send("Task not found");
  

  // If task exists, validate incoming changes
  const data = req.body;
  const { error } = taskValidation(data);
  if (error) return res.status(400).send(error.details[0].message);
  

  // If no errors, update the task properties
  Object.assign(task, data);

  res.json({ message: "Task updated", task });
});

// Delete a task
app.delete("/api/todos/:id", (req, res) => {

  // Find task from local list by ID
  const task = findTaskById(req.params.id);

  // If task doesn't exist, terminate the request with 404
  if (!task) return res.status(404).send("Task not found");

  // Remove the task from the list
  const index = task_list.indexOf(task);
  task_list.splice(index, 1);

  // Return confirmation message and deleted task
  res.json({ message: "Task deleted", task });
  
});


// Function Shorthands


function taskValidation(task) {
  
  // Define paramters and rules for validation
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    completed: Joi.boolean().default(false)
  })

  // Validate based on schema and return result or error
  return schema.validate(task);
}

function findTaskById(id) {
  // cleaner code with ID variable
  const taskId = parseInt(id);

  // Find task from local list by ID
  // Checks all elements in list until a match is found
  const task = task_list.find(t => t.id === taskId);

  return task;
  
}



// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
});
