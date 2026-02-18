Backend API

Simple Node.js backend using Supabase Authentication and Gmail SMTP.

Features
- User authentication via Supabase
- Email sending using Gmail SMTP
- Weather API by city

Tech Stack
- Node.js
- Express
- Supabase Auth
- Gmail SMTP

Notes
- Supabase authentication is used for a simpler application.
- Gmail is used as the SMTP provider.
- Use a valid email address when registering.

API Endpoints

POST /api/auth/register - User registration
POST /api/auth/login - User login
GET /api/weather/{city}
Example: /api/weather/Los Angeles

Run Project
npm install
npm run dev
