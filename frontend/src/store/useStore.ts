import { create } from 'zustand'
import { Product } from '@/types/product'

interface AppState {
  searchQuery: string
  selectedCategory: string
  selectedProduct: Product | null
  isDetailModalOpen: boolean
  setSearchQuery: (query: string) => void
  setSelectedCategory: (category: string) => void
  setSelectedProduct: (product: Product | null) => void
  setDetailModalOpen: (open: boolean) => void
  openProductDetail: (product: Product) => void
  closeProductDetail: () => void
}

export const useStore = create<AppState>((set) => ({
  searchQuery: '',
  selectedCategory: '',
  selectedProduct: null,
  isDetailModalOpen: false,
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSelectedProduct: (product) => set({ selectedProduct: product }),
  setDetailModalOpen: (open) => set({ isDetailModalOpen: open }),
  openProductDetail: (product) =>
    set({ selectedProduct: product, isDetailModalOpen: true }),
  closeProductDetail: () =>
    set({ selectedProduct: null, isDetailModalOpen: false }),
}))
