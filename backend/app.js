// app.js
const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const logRequest = require('./logs/logger');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(logRequest);

// Routes (all under /api)
app.use('/api', routes);

// 404 handler for unknown API routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' });
});

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
