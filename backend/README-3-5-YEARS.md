# Backend Assessment (3–5 Years Experience)

## Overview

Welcome to the **3–5 Years** backend assessment! Your task is to build a small API with authentication and an external API integration. This assessment is designed to take **1-2 hours** of coding time, but you have **1-2 days** to complete it.

## Task Summary

1. Create an API with user authentication
2. Implement protected and public routes
3. Integrate with an external API

## Steps to Complete

### 1. Fork the Repository

1. Go to [https://github.com/Zeff01/codebility-assessment](https://github.com/Zeff01/codebility-assessment)
2. Click the "Fork" button in the upper right corner

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/codebility-assessment.git
cd codebility-assessment/backend
```

### 3. Create a Branch

```bash
git checkout -b firstname-lastname/3-5-years-backend
```

Replace `firstname-lastname` with your actual name.

### 4. Implementation

1. Create an API with:

   - User authentication (login/register)
   - Public endpoints
   - Protected endpoints (requiring authentication)

2. Implement these endpoints:

   - `POST /api/auth/register` - User registration
   - `POST /api/auth/login` - User login
   - `GET /api/weather` - Get weather data (protected route)
   - Any additional endpoints you think are necessary

3. Integrate with a weather API of your choice:

   - Fetch weather data based on city or coordinates
   - Return it to the client through your API

4. Add basic error handling and input validation

### 5. Test Your Work

1. Test your API using tools like Postman, Insomnia, or curl
2. Make sure authentication and API integration work properly

### 6. Submit Your Work

1. Commit and push your changes:

   ```bash
   git add .
   git commit -m "Implement API with authentication and weather integration"
   git push origin firstname-lastname/3-5-years-backend
   ```

2. Create a Pull Request:
   - Go to your fork on GitHub
   - Click "Contribute" and "Open pull request"
   - Make sure the base repository is set to `Zeff01/codebility-assessment`
   - Add a title and brief description of your implementation

## What We're Looking For

- Proper authentication implementation
- Clean code organization
- Error handling
- External API integration
- Input validation

## Technology Choices

- Use Node.js
- Choose any framework (Express, NestJS, Fastify, etc.)
- Use JavaScript or TypeScript (your choice)
- Choose any libraries for authentication, validation, etc.
- Store data in memory or use a simple database solution

## Time Allowance

- **Expected coding time**: 1-2 hours
- **Submission deadline**: 1-2 days

Focus on clean implementation rather than feature completeness. We want to see your approach to structuring an API with authentication.

**Good luck!**
