'use client';

import { useRef, useEffect } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from './store';
import { setCart } from './cartSlice';
import { setProducts } from './productsSlice';

const CART_STORAGE_KEY = 'shopping-cart';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  // Hydrate cart from localStorage and fetch products from server on mount
  useEffect(() => {
    if (storeRef.current) {
      // Load cart from localStorage
      try {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY);
        if (savedCart) {
          const cart = JSON.parse(savedCart);
          storeRef.current.dispatch(setCart(cart));
        }
      } catch (error) {
        console.error('Failed to load cart from localStorage:', error);
      }

      // Fetch products from server (source of truth for stock levels)
      fetch('/api/products')
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.data) {
            storeRef.current?.dispatch(setProducts(data.data));
          }
        })
        .catch((error) => {
          console.error('Failed to fetch products from server:', error);
        });
    }
  }, []);

  // Subscribe to store changes and persist cart to localStorage
  useEffect(() => {
    if (storeRef.current) {
      const unsubscribe = storeRef.current.subscribe(() => {
        const state = storeRef.current?.getState();
        if (state) {
          try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
          } catch (error) {
            console.error('Failed to save cart to localStorage:', error);
          }
        }
      });

      return unsubscribe;
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
