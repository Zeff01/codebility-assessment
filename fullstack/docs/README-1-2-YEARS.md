# Fullstack Assessment (1-2 Years Experience)

## Overview

Welcome to the **1-2 Years** fullstack assessment! Your task is to create a simple blog application using Next.js. This assessment is designed to take **1-2 hours** of coding time, but you have **1-2 days** to complete it.

## Task Summary

1. Create a simple blog with Next.js
2. Implement a page that lists blog posts
3. Add a page that displays a single blog post
4. Create a simple API route to serve the blog data
5. Style the application with basic CSS or Tailwind

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
git checkout -b firstname-lastname/fullstack-1-2
```

Replace `firstname-lastname` with your actual name.

### 4. Setup the Project

1. Create a new Next.js project in the `fullstack` directory:

   ```bash
   mkdir -p fullstack
   cd fullstack
   npx create-next-app@latest .
   ```

2. Choose your preferred options during the setup (TypeScript is recommended but optional)

### 5. Implementation

#### Blog Data

Create a simple data file with blog posts:

```javascript
// data/posts.js
export const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn the basics of Next.js and how to create your first app",
    content:
      "Next.js is a React framework that enables server-side rendering and generating static websites...",
    date: "2025-04-15",
  },
  {
    id: 2,
    title: "Styling in Next.js",
    excerpt: "Different ways to style your Next.js application",
    content:
      "There are multiple ways to style your Next.js application including CSS modules, Tailwind CSS...",
    date: "2025-04-16",
  },
  // Add 1-2 more posts
];
```

#### Pages to Implement

1. **Home Page** (`app/page.jsx` or `pages/index.jsx`):

   - Display a list of blog posts with titles and excerpts
   - Add links to individual blog post pages
   - Include basic styling

2. **Blog Post Page** (`app/posts/[id]/page.jsx` or `pages/posts/[id].jsx`):

   - Display a single blog post with full content
   - Include a back button to return to the home page
   - Style the page appropriately

3. **API Route** (`app/api/posts/route.js` or `pages/api/posts.js`):
   - Create an endpoint that returns all posts
   - Add another endpoint to get a specific post by ID

### 6. Test Your Application

1. Run your Next.js app:
   ```bash
   npm run dev
   ```
2. Test the blog post list page
3. Test the individual blog post pages
4. Test the API endpoints (e.g., `/api/posts` and `/api/posts/1`)

### 7. Submit Your Work

1. Commit and push your changes:

   ```bash
   git add .
   git commit -m "Implement simple blog with Next.js"
   git push origin firstname-lastname/fullstack-1-2
   ```

2. Create a Pull Request:
   - Go to your fork on GitHub
   - Click "Contribute" and "Open pull request"
   - Make sure the base repository is set to `Zeff01/codebility-assessment`
   - Include screenshots of your implementation
   - Add a brief description of your approach

## What We're Looking For

- Understanding of Next.js basics
- Proper page routing and navigation
- Basic API route implementation
- Clean code organization
- Simple, effective styling

## Technology Choices

- Next.js (App Router or Pages Router - your choice)
- JavaScript or TypeScript (your preference)
- CSS, Tailwind, or any styling solution you prefer
- No database required (use the provided data array)

## Time Allowance

- **Expected coding time**: 1-2 hours
- **Submission deadline**: 1-2 days

This assessment is intentionally simple. We're looking for clean code and a basic understanding of fullstack Next.js development.

**Good luck!**
