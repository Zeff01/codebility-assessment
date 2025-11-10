const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');

// CRUD routes
router.get('/', todoController.getAll);
router.get('/:id', todoController.getById);
router.post('/', todoController.create);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.delete);

module.exports = router; 
