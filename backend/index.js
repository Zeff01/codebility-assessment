// Module instead of common
import express from 'express';
import todosRouter from './routes/todos.js';

const app = express();
app.use(express.json());

// Mount todos routes
app.use('/api/todos', todosRouter);

// Basic 404 for Unknown Routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

//Basic Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => console.log(`Backend is running on http://localhost:${PORT}`));
