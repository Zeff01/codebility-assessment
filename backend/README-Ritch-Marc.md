# 🚀 Codebility Backend Assessment

A lightweight Node.js backend demonstrating **authentication, protected
routes, email verification, weather API integration, validation, clean
architecture**, and **good error handling**.

This project is structured using **controllers, services, models,
middleware, and validation**, keeping the code modular and easy to
maintain.

---

## 📂 Folder Structure

    backend/
    │── app.js
    │── .env
    │
    ├── controllers/
    │   ├── authController.js
    │   └── weatherController.js
    │
    ├── services/
    │   ├── authService.js
    │   ├── mailService.js
    │   └── weatherService.js
    │
    ├── routes/
    │   ├── authRoutes.js
    │   └── weatherRoutes.js
    │
    ├── middleware/
    │   ├── authMiddleware.js
    │   └── rateLimiter.js
    │
    ├── models/
    │   └── User.js
    │
    └── validation/
        └── authValidation.js

---

# 🔑 Features

### ✅ User Authentication

- Register\
- Login\
- Email verification (with verification token)\
- Resend verification email\
- Password hashing with **bcryptjs**\
- JWT authentication using **Bearer Token**

---

### ✉️ Email Sending (Gmail App Password)

Uses Nodemailer with Gmail's secure **App Password** authentication.

Sent emails include:

- Beautiful HTML template\
- Verification button\
- Proper branding for presentation

---

### 🌤️ Weather API Integration (No Signup Required)

Integrated with **Open-Meteo API**:

- Weather by **city name**
- Weather by **latitude/longitude**
- No API key required
- Fast, free, stable

---

### 🔒 Protected Routes

`GET /api/weather` requires:

    Authorization: Bearer <jwt>

---

### 🧹 Clean Architecture

Each concern is separated:

- **Controllers** → HTTP logic\
- **Services** → business logic\
- **Middleware** → token auth / rate limiting\
- **Validation** → request body validation via Joi\
- **Models** → simple in-memory User model

---

### 🛡️ Rate Limiting

Implemented a simple **in-memory rate limiter**:

- Login → max 5 attempts/min\
- Resend verification → max 3 attempts/10 mins

---

# 📌 API Endpoints

## Auth Routes

### `POST /api/auth/register`

Registers a new user and sends a verification email.

⚠️ **IMPORTANT NOTE:**\
After registering, **you must check your email** and click the
verification link.\
Make sure you **use the same PC and network** where the API is running
when clicking the verification link --- this ensures `localhost`
resolves correctly.

---

### `GET /api/auth/verify-email?token=...`

Verifies user email.

### `POST /api/auth/login`

Authenticates user and returns a JWT token.

### `POST /api/auth/resend-verification`

Resends a verification email (rate-limited).

---

## Weather Route

### `GET /api/weather`

**Protected route**

Query options:

    /api/weather?city=Manila
    /api/weather?lat=14.5&lon=120.9

Returns:

- Temperature\
- Windspeed\
- Wind direction\
- Location data

---

# ⚙️ Setup Instructions

### 1. Install dependencies

    npm install

### 2. Set up `.env` file

    PORT=3000
    JWT_SECRET=supersecret_jwt_key

    MAIL_USER=yourgmail@gmail.com
    MAIL_PASS=your_google_app_password
    MAIL_FROM=Codebility <yourgmail@gmail.com>

### 3. IMPORTANT --- Email Verification Setup

- Use a **Gmail App Password**, not your Gmail password\
- After registration, check your inbox\
- **Open the verification link on the same PC** where the backend is
  running\
  (because `localhost` in the verification URL refers to that machine)

---

### 4. Run the server

    node app.js

---

# 🧪 Testing

Use:

- Postman\
- Insomnia\
- Curl

Test flow:

Register → Check Email → Verify (same PC) → Login → Weather API

---

# 🧩 What This Project Demonstrates

- Clean backend architecture\
- JWT authentication\
- HTML email templates\
- External API consumption\
- Input validation\
- Error handling\
- Email verification flow\
- Rate limiting\
- Good code organization
