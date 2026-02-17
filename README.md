### Author: Jacob Christian Guanzing
### Date: Feb. 17, 2025

# E-Commerce Shopping Application

Take home assignment for Full Stack - 5 Year plus.

## Table of Contents

1. [Demo](#demo)
2. [Feature Scope](#feature-scope)
3. [Project Design](#project-design)
4. [Architecture](#architecture)
5. [API Contract](#api-contract)
6. [UI Store](#redux-store)
7. [Test Notes](#test-notes)

---

## Demo

### Home Page
<img width="1787" height="1033" alt="cart_checkout" src="https://github.com/user-attachments/assets/76ca2687-9853-4246-a800-801a78bd5222" />

### Product Detail Page
<img width="1767" height="1037" alt="home_page" src="https://github.com/user-attachments/assets/4d38c3e7-29f9-48f8-9fc8-b6e1a9d05955" />

### Cart & Checkout
<img width="1750" height="1015" alt="product_id_page" src="https://github.com/user-attachments/assets/c39f5774-68d5-4dcb-a524-2e96ea749d57" />

---

## Feature Scope

### Core Features

| Feature | Description |
|---------|-------------|
| **Product Catalog** | Browse 6 products across 4 categories (Electronics, Accessories, Clothing, Home) |
| **Category Filtering** | Filter products by category with single-click selection |
| **Product Details** | View detailed product information including description, features, rating, and stock |
| **Shopping Cart** | Add, update quantities, and remove items from cart |
| **Cart Persistence** | Cart state persists across browser sessions via localStorage |
| **Real-time Product Data** | Live stock tracking with out-of-stock prevention |
| **Checkout** | Process cart items and update inventory |
| **Dark Mode** | Automatic theme based on system preferences |
| **Responsive Design** | Mobile-first responsive layout (1-3 column grid) |

### User Flows

**Browse Products:**
- View all products on home page
- Filter by category
- See product ratings, reviews, and prices
- View stock availability

**Add to Cart:**
- Click "Add to Cart" from product card (adds 1 item)
- Use quantity selector on product detail page
- Cart sidebar opens automatically after adding

**Manage Cart:**
- Adjust quantities with +/- buttons
- Remove individual items
- Clear entire cart
- View running subtotal

**Checkout:**
- Click "Checkout" to process order
- Stock is deducted from inventory
- Success notification displayed
- Cart is cleared

---

## Project Design

### Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16 |
| **UI Library** | React|
| **State Management** | Redux Toolkit |
| **Styling** | Tailwind CSS |
| **Language** | TypeScript |


### Data Models

```typescript
// Product
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  reviews: number;
}

// Cart Item
interface CartItem {
  product: Product;
  quantity: number;
}

// Cart State
interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

// API Response
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
```

### Data Storage Strategy

| Data | Storage | Persistence |
|------|---------|-------------|
| Products (source) | In-memory (server) | Runtime only |
| Product Stock | In-memory (server) | Runtime only |
| Cart State | Redux + localStorage | Browser session |
| Theme Preference | System detection | OS setting |

---

## Architecture

### Project Directory
The application follows a modular structure using Next.js App Router. The `app/` directory contains pages, layouts, and API route handlers. Reusable UI components live in `components/`, while state management logic is organized in `store/` using Redux Toolkit slices. Type definitions are centralized in `types/`, and product data with server-side stock management resides in `data/`.

### UI Component
The component hierarchy starts with a root layout that wraps the app in a StoreProvider for Redux state and a ThemeProvider for dark mode detection. The Header and CartSidebar are rendered globally, while page-specific content renders in the main area.

### State Management
<img width="796" height="695" alt="fs_architechture" src="https://github.com/user-attachments/assets/1a363dc1-5a3d-45a9-9326-b8d9242e9995" />

Data flows bidirectionally between React components and the Redux store, with cart state persisted to localStorage. Stock updates are handled through async thunks that call Next.js API route handlers, which interact with an in-memory product store on the server. On checkout, stock deductions are processed server-side and updated inventory levels are returned to sync the client.

---

## API Contract

### Products

#### GET /api/products

Retrieve all products or filter by category.

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `category` | string | No | Filter by category name |

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Wireless Headphones",
      "description": "Premium wireless headphones...",
      "price": 199.99,
      "image": "https://images.unsplash.com/...",
      "category": "Electronics",
      "stock": 15,
      "rating": 4.5,
      "reviews": 128
    }
  ]
}
```

**Status Codes:**
| Code | Description |
|------|-------------|
| 200 | Success |
| 500 | Server error |

---

#### GET /api/products/[id]

Retrieve a single product by ID.

**Path Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | string | Product ID |

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "name": "Wireless Headphones",
    "description": "Premium wireless headphones...",
    "price": 199.99,
    "image": "https://images.unsplash.com/...",
    "category": "Electronics",
    "stock": 15,
    "rating": 4.5,
    "reviews": 128
  }
}
```

**Status Codes:**
| Code | Description |
|------|-------------|
| 200 | Success |
| 404 | Product not found |
| 500 | Server error |

---

#### PATCH /api/products/[id]

Update product stock (deduct quantity).

**Path Parameters:**
| Parameter | Type | Description |
|-----------|------|-------------|
| `id` | string | Product ID |

**Request Body:**
```json
{
  "quantity": 2
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "1",
    "name": "Wireless Headphones",
    "stock": 13
  }
}
```

**Status Codes:**
| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Invalid quantity |
| 404 | Product not found |
| 500 | Server error |

---

### Checkout

#### POST /api/checkout

Process checkout and update inventory for all cart items.

**Request Body:**
```json
{
  "items": [
    { "productId": "1", "quantity": 2 },
    { "productId": "3", "quantity": 1 }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "updatedStocks": {
      "1": 13,
      "3": 24
    }
  }
}
```

**Validation:**
- `items` array must not be empty
- Each item must have valid `productId` (string)
- Each item must have `quantity` >= 1

**Status Codes:**
| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Validation error |
| 500 | Server error |


## Redux Store

The store is configured with two slices: `cart` and `products`. The cart slice manages shopping cart items, totals, sidebar visibility, and checkout status. The products slice holds the product catalog with current stock levels.

State is designed to be minimal and derived where possible. Cart totals are recalculated on each add/update action. The cart sidebar's open/close state is colocated with cart data for unified control.

Async operations use `createAsyncThunk` for checkout processing. The `checkoutCart` thunk posts cart items to the server, handles loading states via `isCheckingOut`, clears the cart on success, and triggers stock updates in the products slice through extra reducers.

The StoreProvider hydrates cart state from localStorage on mount and subscribes to store changes for automatic persistence. Products are fetched from the API on initial load to ensure stock levels reflect server state.

## Test Notes

### Testing Cases

**Product Catalog**
- Verify all products load on home page
- Filter by each category and confirm correct products display
- Click "All Products" resets filter
- Product cards show correct name, price, and rating

**Product Details**
- Navigate to product detail page via card click
- Verify product information matches catalog
- Stock count displays correctly
- Quantity selector respects stock limits

**Shopping Cart**
- Add item from product card (quantity 1)
- Add item from detail page with custom quantity
- Cart badge updates with total items
- Adjust quantity via +/- buttons
- Remove individual items
- Clear entire cart
- Cart persists after page refresh (localStorage)

**Checkout**
- Checkout deducts stock from server inventory
- Success toast displays after checkout
- Cart clears after successful checkout
- Out-of-stock items cannot be added

### Cross-Browser Checkout Testing

To verify server-side stock handling, test product checkouts across multiple browsers simultaneously:

1. Open the app in Browser A (e.g., Chrome) and Browser B (e.g., Firefox). You can also use private browser tab
2. Add the same product to cart in both browsers
3. Complete checkout in Browser A
4. Refresh Browser B and verify stock reflects the deduction from Browser A
5. Attempt checkout in Browser B - stock should be updated from server

This confirms that stock is managed server-side and synchronized across all clients, not just stored in localStorage.
