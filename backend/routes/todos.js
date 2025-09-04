import express from 'express';
import * as todoService from '../services/todoService.js';

const router = express.Router();

// GET /api/todos
router.get('/', (req, res) => {
  res.json(todoService.getAll());
});

// GET /api/todos/:id
router.get('/:id', (req, res) => {
  //Stick to Number (ID)
  const id = Number(req.params.id);

  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  const todo = todoService.getById(id);

  if (!todo) return res.status(404).json({ error: 'Todo not found' });

  res.json(todo);
});

// POST /api/todos
router.post('/', (req, res) => {
  const { title, completed } = req.body;
  if (!title || typeof title !== 'string') {
    return res.status(400).json({ error: 'Title(string) is required' });
  }

  const newTodo = todoService.create({ title, completed });
  res.status(201).json(newTodo);
});

// PUT /api/todos/:id
router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid ID' });

  const { title, completed } = req.body;
  if (title !== undefined && typeof title !== 'string')
    return res.status(400).json({ error: 'Title must be a string' });
  if (completed !== undefined && typeof completed !== 'boolean')
    return res.status(400).json({ error: 'Completed must be boolean' });

  const updated = todoService.update(id, { title, completed });
  if (!updated) return res.status(404).json({ error: 'Todo not found' });

  res.json(updated);
});

// DELETE /api/todos/:id
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });

  const removed = todoService.remove(id);
  if (!removed) return res.status(404).json({ error: 'Todo not found' });

  res.status(200).json({ message: 'Deleted' });
});

export default router;
