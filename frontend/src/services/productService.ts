import { Product } from '@/types/product';

const API_URL = 'https://fakestoreapi.com';

export const productService = {
    // Fetch all products
    async getProducts(): Promise<Product[]> {
        try {
            const response = await fetch(`${API_URL}/products`);
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    // Fetch single product by id
    async getProduct(id: number): Promise<Product> {
        try {
            const response = await fetch(`${API_URL}/products/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch product');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching product:', error);
            throw error;
        }
    },

    // Fetch categories
    async getCategories(): Promise<string[]> {
        try {
            const response = await fetch(`${API_URL}/products/categories`);
            if (!response.ok) {
                throw new Error('Failed to fetch categories');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    },

    // Fetch products by category
    async getProductsByCategory(category: string): Promise<Product[]> {
        try {
            const response = await fetch(`${API_URL}/products/category/${category}`);
            if (!response.ok) {
                throw new Error('Failed to fetch products by category');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching products by category:', error);
            throw error;
        }
    }
};
