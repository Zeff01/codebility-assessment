# Backend Assessment (1–2 Years Experience)

## Overview

Welcome to the **1–2 Years** backend assessment! Your task is to create a simple REST API with a few endpoints. This assessment is designed to take **1-2 hours** of coding time, but you have **1-2 days** to complete it.

## Task Summary

1. Create a simple API with CRUD operations for a todo list
2. Store data in memory (no database required)
3. Implement basic error handling

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
git checkout -b firstname-lastname/1-2-years-backend
```

Replace `firstname-lastname` with your actual name.

### 4. Implementation

1. Create a simple API with these endpoints:

   - `GET /api/todos` - List all todos
   - `GET /api/todos/:id` - Get a single todo
   - `POST /api/todos` - Create a new todo
   - `PUT /api/todos/:id` - Update a todo
   - `DELETE /api/todos/:id` - Delete a todo

2. Each todo should have:

   - id
   - title
   - completed (boolean)
   - createdAt

3. Add basic validation and error handling

### 5. Test Your Work

1. Test your API using tools like Postman, Insomnia, or curl
2. Make sure all endpoints work as expected

### 6. Submit Your Work

1. Commit and push your changes:

   ```bash
   git add .
   git commit -m "Implement todo API"
   git push origin firstname-lastname/1-2-years-backend
   ```

2. Create a Pull Request:
   - Go to your fork on GitHub
   - Click "Contribute" and "Open pull request"
   - Make sure the base repository is set to `Zeff01/codebility-assessment`
   - Add a title and brief description of your implementation

## What We're Looking For

- Clean, readable code
- Proper API design
- Basic error handling
- Simple project organization

## Technology Choices

- Use Node.js
- Feel free to use Express, Fastify, Koa, or any framework you prefer
- Use JavaScript or TypeScript (your choice)
- Choose any libraries you're comfortable with

## Time Allowance

- **Expected coding time**: 1-2 hours
- **Submission deadline**: 1-2 days

This assessment is intentionally simple. We're looking for clean code and good API design principles.

**Good luck!**
