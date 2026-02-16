# Backend Assessment - Weather API with Authentication

A secure RESTful API built with Node.js and Express.js featuring user authentication (JWT) and weather data integration from OpenWeatherMap API.

## Features

- ✅ **User Authentication**: JWT-based registration and login system
- ✅ **Password Hashing**: Secure password storage using bcryptjs
- ✅ **Protected Routes**: Middleware-based authentication for sensitive endpoints
- ✅ **Weather Integration**: Real-time weather data from OpenWeatherMap API
- ✅ **Input Validation**: express-validator for request validation
- ✅ **SQLite Database**: Persistent user storage
- ✅ **Error Handling**: Comprehensive error responses
- ✅ **CORS Enabled**: Cross-origin resource sharing support

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js 4.22.1
- **Database**: SQLite3 5.1.7
- **Authentication**: jsonwebtoken 9.0.3, bcryptjs 3.0.3
- **HTTP Client**: axios 1.13.5
- **Validation**: express-validator 7.3.1
- **Environment**: dotenv 16.4.7

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js           # SQLite database configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   └── weatherController.js  # Weather API integration
│   ├── middleware/
│   │   └── authMiddleware.js     # JWT verification middleware
│   ├── routes/
│   │   ├── authRoutes.js         # Authentication endpoints
│   │   └── weatherRoutes.js      # Weather endpoints
│   └── app.js                    # Express app configuration
├── server.js                     # Server entry point
├── test-api.js                   # Automated API testing suite
├── .env                          # Environment variables
├── package.json                  # Dependencies and scripts
├── database.db                   # SQLite database (created on first run)
└── README.md                     # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository** (if not already done):
   ```bash
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Variables**:
   The `.env` file is already configured with:
   ```env
   PORT=3000
   JWT_SECRET=super_secret_secure_key_12345
   WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather
   WEATHER_API_KEY=948aa4f9d6a13b516e8e02980a574b11
   ```

4. **Start the server**:
   ```bash
   # Development mode (with nodemon)
   npm run dev

   # Production mode
   npm start
   ```

5. **Test the API**:
   ```bash
   npm test
   ```

The server will start at `http://localhost:3000`

## API Documentation

### Public Endpoints

#### Health Check
```http
GET /health
```
Returns the health status of the API.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456
}
```

#### API Information
```http
GET /api
```
Returns information about the API and available endpoints.

**Response:**
```json
{
  "name": "Weather API with Authentication",
  "version": "1.0.0",
  "description": "Backend assessment API with JWT authentication and weather data",
  "endpoints": {
    "auth": {
      "register": "POST /api/auth/register",
      "login": "POST /api/auth/login",
      "profile": "GET /api/auth/profile (protected)"
    },
    "weather": {
      "byCity": "GET /api/weather?city={cityName} (protected)",
      "byCoordinates": "GET /api/weather/coordinates?lat={lat}&lon={lon} (protected)"
    }
  }
}
```

### Authentication Endpoints

#### Register
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "username": "johndoe",
  "password": "password123"
}
```

**Validation Rules:**
- Username: minimum 3 characters
- Password: minimum 6 characters

**Success Response (201):**
```json
{
  "message": "User registered successfully",
  "auth": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "johndoe"
  }
}
```

**Error Response (409):**
```json
{
  "error": "Username already exists"
}
```

#### Login
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "username": "johndoe",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "message": "Login successful",
  "auth": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "johndoe"
  }
}
```

**Error Response (404):**
```json
{
  "error": "User not found"
}
```

**Error Response (401):**
```json
{
  "auth": false,
  "token": null,
  "error": "Invalid password"
}
```

#### Get User Profile (Protected)
```http
GET /api/auth/profile
```

**Headers:**
```
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "user": {
    "id": 1,
    "username": "johndoe",
    "created_at": "2024-01-01 00:00:00"
  }
}
```

**Error Response (403):**
```json
{
  "message": "A token is required for authentication"
}
```

**Error Response (401):**
```json
{
  "message": "Invalid Token"
}
```

### Weather Endpoints (Protected)

All weather endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

#### Get Weather by City
```http
GET /api/weather?city=London
```

**Query Parameters:**
- `city` (required): City name (e.g., "London", "New York", "Tokyo")

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "city": "London",
    "country": "GB",
    "coordinates": {
      "lat": 51.5074,
      "lon": -0.1278
    },
    "weather": {
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    },
    "temperature": {
      "current": 15.5,
      "feels_like": 14.8,
      "min": 13.2,
      "max": 17.1
    },
    "humidity": 72,
    "pressure": 1013,
    "wind": {
      "speed": 5.14,
      "direction": 250
    },
    "clouds": 75,
    "visibility": 10000,
    "timestamp": "2024-01-01T00:00:00.000Z"
  }
}
```

**Error Response (400):**
```json
{
  "error": "City parameter is required",
  "usage": "GET /api/weather?city={cityName}"
}
```

**Error Response (404):**
```json
{
  "error": "City \"InvalidCity\" not found",
  "suggestion": "Please check the city name and try again"
}
```

#### Get Weather by Coordinates
```http
GET /api/weather/coordinates?lat=51.5074&lon=-0.1278
```

**Query Parameters:**
- `lat` (required): Latitude
- `lon` (required): Longitude

**Success Response (200):**
Same format as "Get Weather by City"

**Error Response (400):**
```json
{
  "error": "Latitude and longitude parameters are required",
  "usage": "GET /api/weather/coordinates?lat={latitude}&lon={longitude}"
}
```

## Testing

The project includes a comprehensive automated testing suite (`test-api.js`).

### Run Tests

1. **Start the server** (in one terminal):
   ```bash
   npm run dev
   ```

2. **Run tests** (in another terminal):
   ```bash
   npm test
   ```

### Test Coverage

The test suite includes 14 tests covering:
- ✅ Health check endpoint
- ✅ API information endpoint
- ✅ User registration (valid and invalid)
- ✅ User login (valid and invalid)
- ✅ Protected profile endpoint (with and without token)
- ✅ Weather by city (with/without token, valid/invalid city)
- ✅ Weather by coordinates
- ✅ 404 error handling

**Sample Output:**
```
╔═══════════════════════════════════════════╗
║   Backend API Testing Suite              ║
╚═══════════════════════════════════════════╝

=== Health Check ===

✓ PASS GET /health
  Status: OK

=== API Information ===

✓ PASS GET /api
  API Name: Weather API with Authentication
  Version: 1.0.0

...

=== Test Summary ===

Passed: 14
Failed: 0
Total: 14

✓ All tests passed!
```

## Manual Testing with cURL

### Register a new user:
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass123"}'
```

### Login:
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","password":"testpass123"}'
```

### Get user profile:
```bash
curl http://localhost:3000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Get weather data:
```bash
curl "http://localhost:3000/api/weather?city=London" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Get weather by coordinates:
```bash
curl "http://localhost:3000/api/weather/coordinates?lat=51.5074&lon=-0.1278" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
```

## Security Features

- **Password Hashing**: All passwords are hashed using bcryptjs with 10 salt rounds
- **JWT Tokens**: Tokens expire after 24 hours
- **Protected Routes**: Authentication middleware verifies tokens before accessing sensitive data
- **Input Validation**: All inputs are validated and sanitized
- **Error Handling**: Sensitive information is not exposed in error messages

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `JWT_SECRET` | Secret key for JWT signing | (set in .env) |
| `WEATHER_API_URL` | OpenWeatherMap API endpoint | https://api.openweathermap.org/data/2.5/weather |
| `WEATHER_API_KEY` | OpenWeatherMap API key | (set in .env) |

## Error Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request (validation error) |
| 401 | Unauthorized (invalid credentials) |
| 403 | Forbidden (no token provided) |
| 404 | Not Found |
| 409 | Conflict (resource already exists) |
| 500 | Internal Server Error |
| 504 | Gateway Timeout |

## Development

### Available Scripts

- `npm start` - Start the server in production mode
- `npm run dev` - Start the server with nodemon (auto-restart on changes)
- `npm test` - Run the automated test suite

### Adding New Endpoints

1. Create controller in `src/controllers/`
2. Create route in `src/routes/`
3. Register route in `src/app.js`
4. Add tests in `test-api.js`

## Troubleshooting

### Server won't start
- Ensure port 3000 is not in use: `netstat -ano | findstr :3000`
- Check that all dependencies are installed: `npm install`

### Database errors
- Delete `database.db` and restart the server to recreate the database

### Weather API errors
- Verify the API key is valid in `.env`
- Check internet connection
- Ensure city name is spelled correctly

### Token errors
- Verify token is included in Authorization header as: `Bearer <token>`
- Check that token hasn't expired (24h validity)

## Assessment Requirements Checklist

- ✅ Node.js and Express.js implementation
- ✅ User registration endpoint with validation
- ✅ User login endpoint with JWT token generation
- ✅ Password hashing (bcryptjs)
- ✅ Protected weather endpoint requiring authentication
- ✅ OpenWeatherMap API integration
- ✅ Proper error handling and validation
- ✅ SQLite database for user storage
- ✅ Public and protected routes
- ✅ Middleware for authentication
- ✅ Comprehensive testing suite
- ✅ Documentation

## License

This project is created for assessment purposes.

## Author

Joshua - Codebility Assessment (3-5 Years Experience Level)

---

**Note**: This is an assessment project demonstrating backend development skills including API design, authentication, database integration, and external API consumption.
