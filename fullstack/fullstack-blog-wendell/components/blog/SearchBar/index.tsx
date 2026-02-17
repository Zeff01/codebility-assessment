import React from "react";

interface SearchBarProps {
  search: string;
  setSearch: (val: string) => void;
  categories: string[];
  activeCategory: string;
  setActiveCategory: (val: string) => void;
}

export const SearchBar = ({
  search,
  setSearch,
  categories,
  activeCategory,
  setActiveCategory,
}: SearchBarProps) => (
  // Changed: bg-background/80 -> bg-foreground/5 for a darker, grounded container
  // Changed: border-foreground/5 -> border-foreground/10 for sharper definition
  <section className="sticky top-4 z-10 bg-foreground/5 backdrop-blur-lg py-6 mb-12 rounded-2xl border border-foreground/10 px-6 shadow-sm">
    <div className="flex flex-col gap-6 md:flex-row md:items-center justify-between">
      {/* Search Input: Using bg-background to make it look "carved out" of the darker section */}
      <div className="relative w-full md:max-w-xs">
        <input
          type="text"
          placeholder="Search articles..."
          value={search}
          className="w-full p-3 pl-4 rounded-xl bg-background border border-foreground/20 focus:ring-2 focus:ring-primary/50 outline-none transition-all placeholder:text-foreground/30 text-sm"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              activeCategory === cat
                ? "bg-primary text-background shadow-lg shadow-primary/20"
                : "bg-foreground/5 text-foreground/60 hover:bg-foreground/20 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  </section>
);
