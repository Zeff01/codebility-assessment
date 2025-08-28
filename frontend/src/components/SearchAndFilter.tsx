"use client";

import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { SearchAndFilterProps } from "@/interfaces";

export function SearchAndFilter({
	searchTerm,
	setSearchTerm,
	debouncedSearchTerm,
}: SearchAndFilterProps) {
	const isSearching = searchTerm !== debouncedSearchTerm;

	return (
		<div className="flex flex-col sm:flex-row gap-4 w-full">
			<div className="relative flex-1">
				<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
				<Input
					type="text"
					placeholder="Search products by name..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="pl-10 pr-10"
				/>
				{isSearching && (
					<Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 animate-spin" />
				)}
			</div>
		</div>
	);
}
