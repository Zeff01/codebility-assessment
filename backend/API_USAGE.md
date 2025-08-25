# API Usage Guide

## Starting the Server

```bash
npm start
```

The server will run on `http://localhost:4000`

## API Endpoints

### 1. Get API Info
```
GET /
```

### 2. User Registration
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### 3. User Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### 4. Get Current User (Protected)
```
GET /api/auth/me
Authorization: Bearer <your-jwt-token>
```

### 5. Get Weather Data (Protected)
```
GET /api/weather?city=London
Authorization: Bearer <your-jwt-token>
```

## Testing with cURL

### Register a new user:
```bash
curl -X POST http://localhost:4000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Login:
```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Get weather data (replace TOKEN with the JWT from login response):
```bash
curl -X GET "http://localhost:4000/api/weather?city=London" \
  -H "Authorization: Bearer TOKEN"
```

## Features Implemented

- ✅ User registration with password hashing
- ✅ User login with JWT authentication
- ✅ Protected routes requiring authentication
- ✅ Input validation and error handling
- ✅ Weather API integration (simulated for demo)
- ✅ In-memory data storage
- ✅ Clean code structure and organization

## Notes

- Data is stored in memory (users array)
- JWT secret should be environment variable in production
- Weather data is simulated - replace with real API integration
- Password must be at least 6 characters
- JWT tokens expire in 24 hours
