# Fullstack Assessment (3-5 Years Experience)

## Overview

Welcome to the **3-5 Years** fullstack assessment! Your task is to create a simple todo application with Next.js, including data persistence and authentication. This assessment is designed to take **1-2 hours** of coding time, but you have **1-2 days** to complete it.

## Task Summary

1. Create a todo application with Next.js
2. Implement user authentication (can be simplified)
3. Create API routes for CRUD operations
4. Add data persistence with a database or local storage
5. Style the application for a clean user experience

## Steps to Complete

### 1. Fork the Repository

1. Go to [https://github.com/Zeff01/codebility-assessment](https://github.com/Zeff01/codebility-assessment)
2. Click the "Fork" button in the upper right corner

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/codebility-assessment.git
cd codebility-assessment
```

### 3. Create a Branch

```bash
git checkout -b firstname-lastname/fullstack-3-5
```

Replace `firstname-lastname` with your actual name.

### 4. Setup the Project

1. Create a new Next.js project in the `fullstack` directory:

   ```bash
   mkdir -p fullstack
   cd fullstack
   npx create-next-app@latest .
   ```

2. Choose your preferred options during the setup (TypeScript is recommended)

3. Install additional dependencies as needed:
   ```bash
   # Example - choose what you need
   npm install next-auth prisma @prisma/client
   # Or simpler alternatives if you prefer
   ```

### 5. Implementation

#### Authentication

Implement a simple authentication system:

- You can use NextAuth.js, a custom solution, or even mock authentication
- Create sign-in and sign-out functionality
- Protect the todo list page from unauthenticated users

#### Todo Application

1. **Todo List Page**:

   - Display the current user's todos
   - Show each todo's title, status (complete/incomplete), and creation date
   - Add buttons to mark todos as complete or delete them
   - Include a form to create new todos

2. **API Routes**:

   - Create an endpoint for fetching todos
   - Add endpoints for creating, updating, and deleting todos
   - Ensure routes are protected for authenticated users only

3. **Data Persistence**:

   - Use any database you're comfortable with (Prisma + SQLite is a simple option)
   - Or use localStorage/JSON files if you prefer a simpler approach
   - Ensure data persists between page refreshes

4. **Styling**:
   - Create a clean, user-friendly interface
   - Add loading and error states
   - Make the UI responsive

### 6. Test Your Application

1. Run your Next.js app:
   ```bash
   npm run dev
   ```
2. Test the authentication flow
3. Test all todo operations (create, read, update, delete)
4. Verify data persistence

### 7. Submit Your Work

1. Commit and push your changes:

   ```bash
   git add .
   git commit -m "Implement todo application with authentication"
   git push origin firstname-lastname/fullstack-3-5
   ```

2. Create a Pull Request:
   - Go to your fork on GitHub
   - Click "Contribute" and "Open pull request"
   - Make sure the base repository is set to `Zeff01/codebility-assessment`
   - Include screenshots of your implementation
   - Add a brief description of your approach and any trade-offs you made

## What We're Looking For

- Clean, well-organized code
- Proper authentication implementation
- Effective API route design
- Data persistence approach
- User experience and UI design
- Error handling

## Technology Choices

- Next.js (App Router or Pages Router - your choice)
- TypeScript preferred but JavaScript is acceptable
- Any authentication library (NextAuth.js, custom JWT, etc.)
- Any database solution or local storage approach
- Any styling approach you prefer

## Time Allowance

- **Expected coding time**: 1-2 hours
- **Submission deadline**: 1-2 days

Focus on implementing a clean, working solution rather than adding many features. We're looking for quality code over quantity of features.

**Good luck!**
