import axios from "axios";
import { Product } from "@/interfaces";

const API_BASE_URL = "https://fakestoreapi.com";

export const apiClient = axios.create({
	baseURL: API_BASE_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});

// Request interceptor for logging
apiClient.interceptors.request.use(
	(config) => {
		console.log(`🚀 ${config.method?.toUpperCase()} ${config.url}`);
		return config;
	},
	(error) => {
		console.error("❌ Request error:", error);
		return Promise.reject(error);
	}
);

// Response interceptor for logging and error handling
apiClient.interceptors.response.use(
	(response) => {
		console.log(`✅ ${response.status} ${response.config.method?.toUpperCase()} ${response.config.url}`);
		return response;
	},
	(error) => {
		if (error.response) {
			// Server responded with error status
			console.error(`❌ ${error.response.status} ${error.response.statusText}:`, error.response.data);
		} else if (error.request) {
			// Request was made but no response received
			console.error("❌ No response received:", error.request);
		} else {
			// Something else happened
			console.error("❌ Error:", error.message);
		}
		return Promise.reject(error);
	}
);

export const api = {
	async getProducts(): Promise<Product[]> {
		try {
			const response = await apiClient.get("/products");
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 404) {
					throw new Error("Products not found");
				} else if (error.code === "ECONNABORTED") {
					throw new Error("Request timeout - please try again");
				} else {
					throw new Error(error.response?.data?.message || "Failed to fetch products");
				}
			}
			throw new Error("An unexpected error occurred");
		}
	},

	async getProduct(id: number): Promise<Product> {
		try {
			const response = await apiClient.get(`/products/${id}`);
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (error.response?.status === 404) {
					throw new Error("Product not found");
				} else if (error.code === "ECONNABORTED") {
					throw new Error("Request timeout - please try again");
				} else {
					throw new Error(error.response?.data?.message || "Failed to fetch product");
				}
			}
			throw new Error("An unexpected error occurred");
		}
	},
};
