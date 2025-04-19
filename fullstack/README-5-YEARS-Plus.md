# Fullstack Assessment (5+ Years Experience)

## Overview

Welcome to the **Senior** fullstack assessment! Your task is to create a small e-commerce product page with Next.js, focusing on architecture, performance, and user experience. This assessment is designed to take **1-2 hours** of coding time, but you have **1-2 days** to complete it.

## Task Summary

1. Create a product detail page with Next.js
2. Implement server and client components appropriately
3. Add a shopping cart with state management
4. Create API routes for product data and cart operations
5. Focus on performance, architecture, and code quality

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
git checkout -b firstname-lastname/fullstack-5-plus
```

Replace `firstname-lastname` with your actual name.

### 4. Setup the Project

1. Create a new Next.js project in the `fullstack` directory:

   ```bash
   mkdir -p fullstack
   cd fullstack
   npx create-next-app@latest .
   ```

2. Choose the following options:
   - TypeScript
   - ESLint
   - Tailwind CSS (or your preferred styling solution)
   - App Router

### 5. Implementation

#### Product Detail Page

Create a product detail page that demonstrates:

- Server components for initial data loading
- Client components for interactive elements
- Proper loading and error states
- Optimized images
- Performance considerations

#### Shopping Cart

Implement a cart system that:

- Allows adding products to the cart
- Shows cart summary (number of items, total price)
- Persists cart state (localStorage, cookies, or server-side)
- Uses appropriate state management

#### Data Handling

1. **Product Data**:

   - Create mock product data or use a simple API
   - Implement proper data fetching with caching
   - Handle loading and error states

2. **API Routes**:

   - Create endpoints for product data
   - Implement cart operations (add, remove, update)
   - Add proper error handling

3. **Architecture**:
   - Organize code with clear separation of concerns
   - Use appropriate patterns for state management
   - Create reusable components

### 6. Test Your Application

1. Run your Next.js app:
   ```bash
   npm run dev
   ```
2. Test the product detail page
3. Verify cart functionality
4. Check performance using browser dev tools

### 7. Submit Your Work

1. Commit and push your changes:

   ```bash
   git add .
   git commit -m "Implement product page with cart functionality"
   git push origin firstname-lastname/fullstack-5-plus
   ```

2. Create a Pull Request:
   - Go to your fork on GitHub
   - Click "Contribute" and "Open pull request"
   - Make sure the base repository is set to `Zeff01/codebility-assessment`
   - Include screenshots of your implementation
   - Add a detailed explanation of your architecture decisions, performance optimizations, and any trade-offs

## What We're Looking For

- Clean architecture and component design
- Proper use of server and client components
- Effective state management
- Performance optimization
- Error handling and edge cases
- Code quality and organization
- UX considerations

## Technology Choices

- Next.js with App Router
- TypeScript
- Any state management solution you prefer
- Any styling approach (Tailwind recommended)
- Any data fetching library if needed

## Time Allowance

- **Expected coding time**: 1-2 hours
- **Submission deadline**: 1-2 days

Focus on demonstrating your architectural thinking and attention to performance rather than implementing many features. Quality over quantity is key.

**Good luck!**
