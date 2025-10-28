## Project Overview

**Codebility Frontend Assessment** – A responsive e-commerce product listing app built with modern Next.js practices.

### Tech Stack

* **Framework & Language**: Next.js 15, React 19, TypeScript 5
* **Styling**: TailwindCSS 4
* **State Management**: React Context API
* **Utilities & Dependencies**: Axios, React Icons
* **Linting**: ESLint with Next.js config

### Folder Structure

```
/app
  /[id]                  # Dynamic product pages
    loading.tsx          # Corporate-style skeleton loader for product detail
    page.tsx             # Product detail page with rating
  not-found.tsx          # Custom 404 page
  page.tsx               # Home page with product listing
  layout.tsx
/components
  ProductCard.tsx
  ProductCardLoader.tsx  # Corporate-style skeleton loader for product cards
  SearchBar.tsx
/context
  ProductContext.tsx
/globals.css
```

### Best Practices

* **Dynamic Routing & ISR**: Fetch product data with `fetch(..., { next: { revalidate: 60 } })`.
* **Corporate-Style Loading**:

 * `ProductCardLoader` and `[id]/loading.tsx` use animated skeletons with shadows and smooth pulses, mimicking modern platforms like YouTube & Facebook.
* **UX Optimizations**: Loading states localized to cards only; clear visual feedback while fetching.
* **Error Handling**: Inline messages for API errors; custom `not-found.tsx` for invalid routes.
* **Image Optimization**: Leveraged `next/image` for responsive and performant images.
* **Component Reusability**: Modular, clean, and typed components for maintainability.
* **Responsive Design**: Fully mobile, tablet, and desktop-friendly grid layouts.
* **Accessibility**: Semantic HTML elements and focus-friendly links/buttons.
