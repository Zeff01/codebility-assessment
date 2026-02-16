const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const weatherRoutes = require('./routes/weatherRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Log all requests in development
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  });
}

// Health check endpoint (public)
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API info endpoint (public)
app.get('/api', (req, res) => {
  res.status(200).json({
    name: 'Backend API with Authentication',
    version: '1.0.0',
    endpoints: {
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login'
      },
      weather: {
        getWeather: 'GET /api/weather?city={cityName} (Protected)'
      },
      public: {
        health: 'GET /health',
        info: 'GET /api'
      }
    }
  });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/weather', weatherRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(err.status || 500).json({ 
    error: err.message || 'Something went wrong!',
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
});

module.exports = app;