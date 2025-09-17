import axios from 'axios'
import { Product } from '@/types/product'

const api = axios.create({
  baseURL: process.env.BASE_URL || 'https://fakestoreapi.com',
  timeout: 10000,
})

export const productApi = {
  getAll: async (): Promise<Product[]> => {
    const response = await api.get('/products')
    return response.data
  },

  getById: async (id: number): Promise<Product> => {
    const response = await api.get(`/products/${id}`)
    return response.data
  },

  getCategories: async (): Promise<string[]> => {
    const response = await api.get('/products/categories')
    return response.data
  },

  getByCategory: async (category: string): Promise<Product[]> => {
    const response = await api.get(`/products/category/${category}`)
    return response.data
  },
}
