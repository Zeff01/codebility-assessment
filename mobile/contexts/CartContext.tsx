"use client"

import type { MenuItem } from "@/data/mockData"
import type { CartContextType, CartItem, CartState } from "@/types/cart"
import type React from "react"
import { createContext, useContext, useReducer, type ReactNode } from "react"

// Initial state
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
}

// Action types
type CartAction =
  | { type: "ADD_TO_CART"; payload: MenuItem }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { itemId: string; quantity: number } }
  | { type: "CLEAR_CART" }

// Helper function to calculate totals
const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return { totalItems, totalPrice }
}

// Reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.items.findIndex((item) => item.id === action.payload.id)

      let newItems: CartItem[]

      if (existingItemIndex >= 0) {
        // Item exists, increment quantity
        newItems = state.items.map((item, index) =>
          index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item,
        )
      } else {
        // New item, add to cart
        newItems = [...state.items, { ...action.payload, quantity: 1 }]
      }

      const { totalItems, totalPrice } = calculateTotals(newItems)

      return {
        items: newItems,
        totalItems,
        totalPrice,
      }
    }

    case "REMOVE_FROM_CART": {
      const newItems = state.items.filter((item) => item.id !== action.payload)
      const { totalItems, totalPrice } = calculateTotals(newItems)

      return {
        items: newItems,
        totalItems,
        totalPrice,
      }
    }

    case "UPDATE_QUANTITY": {
      const { itemId, quantity } = action.payload

      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        const newItems = state.items.filter((item) => item.id !== itemId)
        const { totalItems, totalPrice } = calculateTotals(newItems)

        return {
          items: newItems,
          totalItems,
          totalPrice,
        }
      }

      const newItems = state.items.map((item) => (item.id === itemId ? { ...item, quantity } : item))

      const { totalItems, totalPrice } = calculateTotals(newItems)

      return {
        items: newItems,
        totalItems,
        totalPrice,
      }
    }

    case "CLEAR_CART":
      return initialState

    default:
      return state
  }
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Provider component
interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (item: MenuItem) => {
    dispatch({ type: "ADD_TO_CART", payload: item })
  }

  const removeFromCart = (itemId: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId })
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { itemId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const getItemQuantity = (itemId: string): number => {
    const item = cart.items.find((item) => item.id === itemId)
    return item ? item.quantity : 0
  }

  const contextValue: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemQuantity,
  }

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}

// Custom hook to use cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
