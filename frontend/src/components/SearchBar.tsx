"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import SearchDropdown from './SearchDropdown';
import { searchOptions } from '@/data/searchOptions';

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="w-full py-4">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="flex items-center bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-1 w-full max-w-none mx-auto">
            <div className="flex-1 relative">
              {/* Search icon fixed inside input */}
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                placeholder="Search over 250 gift card brands"
                className="w-full pl-10 pr-3 bg-transparent outline-none text-gray-800 placeholder-gray-500 py-2 text-lg"
              />
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-2 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-lg">
              <Search size={20} />
            </button>
          </div>

          <SearchDropdown
            isOpen={isSearchFocused}
            searchQuery={searchQuery}
            options={searchOptions}
            onSelectOption={(option) => {
              setSearchQuery(option.name);
              setIsSearchFocused(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}