# Mobile Assessment (1-2 Years Experience)

## Overview

Welcome to the **1-2 Years** mobile development assessment!  
In this assessment, you'll implement a simple UI screen based on a design mockup. This task is focused on **UI implementation** skills - translating a design into a functional React Native screen with proper styling and layout.

**Branch Requirement**: Please work on a branch named `firstname-lastname/1-2-years-mobile` (replacing `firstname-lastname` with your own).

## Task Summary

1. **Create a UI screen** that matches the provided design mockup in the `image-test` folder
2. Implement the design using **React Native** components
3. Ensure the UI is **responsive** across different device sizes
4. Focus on **clean code** and component organization
5. Implement basic **navigational interactions** (button presses, navigation)
6. Complete the assessment in approximately **1-2 days**

## Timeline

- **Duration**: 1-2 days
- You may submit your assessment earlier if completed.

## Design Mockup

The design mockup is located in the `image-test` folder. Your implementation should match this design as closely as possible.

## Technical Requirements

### Environment

- **React Native**: Use the existing Expo project structure
- **Styling**: Use React Native's StyleSheet or any styling approach you prefer
- **Navigation**: Use React Navigation for any required navigation

### Implementation Requirements

1. **UI Components**:

   - Implement all UI elements shown in the mockup
   - Use appropriate React Native components (View, Text, Image, etc.)
   - Match colors, spacing, and typography as closely as possible

2. **Layout**:

   - Ensure proper component alignment
   - Implement responsive layout that works on different screen sizes
   - Handle proper spacing between elements

3. **Interaction**:
   - Implement button press states (visual feedback)
   - Navigate to a simple "Success" screen when primary action is taken
   - Add loading states where appropriate

## Steps to Complete

### 1. Create & Switch to a New Branch

git checkout -b firstname-lastname/1-2-years-mobile

Replace `firstname-lastname` with your actual name.

### 2. Implement the UI Screen

1. Create a new screen component in the appropriate directory:

   components/screens/DesignImplementation.tsx

2. Implement the UI according to the mockup, with proper styling and layout

3. Add the screen to the navigation (if applicable)

4. Ensure the screen is responsive and works across device sizes

### 3. Test Your Implementation

1. Run the application:

   npm start

2. Test on different device sizes using the Expo simulator/emulator

3. Verify that the implementation matches the design mockup

4. Test any interactive elements or navigation

### 4. Commit & Push

git add .
git commit -m "Implement UI screen based on design mockup"
git push origin firstname-lastname/1-2-years-mobile

### 5. Open a Pull Request (PR)

1. Go to the repository on GitHub
2. Create a new Pull Request with your branch
3. Use a descriptive title (e.g., `"Feature: [Your Name] - Mobile UI Implementation"`)
4. In the description, include:
   - Screenshots of your implementation
   - Any challenges you faced
   - How you approached the responsive design
   - Any assumptions you made

## Evaluation Criteria

Your submission will be evaluated based on:

1. **Visual Accuracy**: How closely your implementation matches the design
2. **Code Quality**: Clean, readable, and well-organized code
3. **Component Structure**: Proper organization of components and styles
4. **Responsiveness**: How well the UI adapts to different screen sizes
5. **Attention to Detail**: Colors, spacing, typography, and visual elements

## Time Estimate

This assessment should take approximately 1-2 days to complete. The extended timeline allows you to:

- Pay attention to details in the UI implementation
- Ensure your code is clean and well-structured
- Test thoroughly on different device sizes
- Refine any animations or interactions

**Good luck, and happy coding!**
