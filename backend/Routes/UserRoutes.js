import express from 'express'

import { createTask, getAllTask, getTaskById, updateTask, deleteTask } from '../Controller/todolistController.js';

const route = express.Router();

// Add New Task
route.post('/', createTask)

// Show all task
route.get('/tasks', getAllTask)

// Get task by id
route.get('/task/:id', getTaskById)

// Update task
route.put('/task/update/:id', updateTask)

// Delete task
route.delete('task/delete/:id', deleteTask)

export default route