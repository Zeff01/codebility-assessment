# Mobile Assessment (3-5 Years Experience)

## Overview

Welcome to the **3-5 Years** mobile development assessment! Your task is to build a simple product details screen with data fetching. This assessment is designed to take **1-2 hours** of coding time, but you have **1-2 days** to complete it.

## Task Summary

1. Create a product details screen that fetches data from an API
2. Display product information with a simple image, title, price, and description
3. Implement a basic "Add to Cart" functionality
4. Handle loading and error states

## Steps to Complete

### 1. Fork the Repository

1. Go to [https://github.com/Zeff01/codebility-assessment](https://github.com/Zeff01/codebility-assessment)
2. Click the "Fork" button in the upper right corner

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR-USERNAME/codebility-assessment.git
cd codebility-assessment/mobile
```

### 3. Create a Branch

```bash
git checkout -b firstname-lastname/3-5-years-mobile
```

Replace `firstname-lastname` with your actual name.

### 4. Implementation

1. Create a product details screen that:

   - Fetches data from [Fake Store API](https://fakestoreapi.com/products/1) (or any similar API)
   - Displays the product image, title, price, and description
   - Shows a loading state while fetching data
   - Handles potential errors gracefully

2. Add a simple "Add to Cart" button that:

   - Shows a visual confirmation when pressed
   - Stores the selected product in local state
   - Updates a cart counter somewhere on the screen

3. Focus on these technical aspects:
   - Clean component structure
   - Proper data fetching
   - Basic state management
   - Simple UI/UX considerations

### 5. Test Your Work

1. Run the application using Expo:
   ```bash
   npm start
   ```
2. Test on iOS/Android simulator or your physical device
3. Verify that data fetching, display, and cart functionality work properly

### 6. Submit Your Work

1. Commit and push your changes:

   ```bash
   git add .
   git commit -m "Implement product details screen with API integration"
   git push origin firstname-lastname/3-5-years-mobile
   ```

2. Create a Pull Request:
   - Go to your fork on GitHub
   - Click "Contribute" and "Open pull request"
   - Make sure the base repository is set to `Zeff01/codebility-assessment`
   - Include screenshots of your implementation
   - Add a brief explanation of your approach

## What We're Looking For

- Clean component architecture
- Proper data fetching with loading/error states
- Basic state management
- Attention to UI details
- Code organization and readability

## Technology Choices

- Use the existing Expo setup
- Choose any state management approach
- Select any libraries for fetching data
- Use any UI components or styling approach you prefer

## Time Allowance

- **Expected coding time**: 1-2 hours
- **Submission deadline**: 1-2 days

Focus on quality over quantity. A clean, working implementation of these basic features is better than an ambitious but incomplete or buggy solution.

**Good luck!**
