require('dotenv').config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 4000;

// JWT Secret from environment variable
const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-for-development";

// In-memory storage
const users = [];

// Middleware
app.use(express.json());

// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user;
    next();
  });
};

// Input validation middleware
const validateRegistration = (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }
  
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  
  next();
};

// Basic route
app.get("/", (req, res) => {
  res.json({ 
    message: "Backend API with Authentication", 
    version: "1.0.0",
    endpoints: {
      auth: {
        register: "POST /api/auth/register",
        login: "POST /api/auth/login"
      },
      protected: {
        weather: "GET /api/weather?city=CityName"
      }
    }
  });
});

// Auth routes
app.post("/api/auth/register", validateRegistration, async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    
    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Create user
    const user = {
      id: users.length + 1,
      email,
      password: hashedPassword,
      createdAt: new Date().toISOString()
    };
    
    users.push(user);
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email }, 
      JWT_SECRET, 
      { expiresIn: '24h' }
    );
    
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    
    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email }, 
      JWT_SECRET, 
      { expiresIn: '24h' }
    );
    
    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Protected weather route
app.get("/api/weather", authenticateToken, async (req, res) => {
  try {
    const { city } = req.query;
    
    if (!city) {
      return res.status(400).json({ error: 'City parameter is required' });
    }
    
    // Get API key from environment variable
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather`;
    
    // Check if API key is configured
    if (!API_KEY) {
      return res.status(500).json({ 
        error: 'Weather service not configured',
        message: 'OpenWeatherMap API key not found in environment variables'
      });
    }
    
    try {
      const response = await axios.get(WEATHER_API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      });
      // Format the real weather data from OpenWeatherMap API
      const weatherData = {
        city: response.data.name,
        country: response.data.sys.country,
        temperature: response.data.main.temp,
        feelsLike: response.data.main.feels_like,
        description: response.data.weather[0].description,
        weatherMain: response.data.weather[0].main,
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        windSpeed: response.data.wind.speed,
        windDirection: response.data.wind.deg,
        visibility: response.data.visibility,
        cloudiness: response.data.clouds.all,
        sunrise: new Date(response.data.sys.sunrise * 1000).toISOString(),
        sunset: new Date(response.data.sys.sunset * 1000).toISOString(),
        timestamp: new Date().toISOString(),
        source: "OpenWeatherMap API"
      };
      
      res.json({
        weather: weatherData,
        requestedBy: req.user.email
      });
      
    } catch (apiError) {
      console.error('Weather API error:', apiError.response?.data || apiError.message);
      
      // Handle specific OpenWeatherMap API errors
      if (apiError.response) {
        const status = apiError.response.status;
        const errorData = apiError.response.data;
        
        switch (status) {
          case 401:
            return res.status(502).json({ 
              error: 'Weather API authentication failed',
              message: 'Invalid API key'
            });
          case 404:
            return res.status(404).json({ 
              error: 'City not found',
              message: `City "${city}" not found. Please check the spelling and try again.`
            });
          case 429:
            return res.status(429).json({ 
              error: 'API rate limit exceeded',
              message: 'Too many requests. Please try again later.'
            });
          default:
            return res.status(502).json({ 
              error: 'Weather API error',
              message: errorData?.message || 'Failed to fetch weather data'
            });
        }
      }
      
      // Network or other errors
      res.status(502).json({ 
        error: 'Failed to fetch weather data',
        message: 'Weather service temporarily unavailable'
      });
    }
    
  } catch (error) {
    console.error('Weather route error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Additional protected route - Get current user info
app.get("/api/auth/me", authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json({
    user: {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running on http://localhost:${PORT}`);
  console.log('Available endpoints:');
  console.log('  GET  / - API info');
  console.log('  POST /api/auth/register - User registration');
  console.log('  POST /api/auth/login - User login');
  console.log('  GET  /api/auth/me - Get current user (protected)');
  console.log('  GET  /api/weather?city=CityName - Get weather data (protected)');
});
