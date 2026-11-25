"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ProductProvider } from "@/contexts/ProductContext";
import { UIProvider } from "@/contexts/UIContext";
import { Toaster } from "@/components/ui/sonner";
import { ProvidersProps } from "@/interfaces";

export function Providers({ children }: ProvidersProps) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 5 * 60 * 1000, // 5 minutes
						gcTime: 10 * 60 * 1000, // 10 minutes
						retry: 3,
						retryDelay: (attemptIndex) =>
							Math.min(1000 * 2 ** attemptIndex, 30000),
					},
				},
			})
	);

	return (
		<QueryClientProvider client={queryClient}>
			<UIProvider>
				<ProductProvider>
					{children}
					<Toaster />
				</ProductProvider>
			</UIProvider>
		</QueryClientProvider>
	);
}
