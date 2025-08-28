import { ReactNode } from "react";

// Product interfaces
export interface Product {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}

export interface ProductListResponse {
	products: Product[];
	total: number;
}

// Context interfaces
export interface ProductContextType {
	products: Product[];
	loading: boolean;
	error: string | null;
	fetchProducts: () => void;
	totalProducts: number;
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	debouncedSearchTerm: string;
	filteredProducts: Product[];
}

export interface ProductProviderProps {
	children: ReactNode;
}

export interface UIContextType {
	showNotification: (
		message: string,
		type: "success" | "error" | "info",
		duration?: number
	) => void;
	notifications: never[];
}

export interface UIProviderProps {
	children: ReactNode;
}

// Component prop interfaces
export interface ProductCardProps {
	product: Product;
}

export interface SearchAndFilterProps {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	debouncedSearchTerm: string;
}

export interface LoadingSpinnerProps {
	size?: "sm" | "md" | "lg";
	text?: string;
	className?: string;
}

export interface ProductDetailContentProps {
	productId: number;
}

// Page prop interfaces
export interface ProductPageProps {
	params: Promise<{ id: string }>;
}

// Provider prop interfaces
export interface ProductProviderProps {
	children: ReactNode;
}

export interface UIProviderProps {
	children: ReactNode;
}

export interface ProvidersProps {
	children: ReactNode;
}
