# Fullstack E-Commerce Product Page

A high-performance, senior-level e-commerce product detail page built with **Next.js 16.2** (React 19), featuring a robust cart system, optimized data fetching, and premium UI/UX.

---

## 🏗️ Architecture Decisions

### 1. Hybrid Component Architecture
I strategically utilized Next.js **App Router** to balance SEO, performance, and interactivity:
- **Server Components**: Used for the primary layout (`layout.tsx`), Home page (`page.tsx`), and Product Detail page (`products/[id]/page.tsx`). This ensures minimal JavaScript is sent to the client for the initial render, improving Core Web Vitals (LCP/FCP).
- **Client Components**: Isolated to interactive elements like `ProductContent` (Cart logic), `QuantitySelector`, and `Navbar` (Dynamic cart counter). This "islands" approach keeps the client-side bundle lean.

### 2. State Management with Zustand
I chose **Zustand** for the Shopping Cart state:
- **Lightweight**: Minimal boilerplate compared to Redux.
- **Persistent**: Integrated with `persist` middleware to automatically sync cart state with `localStorage`, ensuring data persists across page refreshes.
- **Native Hooks**: Seamlessly integrates with React 19's concurrent features.

### 3. API & Data Layer
- **Unified API Pattern**: Implemented standardized `ApiResponse` types for consistency across `/api/products` and `/api/cart`.
- **Graceful Error Handling**: Dedicated handlers for 404 (Product not found) and 400 (Invalid requests) with clear user feedback.

---

## 🚀 Performance Optimizations

### 1. Advanced Image Optimization
- Leveraged `next/image` with proper `priority`, `sizes`, and `alt` tags.
- Implemented **Skeleton Loaders** (`ProductImageSkeleton`) to mitigate Layout Shift (CLS) during image loading.

### 2. Caching Strategies
- **Server-Side Caching**: API routes include `Cache-Control` headers (`stale-while-revalidate`) to serve data from the edge while updating in the background.
- **Client-Side SWR**: Used for cart operations to ensure immediate UI updates with background synchronization.

### 3. Realistic UX Simulation
- Mock APIs include artificial delays (`setTimeout`) to simulate real-world networking.
- This allowed for thorough testing of **Suspense** boundaries and loading states, ensuring a smooth "perceived" performance.

---

## 🛠️ Technology Choices

| Tech Stack | Choice | Rationale |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.2 (App Router) | Best-in-class SEO, RSC support, and developer experience. |
| **Styling** | Tailwind CSS 4 | Modern, utility-first CSS with improved performance and JIT compilation. |
| **State** | Zustand | Simple, scalable, and lightweight (2KB) state management. |
| **Icons** | Lucide React | Tree-shakable, consistent, and beautiful icon set. |
| **Types** | TypeScript | Robust type safety for catching bugs at compile-time. |

---

## ⚖️ Trade-offs

1. **Mock Data vs. Real Database**: For the scope of this assessment, I used a modular mock data layer. This allowed for faster implementation while still demonstrating proper data fetching patterns (async/await, mapping).
2. **Client-Side Persistence**: Cart data is stored in `localStorage` for simplicity. In a production enterprise app, I would implement server-side persistence with a Redis/Postgres back-end to sync across devices.
3. **Zustand vs. React Context**: While Context is built-in, Zustand avoids unnecessary re-renders of the entire component tree when only a small piece of state (like quantity) changes.

---

## 🚀 Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

---

*This project is part of the Codebility Senior Fullstack Assessment.*
