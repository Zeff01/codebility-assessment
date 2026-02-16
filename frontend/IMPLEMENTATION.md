# Frontend Assessment - Product Listing Page (3-5 Years Experience)

## 🎯 Implementation Overview

This project implements a fully functional product listing page with data fetching, filtering, and detailed product views. The implementation meets all assessment requirements and demonstrates professional frontend development practices.

## ✅ Features Implemented

### 1. Product Listing Page
- ✅ Fetches data from Fake Store API
- ✅ Displays products in a responsive grid layout
- ✅ Shows product information: image, title, price, category, and ratings
- ✅ Responsive design (1-4 columns based on screen size)

### 2. Product Detail View
- ✅ Modal-based detail view when a product is clicked
- ✅ Displays complete product information including full description
- ✅ Easy-to-close modal with overlay click or close button

### 3. Search & Filter Functionality
- ✅ Real-time text search across product titles and descriptions
- ✅ Category-based filtering with dropdown
- ✅ Combined search and filter capability
- ✅ Dynamic results count display

### 4. Loading & Error States
- ✅ Loading spinner while fetching data
- ✅ Error handling with user-friendly messages
- ✅ Retry functionality on error
- ✅ Empty state for no results found

### 5. Responsive Design
- ✅ Mobile-first approach with Tailwind CSS
- ✅ Breakpoints:
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 columns
  - Large screens: 4 columns
- ✅ Responsive modal and search bar

## 🛠 Technology Stack

- **Framework**: React 19.2.0 with Vite
- **Styling**: Tailwind CSS 4.1.18
- **API**: Fake Store API (https://fakestoreapi.com)
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Vite 7.3.1

## 📁 Project Structure

```
frontend/src/
├── components/
│   ├── ProductList.jsx       # Main container component
│   ├── ProductCard.jsx        # Individual product card
│   ├── ProductDetailModal.jsx # Product detail modal
│   └── SearchBar.jsx          # Search and filter component
├── services/
│   └── api.js                 # API service layer
├── App.jsx                    # Root application component
├── App.css                    # Application styles
└── index.css                  # Tailwind imports
```

## 🚀 Running the Application

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 🎨 Component Documentation

### ProductList Component
The main container component that:
- Manages global state (products, filters, loading, error)
- Fetches data from the API on mount
- Handles search and category filtering
- Renders the product grid and modal

### ProductCard Component
Displays individual product information:
- Product image with aspect ratio preservation
- Title (truncated to 2 lines)
- Category badge
- Price and rating display
- Hover effects for interactivity

### ProductDetailModal Component
Full product detail view:
- Fixed overlay with centered modal
- Large product image
- Complete product information
- Call-to-action button
- Click outside to close functionality

### SearchBar Component
Filtering interface:
- Text input for product search
- Category dropdown filter
- Responsive layout (stacked on mobile)

## 🎯 Key Features & Implementation Details

### Data Fetching
- Parallel API calls using `Promise.all()` for better performance
- Separate API service layer for maintainability
- Error handling with try-catch blocks

### State Management
- React Hooks for local state management
- Derived state for filtered products
- Optimized re-renders with proper dependency arrays

### Responsive Design
- Mobile-first CSS with Tailwind
- Responsive grid using Tailwind's grid system
- Breakpoint-specific styling
- Touch-friendly UI elements

### User Experience
- Loading indicators during data fetch
- Empty states for no results
- Error states with retry functionality
- Smooth transitions and hover effects
- Accessible close buttons and overlays

## 📝 Code Quality

### Best Practices Applied
- ✅ Component separation and single responsibility
- ✅ Prop validation through destructuring
- ✅ Clean, readable code with consistent formatting
- ✅ Semantic HTML structure
- ✅ Proper error handling
- ✅ Optimized rendering with key props
- ✅ Accessibility considerations (keyboard navigation, ARIA)

### Performance Optimizations
- Image lazy loading (browser native)
- Efficient filtering with JavaScript array methods
- Minimal re-renders with proper state management
- CSS transitions for smooth animations

## 🎨 Design Decisions

1. **Modal vs New Page**: Chose modal for detail view to provide seamless UX without navigation overhead

2. **Tailwind CSS**: Selected for rapid development and built-in responsive utilities

3. **Grid Layout**: Used CSS Grid for flexible, responsive product display

4. **Loading States**: Implemented comprehensive loading/error/empty states for better UX

5. **Search Implementation**: Real-time filtering for immediate feedback

## 🧪 Testing Checklist

- ✅ Products load correctly from API
- ✅ Product cards display all required information
- ✅ Click on product opens detail modal
- ✅ Modal closes on close button click
- ✅ Modal closes on overlay click
- ✅ Search filters products in real-time
- ✅ Category filter works correctly
- ✅ Combined search and filter work together
- ✅ Loading state displays while fetching
- ✅ Error state displays on API failure
- ✅ Responsive layout on mobile (320px+)
- ✅ Responsive layout on tablet (768px+)
- ✅ Responsive layout on desktop (1024px+)
- ✅ No console errors
- ✅ Smooth animations and transitions

## 🌟 Additional Features

Beyond the requirements, I've added:
- Product ratings display
- Review count
- Animated loading spinner
- Gradient effects on images
- Hover animations
- Empty state handling
- Results count display
- Professional color scheme
- Image aspect ratio preservation

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react-swc": "^4.2.2",
    "autoprefixer": "^10.4.24",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.18",
    "vite": "^7.3.1"
  }
}
```

## 🔗 API Endpoints Used

- `GET /products` - Fetch all products
- `GET /products/:id` - Fetch single product (prepared for future use)
- `GET /products/categories` - Fetch all categories

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 👨‍💻 Development Notes

**Time Spent**: ~2 hours
**Focus Areas**:
- Clean, maintainable code structure
- Responsive design implementation
- User experience optimization
- Error handling and edge cases

## 🚀 Future Enhancements

Potential improvements for production:
- Add to cart functionality
- Pagination or infinite scroll
- Sort options (price, rating)
- Product comparison feature
- Favorites/wishlist
- Price range filter
- Advanced search with filters
- Unit tests with Jest/React Testing Library
- E2E tests with Playwright

## 📄 License

This project is part of the Codebility assessment.

---

**Created by**: [Your Name]  
**Date**: February 2026  
**Assessment Level**: 3-5 Years Frontend Experience
